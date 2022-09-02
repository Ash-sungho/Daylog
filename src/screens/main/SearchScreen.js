import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import EmptySearchScreen, {message} from '../../components/EmptySearchResult';
import LogContext from '../../contexts/LogContext';
import {searchContext} from '../../contexts/SearchContext';
import FeedList from './feed/components/FeedList';

const SearchScreen = ({navigation}) => {
  const {keyword} = useContext(searchContext);
  const {logs} = useContext(LogContext);

  //text는 [log.title, log.body]의 log.title 과 log.body 되고 거기서 키워드가 포함된것을 찾아
  // 필터로 반환하는로직
  const filtered =
    keyword === ''
      ? []
      : logs.filter(log =>
          [log.title, log.body].some(text => text.includes(keyword)),
        );
  console.log(logs);
  if (keyword === '') {
    return <EmptySearchScreen type={'EMPTY_KEYWORD'} />;
  } else if (filtered.length === 0) {
    return <EmptySearchScreen type={'NOT_FOUND'} />;
  }
  return (
    <View style={styles.block}>
      <FeedList logs={filtered} />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});
