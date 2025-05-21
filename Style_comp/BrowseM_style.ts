import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90e0ef',
  },
  searchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    borderRadius: 10,
    borderColor: '#03045e',
    borderWidth: 1,
    marginHorizontal: 15,
    marginVertical: 15,
    paddingHorizontal: 20,
    fontSize: 18,
    backgroundColor: 'white',
  },
  cartIcon: {
    padding: 15,
  },
  listWrap: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 4,
    margin: 6,
    padding: 10,
    height: 370,
    width: 185,
  },
  image: {
    height: 170,
    width: 170,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#03045e',
    textAlign: 'center',
    marginTop: 6,
  },
  detail: {
    fontSize: 13,
    color: '#023047',
    textAlign: 'center',
    marginVertical: 2,
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#0077b6',
  },
  manufacturer: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#6c757d',
    textAlign: 'center',
  },
  squareButton: {
    marginTop: 6,
    backgroundColor: '#0077b6',
    paddingVertical: 10,
    width: '100%',
    borderRadius: 8,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default styles;
