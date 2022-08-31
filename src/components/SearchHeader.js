import React, {useContext} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {searchContext} from '../contexts/SearchContext';

const SearchHeader = () => {
  const {width} = useWindowDimensions();
  const {keyword, onChangeText} = useContext(searchContext);

  return (
    <View style={[styles.block, {width: width - 32}]}>
      <TextInput
        style={styles.input}
        placeholder={'검색어를 입력하세요'}
        autoFocus={true}
        value={keyword}
        onChangeText={text => onChangeText(text)}
      />
      <Pressable
        style={({pressed}) => [styles.button, pressed && {opacity: 0.5}]}
        onPress={() => {
          onChangeText('');
        }}>
        <Icon name="cancel" size={20} color={'#9e9e9e'} />
      </Pressable>
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  blockFont: {
    color: 'white',
  },
  input: {
    flex: 1,
  },
  button: {
    marginLeft: 8,
  },
});
