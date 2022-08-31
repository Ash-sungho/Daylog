import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {LogContextProvider} from './src/contexts/LogContext';
import SearchContextProvider from './src/contexts/SearchContext';
import RootStack from './src/screens/main/RootStack';

const App = () => {
  return (
    <NavigationContainer>
      <SearchContextProvider>
        <LogContextProvider>
          <RootStack />
        </LogContextProvider>
      </SearchContextProvider>
    </NavigationContainer>
  );
};

export default App;
