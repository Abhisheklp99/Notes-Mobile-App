import { ImageBackground } from 'expo-image'
import { useState } from 'react'
import { FlatList, Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "../app/notescard-style";

import { Notes } from '@/app/notes';

function NotesCard({ title, preview, date, darkMode }) {
  return (
    <Pressable style={({ pressed }) => [
      styles.card,
      darkMode && styles.cardDark,
      pressed && styles.cardPressed
    ]}>
      <Text style={[styles.title, darkMode && styles.titleDark]}>{title}</Text>
      <Text style={[styles.preview, darkMode && styles.previewDark]} numberOfLines={2}>{preview}</Text>
      <Text style={[styles.date, darkMode && styles.dateDark]}>{date}</Text>
    </Pressable>
  )
}

const NoteProfile = () => {

  const [searchItem,setSearchItem]=useState('');
  const [darkMode,setDarkMode]=useState(false);


const filteredNotes=Notes.filter((note)=>(
  note.title.toLowerCase().includes(searchItem.toLowerCase())
))

  return (
 
    <LinearGradient  colors={ darkMode? ["#0e1c26","#2a454b"] : ["#f6d5f7", "#bbf4f5"]}
  start={{ x: 0, y: 0 }}
  end={{ x: 1, y: 0 }}
  style={{ flex: 1 }}>
    <SafeAreaView style={styles.container}>
      <View >
      <Text style={darkMode? styles.headerLight :styles.headerDark}>Notes</Text>
      <Switch thumbColor={darkMode ? '#dec83d' : '#eccbec'} value={darkMode} onValueChange={setDarkMode} />
      </View>
      <TextInput 
        style={styles.searchInput} 
        value={searchItem} 
        onChangeText={setSearchItem} 
        placeholder='Search notes...'
        placeholderTextColor="#888"
      />
      
      <FlatList
        data={filteredNotes}
        renderItem={({item}) => (
           <NotesCard title={item.title} preview={item.preview} date={item.date} darkMode={darkMode}/>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    
    </SafeAreaView>

</LinearGradient>

  )
}

export default NoteProfile

