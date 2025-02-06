import { useContext } from "react";
import { stateContext } from "../store/notesReducer";
import Title from "../components/Title";

import NoteText from "../components/NoteText";
import EmptyMsg from "../components/EmptyMsg";

const Main = () => {
  const { state, dispatch } = useContext(stateContext);

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
                  payload: {
                    id: state.selectedNoteId,
                    title: e.target.value,
                  },
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
            />
          )
      )}

      {state.selectedNoteId === null && <EmptyMsg />}

      {console.log(state.notes)}
    </div>
  );
};

export default Main;

// I need to show the title that has the same id as the selectedNoteId
// get the value from the editor and show each editor that has the same id as the selectednoteId
