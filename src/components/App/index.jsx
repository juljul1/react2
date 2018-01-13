import React from "react";
import "./styles.css";
import Header from "../Header";
import RightSide from "../RightSide";
import Gallery from "../Gallery";
import {
  getMoviesbyApi,
  getPopularMovies,
  getUpcomingMovies,
  getTopRatedMovies
        } from "./API.js";

export default class App extends React.Component {
  state = {
    movies: [],
    watchlist: []
  };
componentWillMount() {
    getPopularMovies().then(data => {
      this.setState({
        movies: data
      });
    });
    if (localStorage.getItem("watchlist") !== null) {
      this.setState({
        watchlist: JSON.parse(localStorage.getItem("watchlist"))
      });
    }
  }
  _topRated = () => {
    getTopRatedMovies().then(data => {
      this.setState({
        movies: data
      });
    });
  };
  _popular = () => {
    getPopularMovies().then(data => {
      this.setState({
        movies: data
      });
    });
  };
  _upcoming = () => {
    getUpcomingMovies().then(data => {
      this.setState({
        movies: data
      });
    });
  };
   _getMoviesbyApi = query => {
    getMoviesbyApi(query).then(data => {
      this.setState({
        movies: data
      });
    });
  };
  _addToWatchList = el => {
      if (this.state.watchlist.filter(elem => elem.id ===  el.id).length === 0) {
                let watchListElem = this.state.movies.filter(elem => elem.id ===  el.id);
                this.setState(prevState => ({
                    movies: prevState.movies,
                    watchlist: [...prevState.watchlist, ...watchListElem]
                }))
            } else alert('This movie already in your watchlist');
            setTimeout(() => {
                let watchlist = JSON.stringify(this.state.watchlist);
                localStorage.setItem('watchlist', watchlist);
            }, 100);
        };
  _removeFromWatchList = id => {
    this.setState(
      {
        watchlist: this.state.watchlist.filter(element => element.id !== id)
      },
      () => {
        localStorage.setItem("watchlist", JSON.stringify(this.state.watchlist));
      }
    );
  };
  render() {
      console.log(this.state.watchlist);
    return (

      <div>
        <Header text='Movie Mate' />
            <Gallery movies={this.state.movies} addToWatchList={this._addToWatchList} className="MainSection" />
            <div className="MovieForm">
                <RightSide
                  searchField={this._getMoviesbyApi}
                  vote_average={this._topRated}
                  upcoming={this._upcoming}
                  popular={this._popular}
                  watchAdd={this.state.watchlist}
                  removeMovie={this._removeFromWatchList}
                />
        </div>
      </div>
    );
  }
}
