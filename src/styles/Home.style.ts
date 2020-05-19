import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9e9e9',
  },
  welcome: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
    color: '#7D5C86',
    fontWeight: '500',
  },
  instructions: {
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
    marginHorizontal: 15,
    fontSize: 15,
    fontWeight: '600',
    backgroundColor: 'white',
    color: '#222222',
  },
  inputFocused: {
    borderColor: '#BF9ACA',
    borderWidth: 1.5,
  },
});
