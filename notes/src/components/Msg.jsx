import { useContext } from "react";
import { stateContext } from "../store/notesReducer";
import EmptyMsg from "../components/EmptyMsg";

const Msg = () => {
  const { state } = useContext(stateContext);
  return <>{state.selectedNoteId === null && <EmptyMsg />}</>;
};

export default Msg;
