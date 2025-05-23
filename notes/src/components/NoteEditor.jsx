import { useContext , useCallback , useMemo } from "react";
import { stateContext } from "../store/notesReducer";
import Title from "../components/Title";
import { saveNotesToFirebase } from "../Operations/firebaseOp";
import NoteText from "../components/NoteText";
import { debounce } from "lodash";
import SideBarBtn from "../components/SideBarBtn";




const NoteEditor = () => {

    const { state, dispatch } = useContext(stateContext);
    const context = useContext(stateContext);
  
    const debouncedSaveNote = useMemo(() => 
      debounce((id, context) => {
        saveNotesToFirebase(id, context);
      }, 500)
    ,[]); // If a user types continuously the function won't trigger until they stop typing for 500ms because of debounce
  
  
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

     const handleClick = () => {
    dispatch({ type: "TOOGLE_SIDEBAR" });
    console.log(state.isSideBarOpen)
    }
 
  return (
    <>
      {state.notes.map(
        (note) =>
          note.id === state.selectedNoteId && (
            <div key={note.id} className="flex md:gap-4 max-md:gap-4 items-center w-full ">
              <div className="md:block lg:hidden">
                <SideBarBtn openSidebar={handleClick}/>
              </div>
              <Title
                onchange={(e) => handleTitleChange(e, note.id)}
                value={note.title}
              />
            </div>
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
    </>
  );
};

export default NoteEditor;
