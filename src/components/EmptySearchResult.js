import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const message = {
  NOT_FOUND: '검색 결과가 없습니다.',
  EMPTY_KEYWORD: '검색어를 입력해주세요',
};
console.log(message['NOT_FOUND']);

const EmptySearchResult = ({type}) => {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>{message[type]}</Text>
    </View>
  );
};

export default EmptySearchResult;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: '#9e9e9e',
    fontSize: 16,
  },
});
