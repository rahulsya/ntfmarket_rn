import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../styles/globals/colors';

export default function Button({title, type, icon}) {
  if (type === 'has-icon') {
    return (
      <TouchableOpacity style={styles.btnIconWrapper}>{icon}</TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnIconWrapper: {
    height: 46,
    width: 46,
    borderRadius: 12,
    backgroundColor: colors.white,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.lightGrey,
  },
});
