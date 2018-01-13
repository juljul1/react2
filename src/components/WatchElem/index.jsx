import React, { Component } from "react";
import "./styles.css";

export default ({ poster_path, title , release_date,  vote_average, delMovieFromWatchList }) => (
    <div className="WatchList-elem">
        <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt="movie-poster" className="WatchList__poster"
        />
        <div className="watch_list">
          <h4 className="watch_title">{title}</h4>
          <p className="watch_text">Year:{release_date.slice(0, 4)}</p>
          <p className="watch_text">{vote_average}</p>
          <button className="watch_deletbtn" onClick={delMovieFromWatchList}>
            Delete Card
          </button>
        </div>
      </div>
    );
