import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";
import Noteitem from "./Noteitem";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="row gap-5 mb-5">
      <h2>Your Notes</h2>
      {notes.map((note) => {
        return <Noteitem key={note._id} note={note} />;
      })}
    </div>
  );
};

export default Notes;
