import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const obj = {
    name: "Abdullah",
    class: "ICS(1st year)",
  };
  const [state, setState] = useState(obj);

  const update = () => {
    setTimeout(() => {
      setState({
        name: "Shehraz",
        class: "ICS(1st year)",
      });
    }, 2000);
  };
  return (
    <NoteContext.Provider value={{ state, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
