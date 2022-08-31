import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import FeedListItem from './FeedListItem';

const FeedList = ({logs, onScrolledBottom}) => {
  const onScroll = e => {
    if (!onScrolledBottom) {
      return;
    }
    const {contentSize, layoutMeasurement, contentOffset} = e.nativeEvent;
    // console.log(
    //   'contentSize:\n',
    //   contentSize,
    //   '\n',
    //   ',layoutMeasurement:\n',
    //   layoutMeasurement,
    //   '\n',
    //   'contentOffset:\n',
    //   contentOffset,
    // );
    const distanceFromBottom =
      contentSize.height - layoutMeasurement.height - contentOffset.y;
    if (
      contentSize.height > layoutMeasurement.height &&
      distanceFromBottom < 75
    ) {
      console.log('바닥과 가깝습니다');
      onScrolledBottom(true);
    } else {
      console.log('바닥과 멀어졌어요');
      onScrolledBottom(false);
    }
  };

  return (
    <FlatList
      style={styles.block}
      data={logs}
      renderItem={({item}) => <FeedListItem log={item} />}
      keyExtractor={log => log.id}
      ItemSeparatorComponent={() => <View style={[styles.separator]} />}
      // onEndReached={() => {
      //   console.log('바닥과 가깝습니다');
      // }}
      // onEndReachedThreshold={0.85}
      onScroll={onScroll}
    />
  );
};

export default FeedList;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
    width: '100%',
  },
});
