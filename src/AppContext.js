import { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [globalVariable, setGlobalVariable] = useState({name : "" , album : {}, artists : [] });

  const updateGlobalVariable = (newValue) => {
    setGlobalVariable(newValue);
  };

  return (
    <AppContext.Provider value={{ globalVariable, updateGlobalVariable }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };