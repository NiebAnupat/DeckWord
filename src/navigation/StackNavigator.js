import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Main from '../screens/Main';
import AddWord from '../screens/AddWord';

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
            color: '#fff',
            fontSize: 30,
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#34d399',
            height: 60,
          },
        }}
      />

      <Stack.Screen
        name="AddWord"
        component={AddWord}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
