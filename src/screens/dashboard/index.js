import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {InputBox, MoviesShowsCard} from '../../components';
import {getMoviesAndShows} from '../../redux/actions/dashboardAction';
import {setFavouriteList} from '../../redux/actions/favouriteAction';

const Dashboard = ({navigation}) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const {moviesAndShowsList} = useSelector(state => state.dashboardReducer);

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

  const searchAction = () => {
    dispatch(getMoviesAndShows(search));
  };

  return (
    <View style={styles.mainContainer}>
      <Text
        style={styles.favouriteText}
        onPress={() => navigation.navigate('Favourites')}>
        Favourites
      </Text>
      <InputBox
        placeholder="Search here..."
        onChangeText={value => setSearch(value)}
        value={search}
        onSearchPress={searchAction}
        onSubmitEditing={searchAction}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={moviesAndShowsList}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Dashboard;
