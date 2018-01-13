import React from 'react';
import GalleryElem from '../GalleryElem';
import './styles.css';

export default class Gallery extends React.Component {
  render() {
    const { movies, addToWatchList } = this.props;
    return (
      <div className="Gallery">
        {movies.map(elem => (
          <GalleryElem key={elem.id} {...elem} addToWatchList={() => { addToWatchList(elem); }}
          />
        ))}
      </div>
    );
  }
}
