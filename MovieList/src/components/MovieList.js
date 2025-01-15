import React, { useState } from "react";

const MovieList = () => {
  // Step 1: Define the array of movie objects
  const movies = [
    { title: "Inception", genre: "Sci-Fi", releaseYear: 2010 },
    { title: "The Dark Knight", genre: "Action", releaseYear: 2008 },
    { title: "Hi Nana", genre: "Drama", releaseYear: 2020 },
    { title: "Interstellar", genre: "Sci-Fi", releaseYear: 2014 },
    { title: "Avengers", genre: "Action", releaseYear: 2012 },
  ];

  // Step 2: Initialize state hooks for selected genre
  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  // Step 3: Handle the change in genre selection
  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  // Filter the movies based on selected genre
  const filteredMovies = selectedGenre === "All Genres" ? movies : movies.filter((movie) => movie.genre === selectedGenre);

  // Step 4: Handle the click event on a movie title
  const handleMovieClick = (title) => {
    alert(`You selected: ${title}`);
  };

  // Step 5: Get unique genres for the dropdown
  const genres = ["All Genres", ...new Set(movies.map((movie) => movie.genre))];

  return (
    <div>
      <h1>Movie List</h1>
      <div>
        <label htmlFor="genre">Filter by Genre: </label>
        <select id="genre" value={selectedGenre} onChange={handleGenreChange}>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <ul>
        {filteredMovies.map((movie) => (
          <li
            key={movie.title}
            onClick={() => handleMovieClick(movie.title)}
            style={{
              cursor: "pointer",
              padding: "10px",
              border: "1px solid gray",
              margin: "5px",
              listStyleType: "none",
              borderRadius: "4px",
            }}
          >
            <h3>{movie.title}</h3>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Release Year:</strong> {movie.releaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
