import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: '#222222',
    fontSize: 16,
    marginRight: 10,
    fontWeight: 'bold',
  },
  horizontalLabel: {
    minWidth: '30%',
    textAlign: 'right',
    marginLeft: 10,
  },
  inputContainer: {
    width: '100%',
    overflow: 'hidden',
    paddingBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#555555',
    borderBottomWidth: 1,
    padding: 10,
    marginTop: 10,
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: 'white',
    color: '#222222',
  },
  horizontalInput: {
    width: undefined,
    flex: 1,
    marginRight: 25,
  },
  inputFocused: {
    borderColor: '#BF9ACA',
    borderBottomWidth: 1,
    shadowColor: '#7D5C86',
    elevation: 1,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
