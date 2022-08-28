import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogContextProvider} from './src/contexts/LogContext';
import RootStack from './src/screens/main/RootStack';

const App = () => {
  return (
    <NavigationContainer>
      <LogContextProvider>
        <RootStack />
      </LogContextProvider>
    </NavigationContainer>
  );
};

export default App;
