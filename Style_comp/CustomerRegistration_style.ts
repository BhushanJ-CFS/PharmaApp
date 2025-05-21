import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: '#90e0ef',
  },
  maincontainer: {
    padding: 20,
    paddingTop: 150,
    justifyContent: 'center',
  },
  logintext: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#03045e',
    textAlign: 'center',
    marginBottom: 10,
  },
  stext: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Brush Script MT',
    color: '#03045e',
    textAlign: 'center',
    marginBottom: 10,
  },
  ssubtext: {
    fontSize: 14,
    color: '#03045e',
    textAlign: 'center',
    marginBottom: 30,
  },
  usernamecontainer: {
    borderWidth: 1,
    borderColor: '#93B1B5',
    backgroundColor: '#00b4d8',
    color: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  passnamecontainer: {
    borderWidth: 1,
    borderColor: '#93B1B5',
    backgroundColor: '#00b4d8',
    color: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#03045e',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    marginHorizontal: 120,
    marginVertical: 60,
  },
});

export default styles;
