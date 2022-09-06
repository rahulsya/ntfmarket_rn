import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../styles/globals/colors';
import {fonts, normalize, size} from '../../styles/globals/fonts';

export default function Categories() {
  const data = ['Art', 'Music', 'Games', 'Domains'];
  const [active, setActive] = useState('Art');
  return (
    <View style={Styles.wrapper}>
      {data.map((item, index) => {
        return (
          <TouchableOpacity
            onPress={() => setActive(item)}
            style={Styles.itemContainer({
              active: active === item ? true : false,
            })}
            key={index}>
            <Text
              style={Styles.itemText({active: active === item ? true : false})}>
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: normalize(23),
    marginBottom: normalize(49),
  },
  itemContainer: ({active}) => ({
    borderRadius: 12,
    backgroundColor: active ? colors.blue : colors.white,
    borderWidth: 1,
    borderColor: active ? colors.blue : colors.gray100,
    marginRight: normalize(12),
  }),
  itemText: ({active}) => ({
    paddingVertical: normalize(8),
    paddingHorizontal: normalize(20),
    color: active ? colors.white : colors.black,
    fontSize: size.extraSmall,
    fontFamily: fonts.ManropeSemiBold,
  }),
});
