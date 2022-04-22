import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

class App extends React.Component {
  state = {
    movies: [
      {
        id: 1,
        name: "Asfaltın Kralları",
        rating: 9.5,
        overview:
          "lorem ipsum bla blalorem ipsum bla blalorem ipsum bla blalorem ipsum bla blalorem ipsum bla blalorem ipsum bla bla",
        imageUrl:
          "https://tr.web.img3.acsta.net/pictures/19/10/16/16/28/5029277.jpg",
      },
      {
        id: 2,
        name: "Yenilmezler: End Game",
        rating: 8.7,
        overview:
          "lorem ipsum bla blalorem ipsum bla blalorem ipsum bla blalorem ipsum bla blalorem ipsum bla blalorem ipsum bla bla",
        imageUrl:
          "https://tr.web.img4.acsta.net/pictures/19/03/28/11/29/4805705.jpg",
      },
      {
        id: 3,
        name: "Baba",
        rating: 9.2,
        overview:
          "lorem ipsum bla blalorem ipsum bla blalorem ipsum bla blalorem ipsum bla blalorem ipsum bla blalorem ipsum bla bla",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
      },
      {
        id: 4,
        name: "Ahmet",
        rating: 7.2,
        overview:
          "lorem ipsum bla blalorem ipsum bla blalorem ipsum bla blalorem ipsum bla blalorem ipsum bla blalorem ipsum bla bla",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
      },
      {
        id: 5,
        name: "Mehmet",
        rating: 9.6,
        overview:
          "lorem ipsum bla blalorem ipsum bla blalorem ipsum bla blalorem ipsum bla blalorem ipsum bla blalorem ipsum bla bla",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
      },
      {
        id: 6,
        name: "Cam",
        rating: 9.1,
        overview:
          "lorem ipsum bla blalorem ipsum bla blalorem ipsum bla blalorem ipsum bla blalorem ipsum bla blalorem ipsum bla bla",
        imageUrl:
          "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg",
      },
    ],
    searchQuery: "",
  };
  deleteMovie = (movie) => {
    const newMovieList = this.state.movies.filter((m) => m.id !== movie.id);
    // this.setState({
    //   movies: newMovieList,
    // });
    this.setState((state) => ({
      movies: newMovieList,
    }));
  };
  searchMovie = (event) => {
    // console.log(event.target.value)
    this.setState({ searchQuery: event.target.value });
  };

  render() {

    let filteredMovies = this.state.movies.filter(
      (movie) => {
        return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
      }
    )

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SearchBar searchMovieProp={this.searchMovie} />
          </div>
        </div>
        <MovieList
          movies={filteredMovies}
          deleteMovieProp={this.deleteMovie}
        />
      </div>
    );
  }
}
export default App;
