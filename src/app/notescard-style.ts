import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  background:{
    flex:1
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
  },
  headerDark: {
    fontSize: 34,
    fontWeight: 'bold',
    color:  '#333',
    textAlign:'center',
    marginTop: 20,

  },
  headerLight:{
    color:"#8399a2",
     fontSize: 34,
    fontWeight: 'bold',
    textAlign:'center',
    marginTop: 20,
  },
  searchInput: {
    backgroundColor: '#E4E9F2',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: '#333',
    marginBottom: 22,
    marginTop:10
  },
  listContent: {
    paddingBottom: 20,
  },
  card:{
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  cardDark: {
    backgroundColor: '#1b2c36', 
  },
  cardPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  title:{
    fontSize: 18,
    fontWeight: '600',
    color: '#222B45',
    marginBottom: 8,
  },
  titleDark: {
    color: '#FFFFFF',
  },
  preview:{
    fontSize: 16,
    color: '#8F9BB3',
    marginBottom: 12,
    lineHeight: 20,
  },
  previewDark: {
    color: '#A0ADC0',
  },
  date: {
    fontSize: 13,
    color: '#9baac7',
    textAlign: 'right',
  },
  dateDark: {
    color: '#6c7f93',
  }
})

