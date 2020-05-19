import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: '#ff66a4',
    margin: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  disabled: {
    backgroundColor: '#575757',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  icon: {
    width: 30,
    height: 25,
    tintColor: '#ffffff',
    marginRight: 10,
  },
});
