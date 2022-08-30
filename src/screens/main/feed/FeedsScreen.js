import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import FloatingWriteButton from '../../../components/FloatingWriteButton';
import LogContext from '../../../contexts/LogContext';
import FeedList from './components/FeedList';

const FeedsScreen = ({navigation}) => {
  const {logs} = useContext(LogContext);
  // console.log(JSON.stringify(logs, null, 2));
  return (
    <View style={styles.block}>
      <FeedList logs={logs} />
      <FloatingWriteButton />
    </View>
  );
};

export default FeedsScreen;

const styles = StyleSheet.create({
  block: {flex: 1, backgroundColor: 'white'},
});
