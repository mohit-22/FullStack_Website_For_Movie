package com.example.movieapp.controller;

import com.example.movieapp.model.Movie;
import com.example.movieapp.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/watchlist")
public class WatchlistController {

    @Autowired
    private MovieRepository movieRepository;

    // Get all watchlist movies
    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies() {
        return new ResponseEntity<>(movieRepository.findAll(), HttpStatus.OK);
    }

    // Add to watchlist
    @PostMapping
    public ResponseEntity<Movie> addToWatchlist(@RequestBody Movie movie) {
        return new ResponseEntity<>(movieRepository.save(movie), HttpStatus.CREATED);
    }

    // Remove from watchlist
    @DeleteMapping("/{imdbID}")
    public ResponseEntity<String> removeFromWatchlist(@PathVariable String imdbID) {
        movieRepository.deleteByImdbID(imdbID);
        return new ResponseEntity<>("Movie removed from watchlist", HttpStatus.OK);
    }
}