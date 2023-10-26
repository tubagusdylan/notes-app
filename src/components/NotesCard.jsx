import React from "react";
import "../styles/notesCard.css";

class NotesCard extends React.Component {
  render() {
    return (
      <div className="notes-card">
        <h3 className="notes-card-title">Halo ini notes card</h3>
        <span className="notes-timestamp">15 Oktober 2023</span>
        <p className="notes-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium mollitia asperiores aspernatur perspiciatis nihil? Ex dolorem maxime perspiciatis eveniet quibusdam facere ea eos impedit provident eum! Deserunt nihil
          dignissimos neque!
        </p>
        <button className="btn-notes-card">
          <i className="fa-solid fa-bookmark"></i>
        </button>
        <button className="btn-notes-card">
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    );
  }
}

export default NotesCard;
