import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LogContext from '../../contexts/LogContext';

const CalendarScreen = ({navigation}) => {
  const {text} = useContext(LogContext);

  return (
    <View style={styles.block}>
      <Text style={styles.text}>text:{text}</Text>
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    padding: 16,
    fontSize: 24,
  },
});
