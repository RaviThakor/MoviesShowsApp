import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  poster: {
    width: '90%',
    marginTop: 20,
    height: '60%',
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  description: {
    paddingTop: 10,
  },
  rating: {
    paddingTop: 10,
    fontSize: 16,
  },
});

export default styles;
