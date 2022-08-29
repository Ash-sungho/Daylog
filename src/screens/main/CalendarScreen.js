import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LogContext from '../../contexts/LogContext';

const CalendarScreen = ({navigation}) => {
  const {text} = useContext(LogContext);

  return <View style={styles.block}></View>;
};

export default CalendarScreen;

const styles = StyleSheet.create({
  block: {},
});
