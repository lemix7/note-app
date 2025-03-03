import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";


export const saveNotesToFirebase = async (noteID, context) => {
  const { state } = context;
  
  try {

    const promises = state.notes.map(async (note) => {

      if (note.id === noteID) {

        const noteRef = doc(db , "notes" , noteID);

        await setDoc(noteRef, note , {merge: true});

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


export const createNoteInFirebase = async (note) => { 

  try {

    const noteRef = doc(collection(db,"notes"))
    await setDoc(noteRef , {...note , id: noteRef.id});
    return noteRef.id // return the id assigned to the note in fire base db

  } catch (error) {
    console.error("Error creating note:" , error)
    throw new Error("Failed to reate note.");
  }
  
}