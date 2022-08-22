import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {MoviesShowsCard} from '../../components';
import {setFavouriteList} from '../../redux/actions/favouriteAction';

const Favourites = ({navigation}) => {
  const dispatch = useDispatch();
  const {favouriteList} = useSelector(state => state.favouriteReducer);

  const renderItem = ({item, index}) => {
    return (
      <MoviesShowsCard
        index={index}
        item={item}
        onButtonPress={() => {
          dispatch(setFavouriteList(item));
        }}
        onPress={() =>
          navigation.navigate('DetailDescription', {imdbID: item.imdbID})
        }
      />
    );
  };

  return (
    <View style={styles.mainContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={favouriteList}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Favourites;
