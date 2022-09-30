/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/*
มาเอาเงินแสน
 */

import React from 'react';
import { SSRProvider } from '@react-aria/ssr';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import theme from './src/assets/useTheme_Prompt';
import MyStack from './src/navigation/StackNavigator';

// Color Switch Component
const App = () => {
  return (
    <SSRProvider>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>{MyStack()}</NavigationContainer>
      </NativeBaseProvider>
    </SSRProvider>
  );
};
export default App;
