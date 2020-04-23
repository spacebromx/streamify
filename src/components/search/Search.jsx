import React, { Component } from "react";
import "./_Search.scss";
import searchIcon from "assets/search-solid.png";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: " ",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      query: e.target.value
    });
  }

  render() {
    return <div className="search">
             <div className="search__container">
               <input
                 className="search__input"
                 type="text"
                 placeholder="Search here..."
                 value={this.state.query}
                 onChange={this.handleChange}
               />
               <span className="search__icon">
                 <img className="search__image" src={searchIcon} alt="search icon" />
               </span>
             </div>
           </div>
  }
}

export default Search;
