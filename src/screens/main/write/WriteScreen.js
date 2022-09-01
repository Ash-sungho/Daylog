import React, {useContext, useEffect, useState} from 'react';
import {Alert, KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LogContext from '../../../contexts/LogContext';
import {button} from '../../../calendar/CalendarScreen';
import WriteEditor from './components/WriteEditor';
import WriteHeader from './components/WriteHeader';

const WriteScreen = ({navigation, route}) => {
  const log = route.params?.log;
  const [title, setTitle] = useState(log?.title ?? '');
  const [body, setBody] = useState(log?.body ?? '');
  const {onCreate, onModify, onRemove} = useContext(LogContext);

  const onSave = () => {
    const now = new Date(); // 현재 시간
    const utcNow = now.getTime() + now.getTimezoneOffset() * 60 * 1000; // 현재 시간을 utc로 변환한 밀리세컨드값
    const koreaTimeDiff = 9 * 60 * 60 * 1000; // 한국 시간은 UTC보다 9시간 빠름(9시간의 밀리세컨드 표현)
    const koreaNow = new Date(utcNow + koreaTimeDiff);

    if (log) {
      onModify({
        id: log.id,
        title: title,
        body: body,
        date: log.date,
      });
    } else {
      onCreate({
        title: title,
        body: body,
        date: koreaNow.toISOString(),
      });
    }
    navigation.pop();
  };

  const askRemove = () => {
    Alert.alert('삭제', '정말로 삭제하시겠어요?', [
      {
        text: '취소',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: '삭제',
        onPress: () => {
          onRemove({
            id: log.id,
          });
          navigation.pop();
        },
        style: 'destructive',
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.select({ios: 'padding', android: undefined})}>
        <WriteHeader onSave={onSave} onRemove={askRemove} idEditing={!!log} />
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
