import React, { useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../app/note-styles";
import NoteAppEditComponent from "./NoteAppEditComponent";
import AddNote from "./AddNote";

interface Notes {
  title: string;
  preview: string;
  isDeleted: boolean;
  time: string;
}

function NotesCard({
  title,
  preview,
  cardId,
  setIsEditing,
  setEditingNote,
  time,
  isDark,
}: any) {
  function handleEditCard() {
    setIsEditing(true);
    setEditingNote({ title, preview, time, isDeleted: false });
  }

  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        isDark && styles.cardDark,
        pressed && styles.cardPressed,
      ]}
    >
      <Text style={[styles.cardTitle, isDark && styles.textDark]}>{title}</Text>
      <Text
        style={[styles.cardPreview, isDark && styles.textMutedDark]}
        numberOfLines={2}
      >
        {preview}
      </Text>

      <View style={styles.cardFooter}>
        <Text style={[styles.cardTime, isDark && styles.textMutedDark]}>
          {time}
        </Text>
        <Pressable
          onPress={handleEditCard}
          style={({ pressed }) => [
            styles.editButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.editButtonText}>Edit</Text>
        </Pressable>
      </View>

      {/* 
      <Pressable onPress={()=>handleDelteCard(cardId,title,preview,date)}>
    <Text>Delete</Text>
  </Pressable> */}
    </Pressable>
  );
}

const NotesApp = () => {
  const theme = useColorScheme();
  const isDark = theme === "dark";
  const { width } = useWindowDimensions();
  const isTablet = width >= 768;
  const numColumns = isTablet ? 2 : 1;

  const [notes, setNotes] = useState<Notes[]>([]);
  const [valueText, setValueText] = useState("");
  const [preview, setPreview] = useState("");
  const [noteError, setNoteError] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingNote, setEditingNote] = useState<Notes | null>(null);

  function handleNote() {
    const trimmedNote = valueText.trim();
    const trimmedPreview = preview.trim();

    if (trimmedNote.length === 0) {
      setNoteError("Cannot add Empty Note");
      return;
    } else if (trimmedPreview.length === 0) {
      setNoteError("Cannot add Empty Description of the Note");
      return;
    }
    setNoteError("");

    const newNote = trimmedNote[0].toUpperCase() + trimmedNote.slice(1);
    const newPreview =
      trimmedPreview[0].toUpperCase() + trimmedPreview.slice(1);
    const newNotesObj = {
      preview: newPreview,
      title: newNote,
      time: new Date().toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }),
      isDeleted: false,
    };
    setNotes((item) => [newNotesObj, ...item]);
    setValueText("");
    setPreview("");
  }

  function handleSaveEdit() {
    if (!editingNote) return;
    const trimmedNote = editingNote.title.trim();
    const trimmedPreview = editingNote.preview.trim();

    if (trimmedNote.length === 0) {
      setNoteError("Cannot save Empty Note");
      return;
    } else if (trimmedPreview.length === 0) {
      setNoteError("Cannot save Empty Description");
      return;
    }
    setNoteError("");

    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.map((note) => {
        if (note.time === editingNote.time) {
          return {
            ...note,
            title: trimmedNote[0].toUpperCase() + trimmedNote.slice(1),
            preview: trimmedPreview[0].toUpperCase() + trimmedPreview.slice(1),
          };
        }

        return note;
      });
      return updatedNotes;
    });
    setIsEditing(false);
    setEditingNote(null);
  }

  function handleCancelEdit() {
    setIsEditing(false);
    setEditingNote(null);
    setNoteError("");
  }

  return (
    <LinearGradient
      colors={isDark ? ["#0d2b40",'#5e4590', "#12424d"] : ["#f6d5f7", "#bbf4f5"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.allFlexOne}
    >
      <SafeAreaView style={styles.allFlexOne}>
        <KeyboardAvoidingView
          style={styles.allFlexOne}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
        <View style={[styles.container, isTablet && styles.containerLarge]}>
            <View style={styles.headerContainer}>
              <Text
                style={[
                  styles.header,
                  isDark ? styles.headerLight : styles.headerDark,
                ]}
              >
                Every Idea Matters
              </Text>
            </View>

            {!isEditing && (
              <AddNote
                isDark={isDark}
                valueText={valueText}
                setValueText={setValueText}
                preview={preview}
                setPreview={setPreview}
                handleNote={handleNote}
              />
            )}

            {isEditing && editingNote && (
              <NoteAppEditComponent
                isDark={isDark}
                editingNote={editingNote}
                setEditingNote={setEditingNote}
                handleCancelEdit={handleCancelEdit}
                handleSaveEdit={handleSaveEdit}
              />
            )}

            {noteError ? (
              <Text style={styles.errorText}>{noteError}</Text>
            ) : null}

            <FlatList
              key={`flatlist-${numColumns}`}
              numColumns={numColumns}
              columnWrapperStyle={isTablet ? styles.columnWrapper : undefined}
              style={styles.list}
              contentContainerStyle={styles.listContent}
              data={notes}
              renderItem={({ item }) => (
                <NotesCard
                  title={item.title}
                  cardId={item.time}
                  time={item.time}
                  setEditingNote={setEditingNote}
                  setIsEditing={setIsEditing}
                  preview={item.preview}
                  isDark={isDark}
                />
              )}
              keyExtractor={(item) => item.time}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default NotesApp;
