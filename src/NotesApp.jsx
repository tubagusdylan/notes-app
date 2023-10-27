import React from "react";
import Header from "./components/Header";
import SearchNotes from "./components/SearchNotes";
import AddNotes from "./components/AddNotes";
import NotesContainer from "./components/NotesContainer";

class NotesApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
      archiveCount: 0,
      activeCount: 0,
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteNotesHandler = this.onDeleteNotesHandler.bind(this);
    this.onArchivedNotesHandler = this.onArchivedNotesHandler.bind(this);
    this.onActivedNotesHandler = this.onActivedNotesHandler.bind(this);
  }

  onAddNotesHandler({ title, description }) {
    const newNotes = {
      id: Date.now(),
      title: title,
      body: description,
      archived: false,
      createdAt: new Date().toLocaleDateString("id"),
    };

    this.setState((prev) => {
      return {
        notes: [...prev.notes, newNotes],
        activeCount: prev.activeCount + 1,
      };
    });
  }

  onDeleteNotesHandler(id) {
    const index = this.state.notes.findIndex((note) => {
      return note.id === id;
    });

    const status = this.state.notes[index].archived;
    this.state.notes.splice(index, 1);

    this.setState((prev) => {
      if (status) {
        return {
          notes: prev.notes,
          archiveCount: prev.archiveCount - 1,
        };
      } else {
        return {
          notes: prev.notes,
          activeCount: prev.activeCount - 1,
        };
      }
    });
  }

  onArchivedNotesHandler(id) {
    const index = this.state.notes.findIndex((note) => {
      return note.id === id;
    });

    this.setState((prev) => {
      const newNotes = {
        ...prev.notes[index],
        archived: true,
      };

      this.state.notes.splice(index, 1, newNotes);

      return {
        notes: prev.notes,
        archiveCount: prev.archiveCount + 1,
        activeCount: prev.activeCount - 1,
      };
    });
  }

  onActivedNotesHandler(id) {
    const index = this.state.notes.findIndex((note) => {
      return note.id === id;
    });

    this.setState((prev) => {
      const newNotes = {
        ...prev.notes[index],
        archived: false,
      };

      this.state.notes.splice(index, 1, newNotes);

      return {
        notes: prev.notes,
        archiveCount: prev.archiveCount - 1,
        activeCount: prev.activeCount + 1,
      };
    });
  }

  render() {
    return (
      <div className="background">
        <Header />
        <SearchNotes />
        <AddNotes onAddNotes={this.onAddNotesHandler} />
        <NotesContainer title={"Catatan Aktif"} notes={this.state.notes} archived={false} onDeleteNotes={this.onDeleteNotesHandler} onArchivedNotes={this.onArchivedNotesHandler} statusCount={this.state.activeCount} />
        <NotesContainer title={"Arsip"} notes={this.state.notes} archived={true} onDeleteNotes={this.onDeleteNotesHandler} onActivedNotes={this.onActivedNotesHandler} statusCount={this.state.archiveCount} />
      </div>
    );
  }
}

export default NotesApp;
