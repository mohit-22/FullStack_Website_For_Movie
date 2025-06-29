// // // // import React from "react";
// // // // import styled from "styled-components";
// // // // import axios from "axios";

// // // // const MovieContainer = styled.div`
// // // //   display: flex;
// // // //   flex-direction: column;
// // // //   padding: 10px;
// // // //   width: 280px;
// // // //   box-shadow: 0 3px 10px 0 #aaa;
// // // //   cursor: pointer;
// // // // `;

// // // // const CoverImage = styled.img`
// // // //   object-fit: cover;
// // // //   height: 362px;
// // // // `;

// // // // const MovieName = styled.span`
// // // //   font-size: 18px;
// // // //   font-weight: 600;
// // // //   color: black;
// // // //   margin: 15px 0;
// // // //   white-space: nowrap;
// // // //   overflow: hidden;
// // // //   text-overflow: ellipsis;
// // // // `;

// // // // const InfoColumn = styled.div`
// // // //   display: flex;
// // // //   flex-direction: row;
// // // //   justify-content: space-between;
// // // // `;

// // // // const MovieInfo = styled.span`
// // // //   font-size: 16px;
// // // //   font-weight: 500;
// // // //   color: black;
// // // //   white-space: nowrap;
// // // //   overflow: hidden;
// // // //   text-transform: capitalize;
// // // //   text-overflow: ellipsis;
// // // // `;

// // // // // const MovieComponent = ({ movie, onMovieSelect }) => {
// // // // //   const { Title, Year, imdbID, Type, Poster } = movie;

// // // // //   const handleClick = () => {
// // // // //     onMovieSelect(imdbID);
// // // // //     window.scrollTo({ top: 0, behavior: "smooth" });
// // // // //   };

// // // // //   return (
// // // // //     <MovieContainer onClick={handleClick}>
// // // // //       <CoverImage src={Poster} alt={Title} />
// // // // //       <MovieName>{Title}</MovieName>
// // // // //       <InfoColumn>
// // // // //         <MovieInfo>Year : {Year}</MovieInfo>
// // // // //         <MovieInfo>Type : {Type}</MovieInfo>
// // // // //       </InfoColumn>
// // // // //     </MovieContainer>
// // // // //   );
// // // // // };
// // // // const MovieComponent = ({ movie, onMovieSelect, onAddToWatchlist, inWatchlist }) => {
// // // //   const { Title, Year, imdbID, Type, Poster } = movie;

// // // //   const handleClick = () => {
// // // //     if (onMovieSelect) onMovieSelect(imdbID);
// // // //     window.scrollTo({ top: 0, behavior: "smooth" });
// // // //   };

// // // //   const handleAddToWatchlist = async (e) => {
// // // //     e.stopPropagation();
// // // //     try {
// // // //       await axios.post('http://localhost:5000/api/watchlist', movie);
// // // //       if (onAddToWatchlist) onAddToWatchlist(movie);
// // // //     } catch (error) {
// // // //       console.error('Error adding to watchlist:', error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <MovieContainer onClick={handleClick}>
// // // //       {inWatchlist ? (
// // // //         <AddToWatchlist onClick={handleAddToWatchlist}>✓</AddToWatchlist>
// // // //       ) : (
// // // //         <AddToWatchlist onClick={handleAddToWatchlist}>+</AddToWatchlist>
// // // //       )}
// // // //       <CoverImage src={Poster} alt={Title} />
// // // //       <MovieName>{Title}</MovieName>
// // // //       <InfoColumn>
// // // //         <MovieInfo>Year : {Year}</MovieInfo>
// // // //         <MovieInfo>Type : {Type}</MovieInfo>
// // // //       </InfoColumn>
// // // //     </MovieContainer>
// // // //   );
// // // // };

// // // // export default MovieComponent;

// // // import React from "react";
// // // import styled from "styled-components";
// // // import axios from "axios";

