import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTabNavigation from '../MainTabNavigation';
import WriteScreen from './write/WriteScreen';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainTabNavigation" component={MainTabNavigation} />
      <Stack.Screen name="WriteScreen" component={WriteScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
