import moment from "moment/moment";
import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext";

const Noteitem = (props) => {
  const { updateNote, note } = props;
  const { title, description, date, _id } = note;
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  return (
    <div className="card col-md-3 p-0">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <h5 className="card-title">{title}</h5>
          <i
            className="fa-solid fa-trash-can mx-2"
            onClick={() => {
              deleteNote(_id);
            }}
          ></i>
          <i
            className="fa-regular fa-pen-to-square mx-2"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
        </div>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer text-muted">{moment(date).fromNow()}</div>
    </div>
  );
};

export default Noteitem;
