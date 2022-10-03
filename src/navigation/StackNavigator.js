import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Main from '../screens/Main';
import Result from '../screens/Result';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Result"
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerTitle: 'DECK WORD',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#ffffff',
            fontSize: 25,
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#3a5ba0',
          },
        }}
      />
      <Stack.Screen
        name="Result"
        component={Result}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
