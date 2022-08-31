import React, {useContext, useEffect, useRef, useState} from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import LogContext from '../../contexts/LogContext';

const CalendarScreen = ({navigation}) => {
  const {text} = useContext(LogContext);
  const animation = useRef(new Animated.Value(0)).current;
  const translateXY = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: enabled ? 1 : 0,
      useNativeDriver: true,
      duration: 1000,
    }).start();
  }, [enabled, animation]);

  const buttonTest = () => {
    return (
      <>
        <Button
          title="Test"
          onPress={() => {
            setEnabled(!enabled);
          }}
        />
      </>
    );
  };
  return (
    <View style={styles.block}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            backgroundColor: 'red',
          },
          {
            opacity: animation.interpolate({
              inputRange: [0, 0.5, 1],
              outputRange: [1, 0, 1],
            }),
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 200],
                }),
              },
            ],
          },
        ]}
      />

      {buttonTest()}
    </View>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  block: {flex: 1},
  ractangle: {
    width: 100,
    height: 100,
    // backgroundColor: 'red',
  },
  test2: {
    width: 100,
    height: 100,
    backgroundColor: 'yellow',
  },
});
