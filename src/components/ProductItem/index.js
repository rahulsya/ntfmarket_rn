import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const {width} = Dimensions.get('window');

export default function ProductItem({item}) {
  return (
    <View style={styles.wrapper}>
      <Image resizeMode="cover" style={styles.image} source={item.image_url} />
      <View>
        <Text>By {item.creator}</Text>
        <Text>Curent Price</Text>
      </View>
      <View>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {width: width * 0.8, marginHorizontal: 20},
  image: {
    width: 326,
    height: 310,
    borderRadius: 40,
  },
});
