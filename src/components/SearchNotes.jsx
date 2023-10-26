import React from "react";
import "../styles/search.css";

class SearchNotes extends React.Component {
  render() {
    return (
      <div className="container">
        <form className="search-container">
          <div className="search-input-container">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input type="text" className="search-input" placeholder="Cari Catatan" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchNotes;
