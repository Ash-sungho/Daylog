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
    const now = new Date(); // 현재 시간
    const utcNow = now.getTime() + now.getTimezoneOffset() * 60 * 1000; // 현재 시간을 utc로 변환한 밀리세컨드값
    const koreaTimeDiff = 9 * 60 * 60 * 1000; // 한국 시간은 UTC보다 9시간 빠름(9시간의 밀리세컨드 표현)
    const koreaNow = new Date(utcNow + koreaTimeDiff);

    onCreate({
      title: title,
      body: body,
      date: koreaNow.toISOString(),
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
