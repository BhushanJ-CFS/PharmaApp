
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: '#0B2E33', // dark base
  },
  maincontainer: {
    flex: 1,
    backgroundColor: '#90e0ef',
    paddingHorizontal: 24,
    paddingTop: 150,
  },
  logintext: {
    color: '#03045e',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'center',
  },
  subtext: {
    color: '#03045e',
    textAlign: 'center',
    marginTop: 20,
  },
  ssubtext: {
    color: '#03045e',
    textAlign: 'center',
    marginBottom: 30,
  },
  usernamecontainer: {
    backgroundColor: '#00b4d8',
    borderRadius: 12,
    height: 55,
    paddingHorizontal: 20,
    color: 'white',
    borderWidth: 1,
    borderColor: '#93B1B5',
    marginBottom: 20,
  },
  passnamecontainer: {
    backgroundColor: '#00b4d8',
    borderRadius: 12,
    height: 55,
    paddingHorizontal: 20,
    color: 'white',
    borderWidth: 1,
    borderColor: '#93B1B5',
    marginBottom: 10,
  },
  forgot: {
    color: '#03045e',
    textAlign: 'right',
    marginRight: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#03045e',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  side:{marginLeft:50},
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  gbutton: {
    backgroundColor: '#03045e',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  gbuttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
