import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "632d9474d142fb4d8ef023f9d",
      user: "63d908629cbac18cd864f2bd",
      title: "broke",
      description: "I broke a glass today",
      tag: "Bummer",
      date: "2023-01-31T16:52:29.822Z",
      __v: 0,
    },
    {
      user: "63d908629cbac18cd864f2bd",
      title: "Islamiat",
      description:
        "We had Islamiat exam today and guess wet it went way better than i thought it would cuz i had literlly only taken 7 lectures out of all the lectures that we had from the start of the college, and yet i was amazed by how easy the paper was. It's all thanks to Allah Almighty cuz i know that literaly studied the day before the paper.",
      tag: "Exam",
      _id: "63dbe24a4d959df6e20a1033",
      date: "2023-02-02T16:18:18.017Z",
      __v: 0,
    },
    {
      _id: "63dbba9e73e0d3bbb5da455d5",
      user: "63d908629cbac18cd864f2bd",
      title: "Lively",
      description: "The weather is so lively today",
      tag: "weather",
      date: "2023-02-02T13:29:02.512Z",
      __v: 0,
    },
    {
      _id: "63d94714d142fb4d8ef023f9d",
      user: "63d908629cbac18cd864f2bd",
      title: "broke",
      description: "I broke a glass today",
      tag: "Bummer",
      date: "2023-01-31T16:52:29.822Z",
      __v: 0,
    },
    {
      _id: "63dbba9e7e04d3bbb5da455d5",
      user: "63d908629cbac18cd864f2bd",
      title: "Lively",
      description: "The weather is so lively today",
      tag: "weather",
      date: "2023-02-02T13:29:02.512Z",
      __v: 0,
    },
    {
      _id: "63d9474d1452fb4d8ef023f9d",
      user: "63d908629cbac18cd864f2bd",
      title: "broke",
      description: "I broke a glass today",
      tag: "Bummer",
      date: "2023-01-31T16:52:29.822Z",
      __v: 0,
    },
    {
      _id: "63dbba9e7e02d3bbb5da455d5",
      user: "63d908629cbac18cd864f2bd",
      title: "Lively",
      description: "The weather is so lively today",
      tag: "weather",
      date: "2023-02-02T13:29:02.512Z",
      __v: 0,
    },
    {
      _id: "63d9474d1428fb4d8ef023f9d",
      user: "63d908629cbac18cd864f2bd",
      title: "broke",
      description: "I broke a glass today",
      tag: "Bummer",
      date: "2023-01-31T16:52:29.822Z",
      __v: 0,
    },
    {
      _id: "63dbba9e7e0d31bbb5da455d5",
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
