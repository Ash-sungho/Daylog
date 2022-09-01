import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Calendar} from 'react-native-calendars';

const CalenderView = ({markedDates, selectedDate, onselectedDate}) => {
  const markedSelectedDate = {
    ...markedDates,
    [selectedDate]: {
      selected: true,
      marked: markedDates[selectedDate]?.marked,
    },
  };

  return (
    <View>
      <Calendar
        style={styles.calender}
        markedDates={markedSelectedDate}
        theme={{
          selectedDayBackgroundColor: '#009688',
          arrowColor: '#009688',
          dotColor: '#009688',
          todayTextColor: '#009688',
        }}
        onDayPress={date => {
          onselectedDate(date.dateString);
        }}
      />
    </View>
  );
};

export default CalenderView;

const styles = StyleSheet.create({
  calender: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});
