import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 10px;
  width: 200px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Poster = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const Title = styled.h3`
  margin: 8px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Button = styled.button`
  background-color: ${props => props.inWatchlist ? '#4CAF50' : '#2196F3'};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 8px;
  width: 100%;

  &:hover {
    opacity: 0.9;
  }
`;

const MovieCard = ({ movie, onWatchlistAction, inWatchlist }) => {
  return (
    <Card>
      <Poster src={movie.Poster} alt={movie.Title} />
      <Title>{movie.Title}</Title>
      <p>Year: {movie.Year}</p>
      <p>Type: {movie.Type}</p>
      <Button 
        onClick={() => onWatchlistAction(movie)}
        inWatchlist={inWatchlist}
      >
        {inWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
      </Button>
    </Card>
  );
};

export default MovieCard;