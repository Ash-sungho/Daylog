import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTabNavigation from '../MainTabNavigation';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MainTabNavigation" component={MainTabNavigation} />
    </Stack.Navigator>
  );
};

export default RootStack;
