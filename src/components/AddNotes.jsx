import React from "react";
import "../styles/addNotes.css";

class AddNotes extends React.Component {
  render() {
    return (
      <div className="add-notes-container">
        <h2>Buat Catatan</h2>
        <span>Sisa Karakter:</span>
        <form>
          <input type="text" placeholder="Judul Catatan" className="title-input" />
          <textarea className="description-input" placeholder="Isi Catatan"></textarea>
          <button className="btn-add">Tambah Catatan</button>
        </form>
      </div>
    );
  }
}

export default AddNotes;
