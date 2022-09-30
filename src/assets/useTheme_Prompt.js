import { extendTheme } from 'native-base';

const theme = extendTheme({
  fontConfig: {
    Prompt: {
      100: {
        normal: 'Prompt-Thin',
        italic: 'Prompt-ThinItalic',
      },
      200: {
        normal: 'Prompt-ExtraLight',
        italic: 'Prompt-ExtraLightItalic',
      },
      300: {
        normal: 'Prompt-Light',
        italic: 'Prompt-LightItalic',
      },
      400: {
        normal: 'Prompt-Regular',
        italic: 'Prompt-RegularItalic',
      },
      500: {
        normal: 'Prompt-Medium',
        italic: 'Prompt-MediumItalic',
      },
      600: {
        normal: 'Prompt-SemiBold',
        italic: 'Prompt-SemiBoldItalic',
      },
      700: {
        normal: 'Prompt-Bold',
        italic: 'Prompt-BoldItalic',
      },
      800: {
        normal: 'Prompt-ExtraBold',
        italic: 'Prompt-ExtraBoldItalic',
      },
      900: {
        normal: 'Prompt-Black',
        italic: 'Prompt-BlackItalic',
      },
    },
  },

  fonts: {
    heading: 'Prompt',
    body: 'Prompt',
    mono: 'Prompt',
  },
});

export default theme;
