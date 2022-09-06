import {StyleSheet} from 'react-native';
import {colors} from '../styles/globals/colors';
import {size, fonts} from '../styles/globals/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  PH: {
    paddingHorizontal: 28,
  },
  textHeader: {
    fontSize: size.large,
    fontFamily: fonts.ManropeExtraBold,
    color: colors.black,
    paddingLeft: 12,
  },
});
