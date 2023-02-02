import moment from "moment/moment";
import React from "react";

const Noteitem = (props) => {
  const { title, description, date } = props.note;
  console.log(moment(date).fromNow(), moment(date).valueOf());
  return (
    <div className="card col-md-3 p-0">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <h5 className="card-title">{title}</h5>
          <i className="fa-solid fa-trash-can mx-2"></i>
          <i className="fa-regular fa-pen-to-square mx-2"></i>
        </div>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer text-muted">{moment(date).fromNow()}</div>
    </div>
  );
};

export default Noteitem;
