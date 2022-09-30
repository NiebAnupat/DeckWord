import { extendTheme } from 'native-base';

const theme = extendTheme({
  fontConfig: {
    Mitr: {
      100: {
        normal: 'Mitr-Thin',
        italic: 'Mitr-ThinItalic',
      },
      200: {
        normal: 'Mitr-ExtraLight',
        italic: 'Mitr-ExtraLightItalic',
      },
      300: {
        normal: 'Mitr-Light',
        italic: 'Mitr-LightItalic',
      },
      400: {
        normal: 'Mitr-Regular',
        italic: 'Mitr-RegularItalic',
      },
      500: {
        normal: 'Mitr-Medium',
        italic: 'Mitr-MediumItalic',
      },
      600: {
        normal: 'Mitr-SemiBold',
        italic: 'Mitr-SemiBoldItalic',
      },
      700: {
        normal: 'Mitr-Bold',
        italic: 'Mitr-BoldItalic',
      },
      800: {
        normal: 'Mitr-ExtraBold',
        italic: 'Mitr-ExtraBoldItalic',
      },
      900: {
        normal: 'Mitr-Black',
        italic: 'Mitr-BlackItalic',
      },
    },
  },

  fonts: {
    heading: 'Mitr',
    body: 'Mitr',
    mono: 'Mitr',
  },
});

export default theme;
