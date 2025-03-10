import { createContext } from "react";

export const INITIAL_STATE = {
  notes: [],
  selectedNoteId: null,
};

export const stateContext = createContext(); // this will contain the state and dispatch
export const dispatchContext =  createContext(); // this will contain the dispatch only 

export const notesReducer = (state, action) => {
  switch (action.type) {

    case "ADD_NOTE": {

      return {
        ...state,
        notes: [...state.notes, action.payload],
        selectedNoteId: 2

      };
    }

    case "SET_NOTES": {
      return {
        ...state , 
        notes: action.payload
      }
    }

    case 'UPDATE_NOT_ID':{
      const {oldId , newId} = action.payload
      return {
        ...state,
        notes: state.notes.map((note) => 
        note.id === oldId ? {...note , id: newId} : note
        ),
        selectedNoteId: newId

      }
    }

    case "SELECT_NOTE":
      return {
        ...state,
        selectedNoteId: action.payload,
      };

    case "UPDATE_NOTE_TITLE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id
            ? { ...note, title: action.payload.title }
            : note
      )
      };

      case "UPDATE_NOTE_ID":
  return {
    ...state,
    notes: state.notes.map(note =>
      note.id === action.payload.oldID
        ? { ...note, id: action.payload.newID }
        : note
    ),
  };

      case "FINALIZE_NOTE_TITLE_UPDATE":
  return {
    ...state,
    notes: state.notes.map((note) =>
      note.id === action.payload.id
        ? { ...note, title: action.payload.title }
        : note
    ),
  };
  
    case "UPDATE_NOTE_TEXT":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id
            ? { ...note, content: action.payload.content }
            : note
        ),
      };

    case "DELETE_NOTE": {
      const updatedNotes = state.notes.filter(
        (note) => note.id !== action.payload
      );
      return {
        ...state,
        notes: updatedNotes,
        selectedNoteId: null,
      };
    }

    default:
      return state;
  }
};
