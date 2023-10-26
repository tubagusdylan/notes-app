import React from "react";
import Header from "./components/Header";
import SearchNotes from "./components/SearchNotes";
import AddNotes from "./components/AddNotes";

class NotesApp extends React.Component {
  render() {
    return (
      <div className="background">
        <Header />
        <SearchNotes />
        <AddNotes />
      </div>
    );
  }
}

export default NotesApp;
