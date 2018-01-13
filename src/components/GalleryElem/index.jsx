import React from 'react';
import './styles.css';


export default ({ poster_path, title , release_date,  overview, vote_average, addToWatchList }) => (
    <div className="Gallery-elem">
        <div className="Gallery-elem__discribe">
            <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt="movie-poster" className="Gallery-elem__pic"
             />
             <h5 className="Gallery-elem__ditail position">
             {vote_average}
             </h5>
                <h3 className="Gallery-elem__title">{title}</h3>
        </div>
        <p className="Gallery-elem__text">{overview.slice(0, 99)}...</p>

        <h5 className="Gallery-elem__title">
            <b>Release date:</b> {release_date}
        </h5>
        <button href="#" className="Gallery-elem__btn Gallery-elem__delete"  onClick={addToWatchList}>
            +
        </button>

    </div>
);
