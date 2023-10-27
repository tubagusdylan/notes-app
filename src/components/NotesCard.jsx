/* eslint-disable react/prop-types */
import React from "react";
import "../styles/notesCard.css";

class NotesCard extends React.Component {
  constructor(props) {
    super(props);

    this.onDeleteButtonClick = this.onDeleteButtonClick.bind(this);
    this.onArchiveButtonClick = this.onArchiveButtonClick.bind(this);
    this.onActiveButtonClick = this.onActiveButtonClick.bind(this);
  }

  onDeleteButtonClick() {
    this.props.onDeleteNotes(this.props.id);
  }

  onArchiveButtonClick() {
    this.props.onArchivedNotes(this.props.id);
  }

  onActiveButtonClick() {
    this.props.onActivedNotes(this.props.id);
  }

  render() {
    return (
      <div className="notes-card" hidden={this.props.propsArchived !== this.props.archived}>
        <h3 className="notes-card-title">{this.props.title}</h3>
        <span className="notes-timestamp">{this.props.createdAt}</span>
        <p className="notes-description">{this.props.body}</p>
        <button className="btn-notes-card" onClick={!this.props.propsArchived ? this.onArchiveButtonClick : this.onActiveButtonClick}>
          <i className="fa-solid fa-bookmark"></i>
        </button>
        <button className="btn-notes-card" onClick={this.onDeleteButtonClick}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    );
  }
}

export default NotesCard;
