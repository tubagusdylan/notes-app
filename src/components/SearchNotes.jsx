/* eslint-disable react/prop-types */
import React from "react";
import "../styles/search.css";

class SearchNotes extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  onChangeSearch(event) {
    this.props.onSearchText(event.target.value);
  }

  render() {
    return (
      <div className="container">
        <form className="search-container">
          <div className="search-input-container">
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input type="text" className="search-input" placeholder="Cari Catatan" onChange={this.onChangeSearch} value={this.props.searchText} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchNotes;
