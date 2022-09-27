import {extendTheme} from 'native-base';

const theme = extendTheme({
  fontConfig: {
    NotoSans: {
      100: {
        normal: 'NotoSans-Thin',
        italic: 'NotoSans-ThinItalic',
      },
      200: {
        normal: 'NotoSans-ExtraLight',
        italic: 'NotoSans-ExtraLightItalic',
      },
      300: {
        normal: 'NotoSans-Light',
        italic: 'NotoSans-LightItalic',
      },
      400: {
        normal: 'NotoSans-Regular',
        italic: 'NotoSans-RegularItalic',
      },
      500: {
        normal: 'NotoSans-Medium',
        italic: 'NotoSans-MediumItalic',
      },
      600: {
        normal: 'NotoSans-SemiBold',
        italic: 'NotoSans-SemiBoldItalic',
      },
      700: {
        normal: 'NotoSans-Bold',
        italic: 'NotoSans-BoldItalic',
      },
      800: {
        normal: 'NotoSans-ExtraBold',
        italic: 'NotoSans-ExtraBoldItalic',
      },
      900: {
        normal: 'NotoSans-Black',
        italic: 'NotoSans-BlackItalic',
      },
    },
  },

  fonts: {
    heading: 'NotoSans',
    body: 'NotoSans',
    mono: 'NotoSans',
  },
});

export default theme;
