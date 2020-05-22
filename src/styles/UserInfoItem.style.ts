import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff5fc',
    minHeight: 80,
    flex: 1,
  },
  fill: { flex: 1 },
  horizontal: { flexDirection: 'row' },
  disabled: {
    opacity: 0.5,
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  text: {
    color: '#222222',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconContainer: {
    justifyContent: 'center',
  },
  icon: {
    width: 30,
    height: 25,
    tintColor: '#ffffff',
    marginRight: 10,
  },
  profilePictureContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 58,
    height: 58,
    backgroundColor: '#7D5C8650',
    borderRadius: 29,
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  bottomContainer: {
    marginTop: 15,
  },
  bottomText: {
    fontSize: 15,
    marginLeft: 8,
  },
  bottomItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomIcon: {
    width: 25,
    height: 25,
  },
});
