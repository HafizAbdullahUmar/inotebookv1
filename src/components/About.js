import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const About = () => {
  const a = useContext(NoteContext);
  a.update();
  return (
    <div>
      This is About {a.state.name} who is in class {a.state.class}
    </div>
  );
};

export default About;
