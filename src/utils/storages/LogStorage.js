import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';

const key = 'logs';

const LogStorage = {
  get: async () => {
    try {
      const raw = await AsyncStorage.getItem(key);
      const parsed = JSON.parse(raw);
      return parsed;
    } catch (error) {
      throw new Error('Failed to load logs');
    }
  },

  set: async data => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      throw new Error('Failed to save logs');
    }
  },
};

export default LogStorage;
