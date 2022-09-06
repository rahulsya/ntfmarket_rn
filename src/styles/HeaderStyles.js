import {StyleSheet} from 'react-native';
import {normalize} from './globals/fonts';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: normalize(40),
  },
});
