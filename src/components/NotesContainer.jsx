/* eslint-disable react/prop-types */
import React from "react";
import NotesCard from "./NotesCard";
import "../styles/notesContainer.css";

class NotesContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <h2>{this.props.title}</h2>
        <div className="notes-wrap">
          <NotesCard />
        </div>
      </div>
    );
  }
}

export default NotesContainer;
