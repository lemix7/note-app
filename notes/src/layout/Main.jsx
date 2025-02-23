import { useContext } from "react";
import { stateContext } from "../store/notesReducer";
import Title from "../components/Title";
import { saveNotesToFirebase } from "../Operations/firebaseOp";
import NoteText from "../components/NoteText";
import EmptyMsg from "../components/EmptyMsg";

const Main = () => {
  const { state, dispatch } = useContext(stateContext);
  const context = useContext(stateContext);

  const saveNote = async (i) => {
    await saveNotesToFirebase(i, context);
  };

  return (
    <div className="w-[70%] bg-[#111] px-[150px] py-10 lg:w-[80%] h-screen flex flex-col gap-[60px] p-4">
      {state.notes.map(
        (note) =>
          note.id === state.selectedNoteId && (
            <Title
              key={note.id}
              onchange={(e) =>
                dispatch({
                  type: "UPDATE_NOTE_TITLE",
                  payload: { id: note.id, title: e.target.value },
                })
              }
              value={note.title}
            />
          )
      )}

      {state.notes.map(
        (note) =>
          note.id === state.selectedNoteId && (
            <NoteText
              key={note.id}
              onchange={(e) =>
                dispatch({
                  type: "UPDATE_NOTE_TEXT",
                  payload: {
                    id: state.selectedNoteId,
                    content: e.target.value,
                  },
                })
              }
              value={note.content}
              onclick={() => saveNote(note.id)}
            />
          )
      )}

      {state.selectedNoteId === null && <EmptyMsg />}
    </div>
  );
};

export default Main;
