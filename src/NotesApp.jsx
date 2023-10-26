import React from "react";
import Header from "./components/Header";
import SearchNotes from "./components/SearchNotes";
import AddNotes from "./components/AddNotes";
import NotesContainer from "./components/NotesContainer";

class NotesApp extends React.Component {
  render() {
    return (
      <div className="background">
        <Header />
        <SearchNotes />
        <AddNotes />
        <NotesContainer title={"Catatan Aktif"} />
        <NotesContainer title={"Arsip"} />
      </div>
    );
  }
}

export default NotesApp;
