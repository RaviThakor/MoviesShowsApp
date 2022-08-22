import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import CButton from '../button';

const MoviesShowsCard = ({item, index, onPress, onButtonPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.mainContainer}>
      <Image source={{uri: item.Poster}} style={styles.poster} />
      <View style={styles.textContainer}>
        <Text>Title : {item.Title}</Text>
        <Text>Type : {item.Type}</Text>
        <Text>Year : {item.Year}</Text>
        <CButton
          buttonStyle={styles.buttonStyle}
          onPress={onButtonPress}
          title="Add to favourites"
        />
      </View>
    </TouchableOpacity>
  );
};

export default MoviesShowsCard;