// // // const MovieContainer = styled.div`
// // //   display: flex;
// // //   flex-direction: column;
// // //   padding: 10px;
// // //   width: 280px;
// // //   box-shadow: 0 3px 10px 0 #aaa;
// // //   cursor: pointer;
// // //   position: relative;
// // // `;

// // // const CoverImage = styled.img`
// // //   object-fit: cover;
// // //   height: 362px;
// // // `;

// // // const MovieName = styled.span`
// // //   font-size: 18px;
// // //   font-weight: 600;
// // //   color: black;
// // //   margin: 15px 0;
// // //   white-space: nowrap;
// // //   overflow: hidden;
// // //   text-overflow: ellipsis;
// // // `;

// // // const InfoColumn = styled.div`
// // //   display: flex;
// // //   flex-direction: row;
// // //   justify-content: space-between;
// // // `;

// // // const MovieInfo = styled.span`
// // //   font-size: 16px;
// // //   font-weight: 500;
// // //   color: black;
// // //   white-space: nowrap;
// // //   overflow: hidden;
// // //   text-transform: capitalize;
// // //   text-overflow: ellipsis;
// // // `;

// // // const AddToWatchlist = styled.button`
// // //   position: absolute;
// // //   top: 10px;
// // //   right: 10px;
// // //   background-color: rgba(0, 0, 0, 0.7);
// // //   color: white;
// // //   border: none;
// // //   border-radius: 50%;
// // //   width: 30px;
// // //   height: 30px;
// // //   font-size: 16px;
// // //   cursor: pointer;
// // //   display: flex;
// // //   align-items: center;
// // //   justify-content: center;
// // //   z-index: 1;

// // //   &:hover {
// // //     background-color: rgba(0, 0, 0, 0.9);
// // //   }
// // // `;

// // // const MovieComponent = ({ movie, onMovieSelect, onAddToWatchlist, inWatchlist }) => {
// // //   // Add null checks and default values for movie properties
// // //   const { 
// // //     Title = 'Unknown Title', 
// // //     Year = 'Unknown Year', 
// // //     imdbID = '', 
// // //     Type = 'movie', 
// // //     Poster = 'https://via.placeholder.com/300x450?text=No+Poster' 
// // //   } = movie || {};

// // //   const handleClick = () => {
// // //     if (onMovieSelect && imdbID) {
// // //       onMovieSelect(imdbID);
// // //       window.scrollTo({ top: 0, behavior: "smooth" });
// // //     }
// // //   };

// // //   const handleAddToWatchlist = async (e) => {
// // //     e.stopPropagation();
// // //     try {
// // //       if (movie) {
// // //         await axios.post('http://localhost:5000/api/watchlist', movie);
// // //         if (onAddToWatchlist) {
// // //           onAddToWatchlist(movie);
// // //         }
// // //       }
// // //     } catch (error) {
// // //       console.error('Error adding to watchlist:', error);
// // //     }
// // //   };

// // //   return (
// // //     <MovieContainer onClick={handleClick}>
// // //       {inWatchlist ? (
// // //         <AddToWatchlist onClick={handleAddToWatchlist}>✓</AddToWatchlist>
// // //       ) : (
// // //         <AddToWatchlist onClick={handleAddToWatchlist}>+</AddToWatchlist>
// // //       )}
// // //       <CoverImage 
// // //         src={Poster} 
// // //         alt={Title} 
// // //         onError={(e) => {
// // //           e.target.src = 'https://via.placeholder.com/300x450?text=No+Poster';
// // //         }}
// // //       />
// // //       <MovieName>{Title}</MovieName>
// // //       <InfoColumn>
// // //         <MovieInfo>Year: {Year}</MovieInfo>
// // //         <MovieInfo>Type: {Type}</MovieInfo>
// // //       </InfoColumn>
// // //     </MovieContainer>
// // //   );
// // // };

// // // export default MovieComponent;


// // import React from "react";
// // import styled from "styled-components";
// // import axios from "axios";

// // const MovieContainer = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   padding: 10px;
// //   width: 280px;
// //   box-shadow: 0 3px 10px 0 #aaa;
// //   cursor: pointer;
// //   position: relative; /* This is crucial for absolute positioning */
// // `;

