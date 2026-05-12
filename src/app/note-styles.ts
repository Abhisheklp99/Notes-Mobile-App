import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  allFlexOne: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop:15
  },
  containerLarge: {
    maxWidth: 900,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 40,
  },
  columnWrapper: {
    gap: 16,
  },
  headerContainer: {
    marginVertical: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
  },
  headerDark: {
    color: "#885d7b",
  },
  headerLight: {
    color: "#d7dbf4",
  },
  inputContainer: {
    marginBottom: 10,
  },
  input: {
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    marginBottom: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  inputLight: {
    backgroundColor: "#FFFFFF",
    borderColor: "#E4E9F2",
    color: "#222B45",
  },
  inputDark: {
    backgroundColor: "#1b2c36",
    borderColor: "#2a454b",
    color: "#FFFFFF",
  },
  textArea: {
    minHeight: 120,
  },
  primaryButton: {
    backgroundColor: "#4A90E2",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: '#4A90E2',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  primaryButtonDark: {
    backgroundColor: "#50B5FF",
  },
  flexButton: {
    flex: 1,
    marginLeft: 10,
  },
  cancelButton: {
    backgroundColor: "#bcc6d8",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    flex: 1,
    marginRight: 10,
  },
  cancelButtonDark: {
    backgroundColor: "#4A6572",
  },
  cancelButtonText: {
    color: "#222B45",
  },
  cancelButtonTextDark: {
    color: "#FFFFFF",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
  },
  buttonTextDark: {
    color: "#212638",
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.98 }],
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  errorText: {
    color: "#FF3D71",
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "600",
    textAlign: "center",
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 24,
    paddingTop: 10,
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 3,
  },
  cardDark: {
    backgroundColor: '#1b2c36', 
  },
  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#222B45',
    marginBottom: 8,
  },
  cardPreview: {
    fontSize: 16,
    color: '#8F9BB3',
    marginBottom: 16,
    lineHeight: 22,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(143, 155, 179, 0.15)',
  },
  cardTime: {
    fontSize: 13,
    color: '#8F9BB3',
    fontWeight: '500',
  },
  textDark: {
    color: '#FFFFFF',
  },
  textMutedDark: {
    color: '#A0ADC0',
  },
  editButton: {
    backgroundColor: 'rgba(74, 144, 226, 0.1)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  editButtonText: {
    color: '#9dbadb',
    fontWeight: '600',
    fontSize: 16,
  },
});