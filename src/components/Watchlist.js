import React from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function Watchlist({ movies, watchlist, toggleWatchList }) {
  return (
    <div>
      <h1 className="title">Your Watchlist</h1>
      <div className="watchlist">
        {watchlist.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          return (
            <MovieCard
              key={id}
              movie={movie}
              toggleWatchList={toggleWatchList}
              isWatchListed={true}
            ></MovieCard>
          );
        })}
      </div>
    </div>
  );
}
