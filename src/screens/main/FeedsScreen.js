import React, {useContext} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import LogContext from '../../contexts/LogContext';

const FeedsScreen = ({navigation}) => {
  const {text, setText} = useContext(LogContext);

  return (
    <View style={styles.block}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder={'텍스트를 입력하세요'}
        style={styles.input}
      />
    </View>
  );
};

export default FeedsScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    padding: 16,
    backgroundColor: 'white',
  },
});
