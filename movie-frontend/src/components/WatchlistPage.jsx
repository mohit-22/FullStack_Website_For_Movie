import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const WatchlistPage = () => {
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
    <Container>
      <Title>My Watchlist</Title>
      {watchlist.length > 0 ? (
        <MovieGrid>
          {watchlist.map(movie => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onWatchlistAction={handleRemoveFromWatchlist}
              inWatchlist={true}
            />
          ))}
        </MovieGrid>
      ) : (
        <p>Your watchlist is empty. Add some movies!</p>
      )}
    </Container>
  );
};

export default WatchlistPage;