import { createContext } from "react";

export const INITIAL_STATE = {
  notes: [],
  selectedNoteId: null,
};

export const stateContext = createContext();

export const notesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTE": {
      const newNote = { id: Date.now(), title: "", content: "" };
      return {
        ...state,
        notes: [...state.notes, newNote],
        selectedNoteId: newNote.id,
      };
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
