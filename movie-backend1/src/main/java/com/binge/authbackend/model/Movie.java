package com.example.movieapp.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

@Data
@Document(collection = "watchlist_movies")
public class Movie {
    @Id
    private String id;
    
    private String imdbID;
    private String title;
    private String year;
    private String type;
    private String poster;
    private Date createdAt = new Date();
}
