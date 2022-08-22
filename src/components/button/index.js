import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';

const CButton = ({title, onPress, buttonStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[styles.mainContainer, buttonStyle]}>
      <Text style={{color: '#fff'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CButton;
