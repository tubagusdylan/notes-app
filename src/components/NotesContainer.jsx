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
          {this.props.notes.length > 0 ? (
            this.props.notes.map((note, index) => {
              return (
                <NotesCard
                  key={index}
                  id={note.id}
                  title={note.title}
                  body={note.body}
                  createdAt={note.createdAt}
                  archived={note.archived}
                  propsArchived={this.props.archived}
                  onDeleteNotes={this.props.onDeleteNotes}
                  onArchivedNotes={this.props.onArchivedNotes}
                  onActivedNotes={this.props.onActivedNotes}
                />
              );
            })
          ) : (
            <p>TIdak ada catatan</p>
          )}
        </div>
      </div>
    );
  }
}

export default NotesContainer;
