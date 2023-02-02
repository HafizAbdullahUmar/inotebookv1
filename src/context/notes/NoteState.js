import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "63d9474d142fb4d8ef023f9d",
      user: "63d908629cbac18cd864f2bd",
      title: "broke",
      description: "I broke a glass today",
      tag: "Bummer",
      date: "2023-01-31T16:52:29.822Z",
      __v: 0,
    },
    {
      _id: "63dbba9e7e0d3bbb5da455d5",
      user: "63d908629cbac18cd864f2bd",
      title: "Lively",
      description: "The weather is so lively today",
      tag: "weather",
      date: "2023-02-02T13:29:02.512Z",
      __v: 0,
    },
    {
      _id: "63d9474d142fb4d8ef023f9d",
      user: "63d908629cbac18cd864f2bd",
      title: "broke",
      description: "I broke a glass today",
      tag: "Bummer",
      date: "2023-01-31T16:52:29.822Z",
      __v: 0,
    },
    {
      _id: "63dbba9e7e0d3bbb5da455d5",
      user: "63d908629cbac18cd864f2bd",
      title: "Lively",
      description: "The weather is so lively today",
      tag: "weather",
      date: "2023-02-02T13:29:02.512Z",
      __v: 0,
    },
    {
      _id: "63d9474d142fb4d8ef023f9d",
      user: "63d908629cbac18cd864f2bd",
      title: "broke",
      description: "I broke a glass today",
      tag: "Bummer",
      date: "2023-01-31T16:52:29.822Z",
      __v: 0,
    },
    {
      _id: "63dbba9e7e0d3bbb5da455d5",
      user: "63d908629cbac18cd864f2bd",
      title: "Lively",
      description: "The weather is so lively today",
      tag: "weather",
      date: "2023-02-02T13:29:02.512Z",
      __v: 0,
    },
    {
      _id: "63d9474d142fb4d8ef023f9d",
      user: "63d908629cbac18cd864f2bd",
      title: "broke",
      description: "I broke a glass today",
      tag: "Bummer",
      date: "2023-01-31T16:52:29.822Z",
      __v: 0,
    },
    {
      _id: "63dbba9e7e0d3bbb5da455d5",
      user: "63d908629cbac18cd864f2bd",
      title: "Lively",
      description: "The weather is so lively today",
      tag: "weather",
      date: "2023-02-02T13:29:02.512Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
