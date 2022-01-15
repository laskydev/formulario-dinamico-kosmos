import React, { createContext, useReducer, useMemo } from 'react';
import reducer from './Reducer';

export const AppContext = createContext({});

const initialState = [];

export default function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}
