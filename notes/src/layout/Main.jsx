import { useContext , useCallback , useMemo } from "react";
import { stateContext } from "../store/notesReducer";
import Title from "../components/Title";
import { saveNotesToFirebase } from "../Operations/firebaseOp";
import NoteText from "../components/NoteText";
import EmptyMsg from "../components/EmptyMsg";
import { debounce } from "lodash";


const Main = () => {
  const { state, dispatch } = useContext(stateContext);
  const context = useContext(stateContext);

  const debouncedSaveNote = useMemo(() => 
    debounce((id, context) => {
      saveNotesToFirebase(id, context);
    }, 500)
  ,[]) ; // If a user types continuously the function won't trigger until they stop typing for 500ms because of debounce


  const handleTitleChange = useCallback( (e, id) => {
    dispatch({
      type: "UPDATE_NOTE_TITLE",
      payload: { id, title: e.target.value },
    });

    debouncedSaveNote(id, context); // Save to Firebase after 500ms
  },[dispatch , debouncedSaveNote , context]);


  const handleContentChange = useCallback((e, id) => {
    dispatch({
      type: "UPDATE_NOTE_TEXT",
      payload: { id, content: e.target.value },
    });

    debouncedSaveNote(id, context);
  },[dispatch , debouncedSaveNote , context])

  return (
    <div className="w-[70%] bg-[#111] px-[150px] py-10 lg:w-[80%] h-screen flex flex-col gap-[60px] p-4">
      {state.notes.map(
        (note) =>
          note.id === state.selectedNoteId && (
            <Title
              key={note.id}
              onchange={(e) => handleTitleChange(e, note.id)}
              value={note.title}
            />
          )
      )}

      {state.notes.map(
        (note) =>
          note.id === state.selectedNoteId && (
            <NoteText
              key={note.id}
              onchange={(e) => handleContentChange(e, note.id)}
              value={note.content}
            />
          )
      )}

      {state.selectedNoteId === null && <EmptyMsg />}
    </div>
  );
};

export default Main;
