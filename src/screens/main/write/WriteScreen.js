import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WriteHeader from './components/WriteHeader';

const WriteScreen = () => {
  return (
    <View style={styles.block}>
      <WriteHeader />
    </View>
  );
};

export default WriteScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});
