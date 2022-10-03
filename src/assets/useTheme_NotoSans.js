import { extendTheme } from 'native-base';

const theme = extendTheme({
  fontConfig: {
    NotoSansThai: {
      100: {
        normal: 'NotoSansThai-Thin',
      },
      200: {
        normal: 'NotoSansThai-ExtraLight',
      },
      300: {
        normal: 'NotoSansThai-Light',
      },
      400: {
        normal: 'NotoSansThai-Regular',
      },
      500: {
        normal: 'NotoSansThai-Medium',
      },
      600: {
        normal: 'NotoSansThai-SemiBold',
      },
      700: {
        normal: 'NotoSansThai-Bold',
      },
      800: {
        normal: 'NotoSansThai-ExtraBold',
      },
      900: {
        normal: 'NotoSansThai-Black',
      },
    },
  },

  fonts: {
    heading: 'NotoSansThai',
    body: 'NotoSansThai',
    mono: 'NotoSansThai',
  },
});

export default theme;
