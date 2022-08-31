import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {View, Pressable, StyleSheet, Platform, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FloatingWriteButton = ({hidden}) => {
  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    // Animated.timing(animation, {
    //   toValue: hidden ? 1 : 0,
    //   duration: 300,
    //   useNativeDriver: true,
    // }).start();
    Animated.spring(animation, {
      toValue: hidden ? 1 : 0,
      friction: 5,
      tension: 45,
      useNativeDriver: true,
    }).start();
  }, [hidden, animation]);

  const navigation = useNavigation();
  return (
    <Animated.View
      style={[
        styles.wrapper,
        {
          opacity: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        },
        {
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 88],
              }),
            },
          ],
        },
      ]}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          Platform.OS === 'ios' && {
            opacity: pressed ? 0.6 : 1,
          },
        ]}
        android_ripple={{color: '#ededed'}}
        onPress={() => {
          navigation.navigate('WriteScreen');
        }}>
        <Icon name="add" size={24} style={styles.icon} />
      </Pressable>
    </Animated.View>
  );
};

export default FloatingWriteButton;

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    //ios전용 그림자 설정
    shadowColor: '#4d4d4d',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    //android 전용 그림자 설정
    elevation: 5,
    //안드로이드에서 물결 효과가 영역 밖으로 나가지 않도록 설정
    overflow: Platform.select({android: 'hidden'}),
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#009688',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
});
