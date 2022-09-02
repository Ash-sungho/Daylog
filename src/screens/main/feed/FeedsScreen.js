import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import FloatingWriteButton from '../../../components/FloatingWriteButton';
import LogContext from '../../../contexts/LogContext';
import {buttonTest} from '../../../calendar/CalendarScreen';
import FeedList from './components/FeedList';

const FeedsScreen = ({navigation}) => {
  const {logs} = useContext(LogContext);
  const [hidden, setHidden] = useState(false);
  // console.log(JSON.stringify(logs, null, 2));

  useEffect(() => {}, [logs]);

  const onScrolledBottom = isBottom => {
    if (hidden !== isBottom) {
      setHidden(isBottom);
    }
  };
  return (
    <View style={styles.block}>
      <FeedList logs={logs} onScrolledBottom={onScrolledBottom} />
      <FloatingWriteButton hidden={hidden} />
    </View>
  );
};

export default FeedsScreen;

const styles = StyleSheet.create({
  block: {flex: 1, backgroundColor: 'white'},
});
