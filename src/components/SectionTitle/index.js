import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {fonts, size} from '../../styles/globals/fonts';
import {colors} from '../../styles/globals/colors';

export default function SectionTitle({title}) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.titleButton}>View all</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.ManropeBold,
    fontSize: size.medium,
    color: colors.black,
  },
  titleButton: {
    fontFamily: fonts.ManropeSemiBold,
    fontSize: size.small,
    color: colors.gray100,
  },
});
