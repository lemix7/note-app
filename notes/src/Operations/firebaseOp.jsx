import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";


export const saveNotesToFirebase = async (noteID, context) => {
  const { state } = context;
  
  try {
    const notesCollection = collection(db, "notes");
    const promises = state.notes.map(async (note) => {
      if (note.id === noteID) {
        await addDoc(notesCollection, note);
        return "Note saved successfully!";
      }
    });

    const results = await Promise.all(promises);
    return results.filter(result => result); // Filter out undefined results

  } 
  catch (error) {
    console.error("Error saving note to Firebase:", error);
    throw new Error("Failed to save note."); // Rethrow with a custom message
  }
};
