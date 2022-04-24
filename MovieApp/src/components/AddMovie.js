import React from "react";
import serialize from "form-serialize";
import {Link} from 'react-router-dom';

class AddMovie extends React.Component {
  handleFormSubmit = (event) => {
    event.preventDefault();
    const newMovie = serialize(event.target, {hash:true});
    console.log(newMovie);
    this.props.onAddMovie(newMovie);
  };
  handleChange(event) {
    alert('A name was submitted: ');
    event.preventDefault();
  }
  render() {
    return (
      <div className="container">
          <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
            <Link to="/" class="btn btn-outline-danger" type="button">MovieApp</Link>
          </div>
         </nav>
        <form className="mt-5" onSubmit={this.handleFormSubmit}>
          <input
            className="form-control"
            id="disabledInput"
            type="text"
            placeholder="Fill The Form To Add A Movie.."
            disabled
          />
          <div className="form-row">
            <div className="form-group col-md-10">
              <label htmlFor="inputName">Name</label>
              <input type="text" className="form-control" name="name" />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputRating">Rating</label>
              <input type="text" className="form-control" name="rating" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputImage">Image URL</label>
              <input type="text" className="form-control" name="imageUrl" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="overviewTextarea">Overview</label>
              <textarea
                className="form-control"
                name="overview"
                rows="5"
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-danger btn-block"
            value="Add Movie"
          />
        </form>
      </div>
    );
  }
}
export default AddMovie;
