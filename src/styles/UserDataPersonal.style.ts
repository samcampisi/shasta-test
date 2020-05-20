import { StyleSheet } from 'react-native';

export const sheetStyles = {
  wrapper: {
    paddingHorizontal: 10,
  },
  titleText: {
    fontSize: 16,
    paddingHorizontal: 15,
  },
};

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e9e9e9',
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
  title: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#7D5C86',
    fontWeight: '500',
  },
  inputFocused: {
    borderColor: '#BF9ACA',
    borderWidth: 1.5,
    shadowColor: '#7D5C86',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 1.5,
  },
  imageContainer: {
    height: 120,
    width: 120,
    justifyContent: 'flex-end',
    marginTop: 15,
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: '#ffffff',
  },
  opaque: {
    opacity: 0.6,
  },
  iconContainer: {
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#ff66a4',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageIcon: {
    tintColor: '#ffffff',
    width: 22,
    height: 22,
  },
});
