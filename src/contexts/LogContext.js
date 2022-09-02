import React, {createContext, useEffect, useRef, useState} from 'react';
import {v4 as uuid} from 'uuid';
import LogStorage from '../utils/storages/LogStorage';

const LogContext = createContext();

export const LogContextProvider = ({children}) => {
  const initalLogRef = useRef(null);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    //useEffect 내에서 async 함수를 만들고 바로 호출
    //IIFE 패턴
    (async () => {
      const savedLogs = await LogStorage.get();
      if (savedLogs) {
        initalLogRef.current = savedLogs;
        setLogs(savedLogs);
      }
    })();
  }, []);

  useEffect(() => {
    if (logs === initalLogRef.current) {
      return;
    }
    LogStorage.set(logs);
  }, [logs]);

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

  const onModify = modified => {
    //log배열을 순회해 id가 일치하면 log를 교체하고 그렇지 않으면 유지
    const nextlogs = logs.map(log => {
      return log.id === modified.id ? modified : log;
    });
    setLogs(nextlogs);
  };
  const onRemove = removed => {
    //log배열을 순회해 id가 일치하면 log를 교체하고 그렇지 않으면 유지
    const nextlogs = logs.filter(log => {
      return log.id !== removed.id;
    });
    setLogs(nextlogs);
  };

  return (
    <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
      {children}
    </LogContext.Provider>
  );
};

export default LogContext;
