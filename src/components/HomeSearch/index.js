import React from 'react';
import {View, Text} from 'react-native';

import AntDesigned from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

const HomeSearch = () => {
  return (
    <View>
      <Text style={styles.inputBox}>Where To?</Text>

      <View style={styles.timeContainer}>
        <AntDesigned name={'clockcircle'} size={16} color={'#535353'} />
        <Text>Now</Text>
        <MaterialIcons name={'keyboard-arrow-down'} size={16} />
      </View>
    </View>
  );
};

export default HomeSearch;
