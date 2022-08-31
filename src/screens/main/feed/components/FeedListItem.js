import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {formatter} from '../../../../utils/formatter';

const FeedListItem = ({log}) => {
  const {title, body, date} = log || {};

  const nativation = useNavigation();

  const onPress = () => {
    nativation.navigate('WriteScreen', {log});
  };

  return (
    <View>
      <Pressable
        style={({pressd}) => [
          styles.block,
          Platform.OS === 'ios' && pressd && {backgroundColor: '#efefef'},
        ]}
        android_ripple={{color: '#ededed'}}
        onPress={onPress}>
        <Text style={styles.date}>{formatter.formatDate(date)}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{formatter.truncate(body)}</Text>
      </Pressable>
    </View>
  );
};

export default FeedListItem;

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  date: {
    fontSize: 12,
    color: '#546e7a',
    marginBottom: 8,
  },
  title: {
    color: '#263238',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bpdy: {
    color: '#37474f',
    fontSize: 16,
    lineHeight: 21,
  },
});
