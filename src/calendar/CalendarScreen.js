import React, {useContext, useEffect, useRef, useState} from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import LogContext from '../contexts/LogContext';
import CalenderView from '../screens/main/feed/components/CalenderView';

const CalendarScreen = ({navigation}) => {
  return (
    <View style={styles.block}>
      <CalenderView />
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  block: {flex: 1},
  ractangle: {
    width: 100,
    height: 100,
    // backgroundColor: 'red',
  },
  test2: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
  },
});
