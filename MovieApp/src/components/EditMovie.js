import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class EditMovie extends React.Component {
  state = {
    name: "",
    rating: "",
    overview: "",
    imageUrl: "",
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    //console.log(id)

    const response = await axios.get(`http://localhost:3002/movies/${id}`);
    //console.log(response.data);

    const movie = response.data;

    this.setState({
      name: movie.name,
      rating: movie.rating,
      overview: movie.overview,
      imageUrl: movie.imageUrl,
    });
  }

  onInputChange = (e) => {
    //    console.log(e.target.name);
    //    console.log(e.target.value);

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
/* 
    const name = this.state.name;
    const rating = this.state.rating;
    const overview = this.state.overview;
    const imageUrl = this.state.imageUrl; */

    const { name, rating, overview, imageUrl } = this.state;

    const id = this.props.match.params.id;

    const updatedMovie = {
        name,
        rating,
        overview,
        imageUrl
    }

    this.props.onEditMovie(id, updatedMovie);
    this.props.history.push('/');

}
  render() {
    return (
      <div className="container">
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <Link to="/" class="btn btn-outline-danger" type="button">
              MovieApp
            </Link>
          </div>
        </nav>
        <form className="mt-5" onSubmit={this.handleFormSubmit}>
          <input
            className="form-control"
            id="disabledInput"
            type="text"
            placeholder="Fill The Form To Edit A Movie.."
            disabled
          />
          <div className="form-row">
            <div className="form-group col-md-10">
              <label htmlFor="inputName">Name</label>
              <input
                value={this.state.name}
                type="text"
                className="form-control"
                name="name"
              />
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputRating">Rating</label>
              <input
                type="text"
                className="form-control"
                name="rating"
                value={this.state.rating}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputImage">Image URL</label>
              <input
                type="text"
                className="form-control"
                name="imageUrl"
                value={this.state.imageUrl}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="overviewTextarea">Overview</label>
              <textarea
                className="form-control"
                name="overview"
                rows="5"
                value={this.state.overview}
              ></textarea>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-danger btn-block"
            value="Edit Movie"
          />
        </form>
      </div>
    );
  }
}
export default EditMovie;
