import {Dimensions, PixelRatio} from 'react-native';

const baseWidth = 375;
const scale = Dimensions.get('window').width / baseWidth;
export const normalize = size => {
  const newSize = size * scale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
};

export const fonts = {
  ManropeBold: 'Manrope-Bold',
  ManropeExtraBold: 'Manrope-ExtraBold',
  ManropeExtraLight: 'Manrope-ExtraLight',
  ManropeLight: 'Manrope-Light',
  ManropeMedium: 'Manrope-Medium',
  ManropeRegular: 'Manrope-Regular',
  ManropeSemiBold: 'Manrope-SemiBold',
};

export const size = {
  extraSmall: normalize(14),
  small: normalize(16),
  regular: normalize(18),
  medium: normalize(20),
  large: normalize(24),
  extraLarge: normalize(28),
};
