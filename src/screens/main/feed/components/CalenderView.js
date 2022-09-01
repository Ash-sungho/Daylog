import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Calendar} from 'react-native-calendars';

const CalenderView = () => {
  const markedDates = {
    '2022-09-02': {
      selected: true,
    },
    '2022-09-03': {
      marked: true,
    },
    '2022-09-04': {
      marked: true,
    },
  };

  return (
    <View>
      <Calendar
        style={styles.calender}
        markedDates={markedDates}
        theme={{
          selectedDayBackgroundColor: '#009688',
          arrowColor: '#009688',
          dotColor: '#009688',
          todayTextColor: '#009688',
        }}
      />
    </View>
  );
};

export default CalenderView;

const styles = StyleSheet.create({
  calender: {
    borderWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});
