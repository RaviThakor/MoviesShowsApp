import React from 'react';
import {View, TextInput, Image, Pressable} from 'react-native';
import styles from './style';
import search from '../../assets/images/search.png';

const InputBox = ({
  onChangeText,
  value,
  placeholder,
  onSubmitEditing,
  onSearchPress,
}) => {
  return (
    <View style={styles.mainContainer}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        style={styles.inputStyle}
        onSubmitEditing={onSubmitEditing}
      />
      <Pressable onPress={onSearchPress}>
        <Image source={search} />
      </Pressable>
    </View>
  );
};

export default InputBox;
