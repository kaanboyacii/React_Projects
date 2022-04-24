import React from "react";
import {Link} from 'react-router-dom';

class SearchBar extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <Link to="/" class="btn btn-outline-danger" type="button">MovieApp</Link>
          <form class="d-flex">
            <input
              onChange={this.props.searchMovieProp}
              type="text"
              className="form-control me-4"
              placeholder="Search a movie"
            />
            <Link to="/add" class="btn btn-danger" type="button">
              AddMovie
            </Link>
          </form>
        </div>
      </nav>
    );
  }
}
export default SearchBar;
