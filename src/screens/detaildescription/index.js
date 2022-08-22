import React, {useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getDescription} from '../../redux/actions/dashboardAction';
import styles from './style';

const DetailDescription = ({route}) => {
  const dispatch = useDispatch();
  const {detailData} = useSelector(state => state.dashboardReducer);
  const {imdbID} = route.params;
  console.log(' fsdf : ', imdbID, detailData);
  const {Poster, Title, Plot, imdbRating} = detailData;

  useEffect(() => {
    if (imdbID) {
      dispatch(getDescription(imdbID));
    }
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Image
        source={{uri: Poster}}
        resizeMode="contain"
        style={styles.poster}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Title : {Title}</Text>
        <Text style={styles.description}>Plot : {Plot}</Text>
        <Text style={styles.rating}>Rating : {imdbRating}</Text>
      </View>
    </View>
  );
};

export default DetailDescription;
