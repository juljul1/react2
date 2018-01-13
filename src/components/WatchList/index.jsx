import React, { Component } from "react";
 import WatchElem from "components/WatchElem";
import "./styles.css";

export default class WatchList extends Component {
  render() {
    const { watchAdd, removeMovie } = this.props;
    return (
      <div className="watch">
        <h1 className="watch__name">__ Watchlist __</h1>
        {watchAdd.map(elem => (
          <WatchElem key={elem.id} {...elem} delMovieFromWatchList={() => {
              removeMovie(elem.id);
            }}
          />
        ))}
      </div>
    );
  }
}
