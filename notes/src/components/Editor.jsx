import {
    useEditor,
    EditorContent
  } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import MenuBar from '../components/Menubar'
import { useContext } from "react";
import { stateContext } from "../store/notesReducer"



const Editor = ({onchange}) => {
  
  const {state,dispatch} = useContext(stateContext)
  const selectedNote = state.notes.find((note) => note.id === state.selectedNoteId);


    const editor = useEditor({
      extensions: [StarterKit, Placeholder.configure({ placeholder: "Start typing..." })],
      content: note.text || "",
      onUpdate: ({ editor }) => {
        dispatch({
          type: "UPDATE_NOTE_TEXT",
          payload: {
            id: note.id,
            content: editor.getHTML(),
          },
        });
      },
    })

    if (!selectedNote) return <p className="text-white">No note selected</p>;


  return (
    <div className="">
      {state.notes.map(
        (note) =>
          note.id === state.selectedNoteId && (
            <div key={note.id}>
              <EditorContent
                editor={editor}
                className="h-[400px] outline-none focus:outline-none"
              />
              <MenuBar />
            </div>
          )
      )}
    </div>
    );
  };
  
  export default Editor;
  