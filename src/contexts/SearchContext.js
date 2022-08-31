import React, {createContext, useContext, useState} from 'react';

export const searchContext = createContext();

const SearchContextProvider = ({children}) => {
  const [keyword, onChangeText] = useState('');
  return (
    <searchContext.Provider value={{keyword, onChangeText}}>
      {children}
    </searchContext.Provider>
  );
};

export default SearchContextProvider;
