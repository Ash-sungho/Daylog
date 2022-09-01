import {format} from 'date-fns';
import React, {useContext, useMemo, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LogContext from '../contexts/LogContext';
import CalenderView from '../screens/main/feed/components/CalenderView';
import FeedList from '../screens/main/feed/components/FeedList';

const CalendarScreen = ({navigation}) => {
  const {logs} = useContext(LogContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), `yyyy-MM-dd`),
  );

  const filteredLogs = logs.filter(
    log => format(new Date(log.date), `yyyy-MM-dd`) === selectedDate,
  );

  const markedDates = useMemo(() => {
    return logs.reduce((acc, current) => {
      const formattedDate = format(new Date(current.date), `yyyy-MM-dd`);
      acc[formattedDate] = {marked: true};
      return acc;
    }, {});
  }, [logs]);

  return (
    <View style={styles.block}>
      <FeedList
        logs={filteredLogs}
        ListHeaderComponent={
          <CalenderView
            markedDates={markedDates}
            selectedDate={selectedDate}
            onselectedDate={setSelectedDate}
          />
        }
      />
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
