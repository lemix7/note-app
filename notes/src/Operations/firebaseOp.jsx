import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db, auth } from "../config/firebase";

export const saveNotesToFirebase = async (noteID, context) => {
  const { state } = context;
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User must be logged in to save notes");
  }

  try {
    const promises = state.notes.map(async (note) => {
      if (note.id === noteID) {
        const noteRef = doc(db, "notes", noteID);
        await setDoc(noteRef, { ...note, userId: user.uid }, { merge: true });
        return "Note saved successfully!";
      }
    });

    const results = await Promise.all(promises);
    return results.filter((result) => result);
  } catch (error) {
    console.error("Error saving note to Firebase:", error);
    throw new Error("Failed to save note.");
  }
};

export const createNoteInFirebase = async (note) => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User must be logged in to create notes");
  }

  try {
    const noteRef = doc(collection(db, "notes"));
    await setDoc(noteRef, {
      ...note,
      id: noteRef.id,
      userId: user.uid,
      createdAt: new Date().toISOString(),
    });
    return noteRef.id;
  } catch (error) {
    console.error("Error creating note:", error);
    throw new Error("Failed to create note.");
  }
};

export const deleteNoteFromFirebase = async (noteID) => {
  const user = auth.currentUser;

  if (!user) {
    throw new Error("User must be logged in to delete notes");
  }

  try {
    const noteRef = doc(db, "notes", noteID);
    await deleteDoc(noteRef);
    return "Note deleted successfully!";
  } catch (error) {
    console.error("Error deleting note from firebase", error);
    throw new Error("failed to delete note.");
  }
};

export const fetchNotesFromFirebase = async () => {
  const user = auth.currentUser;

  if (!user) {
    return [];
  }

  try {
    const notesRef = collection(db, "notes");
    const q = query(notesRef, where("userId", "==", user.uid));
    const querySnapshot = await getDocs(q);

    const notes = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return notes;
  } catch (error) {
    console.error("Failed to fetch the notes", error);
    return [];
  }
};
