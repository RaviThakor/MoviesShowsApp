import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
  },
  poster: {
    width: 100,
    height: 120,
  },
  textContainer: {
    paddingHorizontal: 10,
    display: 'flex',
    flex: 1,
  },
  buttonStyle: {
    position: 'absolute',
    bottom: 5,
    left: 5,
  },
});

export default styles;
