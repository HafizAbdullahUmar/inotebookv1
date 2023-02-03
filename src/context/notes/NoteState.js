import React, { useState } from "react";
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
    console.log(json);
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
    const json = response.json();
    //
    const note = {
      _id: "632d9474d142fb4d8ef023f9d",
      user: "63d908629cbac18cd864f2bd",
      title: title,
      description: description,
      tag: tag,
      date: "2023-01-31T16:52:29.822Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkOTA4NjI5Y2JhYzE4Y2Q4NjRmMmJkIn0sImlhdCI6MTY3NTE3MTkyOX0.V8XaJDb9zMzD-0-rQj0OXk72QVYrSEcMr5NOVxIvR5I",
      },
    });

    // Logic to delete in Client
    console.log("delteting the note with id", id);
    const newNotes = notes.filter((note) => note._id !== id);
    setNotes(newNotes);
  };
  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(
      `${host}/api/notes/updatenote/63d94771142fb4d8ef023fa0`,
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNkOTA4NjI5Y2JhYzE4Y2Q4NjRmMmJkIn0sImlhdCI6MTY3NTE3MTkyOX0.V8XaJDb9zMzD-0-rQj0OXk72QVYrSEcMr5NOVxIvR5I",
        },
        body: JSON.stringify({ title, description, tag }),
      }
    );
    const json = response.json();
    // Logic to edit in Client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
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
