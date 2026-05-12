import React from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import { styles } from "../app/note-styles";

interface AddNoteProps {
  isDark: boolean;
  valueText: string;
  setValueText: (text: string) => void;
  preview: string;
  setPreview: (text: string) => void;
  handleNote: () => void;
}

const AddNote = ({
  isDark,
  valueText,
  setValueText,
  preview,
  setPreview,
  handleNote,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        numberOfLines={2}
        placeholder="Enter Note Title"
        placeholderTextColor={isDark ? "#A0ADC0" : "#8F9BB3"}
        style={[styles.input, isDark ? styles.inputDark : styles.inputLight]}
        value={valueText}
        onChangeText={setValueText}
      />

      <TextInput
        placeholder="Enter note description"
        placeholderTextColor={isDark ? "#A0ADC0" : "#8F9BB3"}
        multiline
        numberOfLines={5}
        textAlignVertical="top"
        style={[styles.input, styles.textArea, isDark ? styles.inputDark : styles.inputLight]}
        value={preview}
        onChangeText={setPreview}
      />

      <Pressable
        style={({ pressed }) => [styles.primaryButton, isDark && styles.primaryButtonDark, pressed && styles.buttonPressed]}
        onPress={handleNote}
      >
        <Text style={[styles.buttonText, isDark && styles.buttonTextDark]}>Add note</Text>
      </Pressable>
    </View>
  );
};

export default AddNote;