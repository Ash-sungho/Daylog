import React, {useContext, useEffect, useState} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LogContext from '../../../contexts/LogContext';
import WriteEditor from './components/WriteEditor';
import WriteHeader from './components/WriteHeader';

const WriteScreen = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const {onCreate} = useContext(LogContext);

  const onSave = () => {
    onCreate({
      title: title,
      body: body,
      date: new Date().toISOString(),
    });
    navigation.pop();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.select({ios: 'padding', android: undefined})}>
        <WriteHeader onSave={onSave} />
        <WriteEditor
          title={title}
          onChangeTitle={setTitle}
          body={body}
          onChangeBody={setBody}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default WriteScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoidingView: {
    flex: 1,
  },
});
