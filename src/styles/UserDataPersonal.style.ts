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
    backgroundColor: '#ffffff',
  },
  fill: { flex: 1 },
  horizontal: { flexDirection: 'row' },
  fullWidth: { width: '100%' },
  centerItems: { alignItems: 'center' },
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
    alignSelf: 'center',
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
  leftItem: {
    marginLeft: 15,
    marginRight: 7.5,
  },
  rightItem: {
    marginRight: 15,
    marginLeft: 7.5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '30%',
    marginLeft: 15,
    textAlign: 'right',
    paddingRight: 10,
  },
  customButton: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#222222',
    borderRadius: 20,
    minHeight: 40,
  },
  button: {
    alignSelf: 'flex-start',
    marginHorizontal: 0,
    paddingVertical: 9,
  },
  buttonText: {
    color: '#222222',
  },
  buttonImage: {
    width: 17,
    height: 17,
    tintColor: '#222222',
  },
  countryButton: {
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  topSpacing: {
    marginTop: 20,
  },
  mainButton: {
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
