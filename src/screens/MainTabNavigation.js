import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CalendarScreen from './main/CalendarScreen';
import FeedsScreen from './main/feed/FeedsScreen';
import SearchScreen from './main/SearchScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="FeedsScreen"
        component={FeedsScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="view-stream" size={size} color={color} />
          ),
          headerShown: true,
          headerTitle: '피드',
        }}
      />
      <Tab.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="event" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarIcon: ({size, color}) => (
            <Icon name="search" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigation;
