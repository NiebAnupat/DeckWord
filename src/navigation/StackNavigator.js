import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Main from '../screens/Main';

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
    </Stack.Navigator>
  );
}

export default MyStack;
