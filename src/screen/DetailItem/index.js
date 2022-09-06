import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function DetailItem({route}) {
  console.log(route.params);
  return (
    <View>
      <Text>DetailItem {route.params.id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
