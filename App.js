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
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import theme from './src/assets/useTheme_NotoSans';
import MyStack from './src/navigation/StackNavigator';

// Color Switch Component
const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>{MyStack()}</NavigationContainer>
    </NativeBaseProvider>
  );
};
export default App;
