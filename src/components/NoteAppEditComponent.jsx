import { Text, View, TextInput, Pressable } from 'react-native'
import React from 'react'
import { styles } from "../app/note-styles";

const NoteAppEditComponent = ({
  isDark,
  editingNote,
  setEditingNote,
  handleCancelEdit,
  handleSaveEdit
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter Note Title"
        placeholderTextColor={isDark ? "#A0ADC0" : "#8F9BB3"}
        style={[styles.input, isDark ? styles.inputDark : styles.inputLight]}
        value={editingNote.title}
        onChangeText={(text) => setEditingNote({ ...editingNote, title: text })}
      />

      <TextInput
        placeholder="Enter note description"
        placeholderTextColor={isDark ? "#A0ADC0" : "#8F9BB3"}
        multiline
        numberOfLines={5}
        textAlignVertical="top"
        style={[styles.input, styles.textArea, isDark ? styles.inputDark : styles.inputLight]}
        value={editingNote.preview}
        onChangeText={(text) => setEditingNote({ ...editingNote, preview: text })}
      />

      <View style={styles.actionRow}>
        <Pressable
          style={({ pressed }) => [styles.cancelButton, isDark && styles.cancelButtonDark, pressed && styles.buttonPressed]}
          onPress={handleCancelEdit}
        >
          <Text style={[styles.buttonText, isDark ? styles.cancelButtonTextDark : styles.cancelButtonText]}>
            Cancel
          </Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [styles.primaryButton, styles.flexButton, isDark && styles.primaryButtonDark, pressed && styles.buttonPressed]}
          onPress={handleSaveEdit}
        >
          <Text style={[styles.buttonText, isDark && styles.buttonTextDark]}>Save edit</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default NoteAppEditComponent
