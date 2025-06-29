import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieComponent from './MovieComponent';
import styled from 'styled-components';

const WatchlistContainer = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  margin-top: 20px;
  border-radius: 8px;
`;

const WatchlistTitle = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const WatchlistMovies = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/watchlist');
        setWatchlist(response.data);
      } catch (error) {
        console.error('Error fetching watchlist:', error);
      }
    };
    fetchWatchlist();
  }, []);

  const handleRemoveFromWatchlist = async (movie) => {
    try {
      await axios.delete(`http://localhost:5000/api/watchlist/${movie.imdbID}`);
      setWatchlist(watchlist.filter(m => m.imdbID !== movie.imdbID));
    } catch (error) {
      console.error('Error removing from watchlist:', error);
    }
  };

  return (
    <WatchlistContainer>
      <WatchlistTitle>My Watchlist</WatchlistTitle>
      {watchlist.length > 0 ? (
        <WatchlistMovies>
          {watchlist.map(movie => (
            <MovieComponent
              key={movie.imdbID}
              movie={movie}
              onMovieSelect={() => {}}
              onAddToWatchlist={handleRemoveFromWatchlist}
              inWatchlist={true}
            />
          ))}
        </WatchlistMovies>
      ) : (
        <p>Your watchlist is empty. Add some movies!</p>
      )}
    </WatchlistContainer>
  );
};

export default Watchlist;