// // const CoverImage = styled.img`
// //   object-fit: cover;
// //   height: 362px;
// //   width: 100%;
// // `;

// // const MovieName = styled.span`
// //   font-size: 18px;
// //   font-weight: 600;
// //   color: black;
// //   margin: 15px 0;
// //   white-space: nowrap;
// //   overflow: hidden;
// //   text-overflow: ellipsis;
// // `;

// // const InfoColumn = styled.div`
// //   display: flex;
// //   flex-direction: row;
// //   justify-content: space-between;
// // `;

// // const MovieInfo = styled.span`
// //   font-size: 16px;
// //   font-weight: 500;
// //   color: black;
// //   white-space: nowrap;
// //   overflow: hidden;
// //   text-transform: capitalize;
// //   text-overflow: ellipsis;
// // `;

// // const WatchlistButton = styled.button`
// //   position: absolute;
// //   top: 15px;
// //   right: 15px;
// //   background-color: rgba(0, 0, 0, 0.7);
// //   color: white;
// //   border: none;
// //   border-radius: 50%;
// //   width: 36px;
// //   height: 36px;
// //   font-size: 18px;
// //   cursor: pointer;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   z-index: 2;
// //   transition: all 0.3s ease;

// //   &:hover {
// //     background-color: rgba(0, 0, 0, 0.9);
// //     transform: scale(1.1);
// //   }
// // `;

// // const MovieComponent = ({ movie, onMovieSelect, onAddToWatchlist, inWatchlist }) => {
// //   const { Title, Year, imdbID, Type, Poster } = movie || {};

// //   const handleClick = () => {
// //     if (onMovieSelect) onMovieSelect(imdbID);
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   };

// //   const handleWatchlistAction = async (e) => {
// //     e.stopPropagation();
// //     try {
// //       if (inWatchlist) {
// //         await axios.delete(`http://localhost:5000/api/watchlist/${imdbID}`);
// //       } else {
// //         await axios.post('http://localhost:5000/api/watchlist', movie);
// //       }
// //       if (onAddToWatchlist) onAddToWatchlist(movie);
// //     } catch (error) {
// //       console.error('Error updating watchlist:', error);
// //     }
// //   };

// //   return (
// //     <MovieContainer onClick={handleClick}>
// //       <WatchlistButton onClick={handleWatchlistAction}>
// //         {inWatchlist ? '✓' : '+'}
// //       </WatchlistButton>
// //       <CoverImage 
// //         src={Poster || 'https://via.placeholder.com/300x450?text=No+Poster'} 
// //         alt={Title} 
// //       />
// //       <MovieName>{Title}</MovieName>
// //       <InfoColumn>
// //         <MovieInfo>Year: {Year}</MovieInfo>
// //         <MovieInfo>Type: {Type}</MovieInfo>
// //       </InfoColumn>
// //     </MovieContainer>
// //   );
// // };

// // export default MovieComponent;



// import React from "react";
// import styled from "styled-components";
// import axios from "axios";

// const MovieContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 10px;
//   width: 280px;
//   box-shadow: 0 3px 10px 0 #aaa;
//   cursor: pointer;
//   position: relative;
// `;

// const CoverImage = styled.img`
//   object-fit: cover;
//   height: 362px;
//   width: 100%;
// `;

// const MovieName = styled.span`
//   font-size: 18px;
//   font-weight: 600;
//   color: black;
//   margin: 15px 0;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
// `;

// const InfoColumn = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `;

// const MovieInfo = styled.span`
//   font-size: 16px;
//   font-weight: 500;
//   color: black;
//   white-space: nowrap;
//   overflow: hidden;
//   text-transform: capitalize;
//   text-overflow: ellipsis;
// `;

