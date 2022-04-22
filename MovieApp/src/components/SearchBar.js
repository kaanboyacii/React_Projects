import React from "react";

class SearchBar extends React.Component {

  handleFormSubmit = (event) => {
      event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-row">
          <div className="col-12">
            <input
              onChange={this.props.searchMovieProp}
              type="text"
              className="form-control"
              placeholder="Search a movie"
            />
          </div>
        </div>
      </form>
    );
  }
}
export default SearchBar;
