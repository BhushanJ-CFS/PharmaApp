import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrap: {
    padding: 15,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  centeredItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productcard: {
    height: 100,
    width: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    elevation: 4,
    margin: 4,
    marginBottom: 15,
    padding: 15,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 15,
  },
  productText: {
    marginTop: 5,
    fontWeight: '800',
    textAlign: 'center',
    color: '#333',
    fontSize: 12,
  },
  headerContainer: {
    padding: 15,
    backgroundColor: '#90e0ef',
    borderRadius: 30,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#03045e',
  },
});

export default styles;
