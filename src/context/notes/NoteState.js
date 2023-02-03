import React, { useState } from "react";
import { toast } from "react-toastify";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkOTA4NjI5Y2JhYzE4Y2Q4NjRmMmJkIn0sImlhdCI6MTY3NTE3MTkyOX0.V8XaJDb9zMzD-0-rQj0OXk72QVYrSEcMr5NOVxIvR5I",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add a Note
  const addNote = async (incomingNote) => {
    const { title, description, tag } = incomingNote;
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkOTA4NjI5Y2JhYzE4Y2Q4NjRmMmJkIn0sImlhdCI6MTY3NTE3MTkyOX0.V8XaJDb9zMzD-0-rQj0OXk72QVYrSEcMr5NOVxIvR5I",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    setNotes(notes.concat(note));
  };
  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkOTA4NjI5Y2JhYzE4Y2Q4NjRmMmJkIn0sImlhdCI6MTY3NTE3MTkyOX0.V8XaJDb9zMzD-0-rQj0OXk72QVYrSEcMr5NOVxIvR5I",
      },
    }).then(() => {
      toast("🦄 Wow so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    });

    // Logic to delete in Client
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };
  // Edit a Note
  const editNote = async (incomingNote) => {
    const {
      id,
      etitle: title,
      edescription: description,
      etag: tag,
    } = incomingNote;
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkOTA4NjI5Y2JhYzE4Y2Q4NjRmMmJkIn0sImlhdCI6MTY3NTE3MTkyOX0.V8XaJDb9zMzD-0-rQj0OXk72QVYrSEcMr5NOVxIvR5I",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    // const json = response.json();
    // Logic to edit in Client
    const tempNotes = JSON.parse(JSON.stringify(notes));
    for (let i = 0; i < notes.length; i++) {
      if (tempNotes[i]._id === id) {
        tempNotes[i].title = title;
        tempNotes[i].description = description;
        tempNotes[i].tag = tag;
      }
    }
    setNotes(tempNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