// const WatchlistButton = styled.button`
//   position: absolute;
//   top: 15px;
//   right: 15px;
//   background-color: ${props => props.inWatchlist ? '#ff4d4d' : '#4CAF50'};
//   color: white;
//   border: none;
//   border-radius: 4px;
//   padding: 8px 12px;
//   font-size: 14px;
//   cursor: pointer;
//   z-index: 2;
//   transition: all 0.3s ease;
//   white-space: nowrap;

//   &:hover {
//     background-color: ${props => props.inWatchlist ? '#ff3333' : '#45a049'};
//     transform: scale(1.05);
//   }
// `;

// const MovieComponent = ({ movie, onMovieSelect, onAddToWatchlist, inWatchlist }) => {
//   const { Title, Year, imdbID, Type, Poster } = movie || {};

//   const handleClick = () => {
//     if (onMovieSelect) onMovieSelect(imdbID);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleWatchlistAction = async (e) => {
//     e.stopPropagation();
//     try {
//       if (inWatchlist) {
//         await axios.delete(`http://localhost:5000/api/watchlist/${imdbID}`);
//       } else {
//         await axios.post('http://localhost:5000/api/watchlist', movie);
//       }
//       if (onAddToWatchlist) onAddToWatchlist(movie);
//     } catch (error) {
//       console.error('Error updating watchlist:', error);
//     }
//   };

//   return (
//     <MovieContainer onClick={handleClick}>
//       <WatchlistButton 
//         onClick={handleWatchlistAction}
//         inWatchlist={inWatchlist}
//       >
//         {inWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
//       </WatchlistButton>
//       <CoverImage 
//         src={Poster || 'https://via.placeholder.com/300x450?text=No+Poster'} 
//         alt={Title} 
//       />
//       <MovieName>{Title}</MovieName>
//       <InfoColumn>
//         <MovieInfo>Year: {Year}</MovieInfo>
//         <MovieInfo>Type: {Type}</MovieInfo>
//       </InfoColumn>
//     </MovieContainer>
//   );
// };

// export default MovieComponent;


import React from "react";
import styled from "styled-components";
import axios from "axios";

const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 280px;
  box-shadow: 0 3px 10px 0 #aaa;
  cursor: pointer;
  position: relative;
`;

const CoverImage = styled.img`
  object-fit: cover;
  height: 362px;
  width: 100%;
`;

const MovieName = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: black;
  margin: 15px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MovieInfo = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: black;
  white-space: nowrap;
  overflow: hidden;
  text-transform: capitalize;
  text-overflow: ellipsis;
`;

const WatchlistButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: ${props => props.inWatchlist ? '#ff4d4d' : '#4CAF50'};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  z-index: 2;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: ${props => props.inWatchlist ? '#ff3333' : '#45a049'};
    transform: scale(1.05);
  }
`;

const MovieComponent = ({ movie, onMovieSelect, onWatchlistUpdate, inWatchlist }) => {
  const { Title, Year, imdbID, Type, Poster } = movie || {};

  const handleClick = () => {
    if (onMovieSelect) onMovieSelect(imdbID);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleWatchlistAction = async (e) => {
    e.stopPropagation();
    try {
      if (inWatchlist) {
        await axios.delete(`http://localhost:5000/api/watchlist/${imdbID}`);
      } else {
        await axios.post('http://localhost:5000/api/watchlist', movie);
      }
      // Call the update function to refresh the watchlist state
      if (onWatchlistUpdate) onWatchlistUpdate();
    } catch (error) {
      console.error('Error updating watchlist:', error);
    }
  };

  return (
    <MovieContainer onClick={handleClick}>
      <WatchlistButton 
        onClick={handleWatchlistAction}
        inWatchlist={inWatchlist}
      >
        {inWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
      </WatchlistButton>
      <CoverImage 
        src={Poster || 'https://via.placeholder.com/300x450?text=No+Poster'} 
        alt={Title} 
      />
      <MovieName>{Title}</MovieName>
      <InfoColumn>
        <MovieInfo>Year: {Year}</MovieInfo>
        <MovieInfo>Type: {Type}</MovieInfo>
      </InfoColumn>
    </MovieContainer>
  );
};

export default MovieComponent;