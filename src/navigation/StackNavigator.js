import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Main from '../screens/Main';
import Result from '../screens/Result';
import Play from '../screens/Play';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
        unmountOnBlur={true}
      />
      <Stack.Screen
        name="Play"
        component={Play}
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
        unmountOnBlur={true}
      />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
