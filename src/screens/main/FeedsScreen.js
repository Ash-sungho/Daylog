import React, {useContext} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import FloatingWriteButton from '../../components/FloatingWriteButton';
import LogContext from '../../contexts/LogContext';

const FeedsScreen = ({navigation}) => {
  return (
    <View style={styles.block}>
      <FloatingWriteButton />
    </View>
  );
};

export default FeedsScreen;

const styles = StyleSheet.create({
  block: {flex: 1, backgroundColor: 'white'},
});
