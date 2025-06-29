package com.example.movieapp.repository;

import com.example.movieapp.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MovieRepository extends MongoRepository<Movie, String> {
    List<Movie> findAll();
    Movie findByImdbID(String imdbID);
    void deleteByImdbID(String imdbID);
}