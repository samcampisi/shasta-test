import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#7D5C86',
    fontWeight: '500',
  },
  emptyStateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  emptyStateTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  emptyStateDescription: {
    textAlign: 'center',
    fontSize: 16,
  },
  emptyStateHighlight: {
    fontWeight: 'bold',
    color: '#ff66a4',
  },
});
