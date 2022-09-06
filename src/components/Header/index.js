import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../../styles/HeaderStyles';

export default function Header({rightComponents, leftComponent, title}) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {leftComponent}
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        {rightComponents}
      </View>
    </View>
  );
}
