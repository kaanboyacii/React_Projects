import React from "react";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  const truncateOverview = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)}...`;
  };
  return (
    <div className="row">
      {props.movies.map((movie, i) => (
        <div className="col-lg-3 " key={movie.id}>
          <div className="card mb-6 shadow-sm">
            <img
              src={movie.imageUrl}
              className="card-img-top"
              alt="Sample Movie"
            />
            <div className="card-body">
              <h5 className="card-title">{movie.name}</h5>
              <p className="card-text">
                {truncateOverview(movie.overview, 120)}
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <button
                  type="button"
                  onClick={(event) => props.deleteMovieProp(movie)}
                  className="btn btn-md btn-outline-danger"
                >
                  Delete
                </button>
                <Link
                  to={`edit/${movie.id}`}
                  class="btn btn-outline-warning"
                  type="button"
                >
                  Edit
                </Link>
                <h2>
                  <span className="text-danger">{movie.rating}</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MovieList;
