import React, { useState, useCallback, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import MovieComponent from "../components/MovieComponent";
import MovieInfoComponent from "../components/MovieInfoComponent";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";

export const API_KEY = "a9118a3a";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ sidebarOpen }) => (sidebarOpen ? "200px" : "0")};
  transition: margin-left 0.3s ease-in-out;
`;

const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;

const AppName = styled.div`
  display: flex;
  align-items: center;
`;

const ToggleButton = styled.button`
  background-color: #444;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 4px;

  &:hover {
    background-color: #666;
  }
`;

const ProfileButton = styled.button`
  
  background-color:rgb(64, 46, 204);
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
  border-radius: 8px;

  &:hover {
    background-color: #27ae60;
  }
`;

const MovieImage = styled.img`
  width: 48px;
  height: 48px;
  margin: 15px;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
`;

const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
  width: 100%;
`;

const MovieListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  gap: 25px;
  justify-content: space-evenly;
`;

const Placeholder = styled.img`
  width: 120px;
  height: 120px;
  margin: 150px;
  opacity: 0.5;
`;

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [timeoutId, setTimeoutId] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [watchlist, setWatchlist] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchWatchlist = async () => {
      try {
        const response = await Axios.get("http://localhost:5000/api/watchlist");
        setWatchlist(response.data);
      } catch (error) {
        console.error("Error fetching watchlist:", error);
      }
    };
    fetchWatchlist();
  }, []);

  const fetchData = useCallback(async (searchString) => {
    try {
      const response = await Axios.get(
        `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`
      );
      setMovieList(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData("avengers");
  }, [fetchData]);

  const onTextChange = (e) => {
    setSelectedMovie(null);
    clearTimeout(timeoutId);
    setSearchQuery(e.target.value);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    setTimeoutId(timeout);
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleAddToWatchlist = async (movie) => {
    try {
      await Axios.post("http://localhost:5000/api/watchlist", movie);
      setWatchlist([...watchlist, movie]);
    } catch (error) {
      console.error("Error adding to watchlist:", error);
    }
  };

  return (
    <>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <Container sidebarOpen={sidebarOpen}>
        <Header>
          <AppName>
            <MovieImage
              src="https://www.shutterstock.com/image-vector/binge-watching-square-banner-web-600nw-1843952809.jpg"
              alt="logo"
            />
            BINGE WATCH
          </AppName>
          <div style={{ display: "flex", alignItems: "center" }}>
            <SearchBox>
              <SearchIcon
                src="https://www.shutterstock.com/image-vector/binge-watching-square-banner-web-600nw-1843952809.jpg"
                alt="search"
              />
              <SearchInput
                placeholder="Search Movie"
                value={searchQuery}
                onChange={onTextChange}
              />
            </SearchBox>

            <ToggleButton onClick={toggleSidebar}>
              {sidebarOpen ? "Close" : "Menu"}
            </ToggleButton>

            <ProfileButton onClick={() => navigate("/profile")}>
              Profile
            </ProfileButton>
          </div>
        </Header>

        {selectedMovie && (
          <MovieInfoComponent
            selectedMovie={selectedMovie}
            onMovieSelect={setSelectedMovie}
          />
        )}

        <MovieListContainer>
          {movieList?.length ? (
            movieList.map((movie) => (
              <MovieComponent
                key={movie.imdbID}
                movie={movie}
                onMovieSelect={setSelectedMovie}
                onAddToWatchlist={handleAddToWatchlist}
                inWatchlist={watchlist.some((m) => m.imdbID === movie.imdbID)}
              />
            ))
          ) : (
            <Placeholder
              src="/react-movie-app/movie-icon.svg"
              alt="placeholder"
            />
          )}
        </MovieListContainer>
      </Container>
    </>
  );
};

export default Home;
