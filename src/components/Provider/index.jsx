import { useState, createContext } from "react";

export default ({ children }) => {
  const INITIAL_STATE = {
    name: "",
    age: "",
    weight: "",
  };
  const [state, setState] = useState(INITIAL_STATE);
  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export const AppContext = createContext();
