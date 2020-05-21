import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontal: {
    flexDirection: 'row',
  },
  label: {
    color: '#222222',
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: '#555555',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    fontSize: 15,
    fontWeight: '600',
    backgroundColor: 'white',
    color: '#222222',
    width: '100%',
  },
  inputFocused: {
    borderColor: '#BF9ACA',
    borderWidth: 1,
    shadowColor: '#7D5C86',
    elevation: 2,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 1.5,
  },
});
