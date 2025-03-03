import { dispatchContext } from "../store/notesReducer";
import { useContext } from "react";
import { stateContext } from "../store/notesReducer";


// eslint-disable-next-line react/prop-types
const DispatchProvider = ({ children }) => {
  const { dispatch } = useContext(stateContext);

  return (
    <dispatchContext.Provider value={ dispatch }>
      {children}
    </dispatchContext.Provider>
  );
};

export default DispatchProvider;
