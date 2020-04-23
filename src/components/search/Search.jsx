import React, { Component } from "react";
import "./_Search.scss";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      query: e.target.value
    });
  }

  render() {
    return (
      <div className="search">
        <div className="search__container">
          <input
            className="search__input"
            type="text"
            placeholder="Search here..."
            value={this.state.query}
            onChange={this.handleChange}
          />
          <span className="search__icon">
            <i class="fas fa-search search__image"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default Search;
