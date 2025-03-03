import { useReducer } from "react";
import { notesReducer, INITIAL_STATE, stateContext } from "../store/notesReducer";

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, INITIAL_STATE);

  return (
    <stateContext.Provider value={{ state, dispatch }}>
      {children}
    </stateContext.Provider>
  );
};

export default StateProvider;
