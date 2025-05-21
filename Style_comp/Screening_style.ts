import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03045e',
  },
  header: {
    height: 460,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  titletwo: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 15,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -7,
    marginBottom: 30,
  },
  locationText: {
    color: 'white',
    marginLeft: 5,
  },

  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  optionBox: {
    height: 80,
    width: 160,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginLeft: -180,
    padding: 20,
    marginVertical: 15,
  },
  optionText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  scrollSection: {
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 5,
  },
  via: {
    borderColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 20,
    marginTop: 10,
    borderWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageOptionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginLeft: -120,
  },

  doctorImage: {
    width: 400,
    height: 225,
  },

  optionColumn: {
    justifyContent: 'space-evenly',
    height: 160,
  },
});
