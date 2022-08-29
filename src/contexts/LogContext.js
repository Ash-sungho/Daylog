import React, {createContext, useState} from 'react';
import {v4 as uuid} from 'uuid';

const LogContext = createContext();

export const LogContextProvider = ({children}) => {
  const [logs, setLogs] = useState([]);

  const onCreate = ({title, body, date}) => {
    const log = {
      id: uuid(),
      title: title,
      body: body,
      date: date,
    };
    console.log('일정추가 로그 : ', JSON.stringify(log, null, 2));
    setLogs([log, ...logs]);
  };

  return (
    <LogContext.Provider value={{logs, onCreate}}>
      {children}
    </LogContext.Provider>
  );
};

export default LogContext;
