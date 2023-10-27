/* eslint-disable react/prop-types */
import React from "react";
import "../styles/addNotes.css";

class AddNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      maxTitleChar: 50,
    };

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeTitle(event) {
    this.setState((prev) => {
      if (prev.title.length < event.target.value.length) {
        if (this.state.maxTitleChar > 0) {
          return {
            title: event.target.value,
            maxTitleChar: prev.maxTitleChar - 1,
          };
        }
      } else {
        return {
          title: event.target.value,
          maxTitleChar: prev.maxTitleChar + 1,
        };
      }
    });
  }

  onChangeDescription(event) {
    this.setState(() => {
      return {
        description: event.target.value,
      };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.onAddNotes(this.state);
    this.setState(() => {
      return {
        title: "",
        description: "",
        maxTitleChar: 50,
      };
    });
  }

  render() {
    return (
      <div className="add-notes-container">
        <h2>Buat Catatan</h2>
        <span>Sisa Karakter: {this.state.maxTitleChar}</span>
        <form onSubmit={this.onSubmitHandler}>
          <input type="text" placeholder="Judul Catatan" className="title-input" value={this.state.title} onChange={this.onChangeTitle} />
          <textarea className="description-input" placeholder="Isi Catatan" value={this.state.description} onChange={this.onChangeDescription}></textarea>
          <button className="btn-add">Tambah Catatan</button>
        </form>
      </div>
    );
  }
}

export default AddNotes;
