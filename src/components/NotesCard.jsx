/* eslint-disable react/prop-types */
import React from "react";
import "../styles/notesCard.css";
import { showFormattedDate } from "../utils/index.js";

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
      <div className="notes-card">
        <h3 className="notes-card-title">{this.props.title}</h3>
        <span className="notes-timestamp">{showFormattedDate(this.props.createdAt)}</span>
        <p className="notes-description">{this.props.body}</p>
        <div className="btn-wrap">
          <button className="btn-notes-card" onClick={!this.props.propsArchived ? this.onArchiveButtonClick : this.onActiveButtonClick}>
            {this.props.propsArchived ? <i className="fa-solid fa-rotate-left"></i> : <i className="fa-solid fa-bookmark"></i>}
          </button>
          <button className="btn-notes-card" onClick={this.onDeleteButtonClick}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default NotesCard;
