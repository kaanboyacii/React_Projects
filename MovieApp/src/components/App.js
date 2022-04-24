import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import EditMovie from "./EditMovie";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";

class App extends React.Component {
  state = {
    movies: [],
    searchQuery: "",
  };

  async componentDidMount() {
    const response = await axios.get("http://localhost:3003/movies");
    // console.log(response);
    this.setState({ movies: response.data });
  }
  //DELETE movie
  deleteMovie = async (movie) => {
    axios.delete(`http://localhost:3003/movies/${movie.id}`);
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    this.setState((state) => ({
      movies: newMovieList,
    }));
  };
  //SEARCH movie
  searchMovie = (event) => {
    // console.log(event.target.value)
    this.setState({ searchQuery: event.target.value });
  };
  //ADD movie
  addMovie = async (movie) => {
    await axios.post("http://localhost:3003/movies/", movie);
    this.setState((state) => ({
      movies: state.movies.concat([movie]),
    }));
  };
  // EDIT MOVIE
  editMovie = async (id, updatedMovie) => {
    await axios.put(`http://localhost:3003/movies/${id}`, updatedMovie);
    this.getMovies();
  };
  render() {
    let filteredMovies = this.state.movies
      .filter((movie) => {
        return (
          movie.name
            .toLowerCase()
            .indexOf(this.state.searchQuery.toLowerCase()) !== -1
        );
      })
      .sort((a, b) => {
        //for id sort
        return a.id < b.id ? 1 : a.id > b.id ? -1 : 0;
      });

    return (
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <React.Fragment>
                  <div className="row">
                    <div className="col-lg-12">
                      <SearchBar searchMovieProp={this.searchMovie} />
                    </div>
                  </div>
                  <MovieList
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie}
                  />
                </React.Fragment>
              }
            ></Route>
            <Route
              path="/add"
              element={
                <React.Fragment>
                  <AddMovie
                    onAddMovie={(movie) => {
                      this.addMovie(movie);
                    }}
                  />
                </React.Fragment>
              }
            />
            <Route
              path="edit/:id"
              element={
                <React.Fragment>
                  <EditMovie
                    onEditMovie={(id, movie) => {
                      this.editMovie(id, movie);
                    }}
                  />
                </React.Fragment>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
