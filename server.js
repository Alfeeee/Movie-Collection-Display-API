const express = require("express");
const app = express();
const port = 3000;

// Static files
app.use(express.static("public"));

// Movie Data
const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    genre: "Drama",
    releaseYear: 1994,
    isClassic: true,
    director: "Frank Darabont",
  },
  {
    id: 2,
    title: "Inception",
    genre: "Sci-Fi",
    releaseYear: 2010,
    isClassic: false,
    director: "Christopher Nolan",
  },
  {
    id: 3,
    title: "The Dark Knight",
    genre: "Action",
    releaseYear: 2008,
    isClassic: false,
    director: "Christopher Nolan",
  },
  {
    id: 4,
    title: "Forrest Gump",
    genre: "Drama",
    releaseYear: 1994,
    isClassic: true,
    director: "Robert Zemeckis",
  },
  {
    id: 5,
    title: "Interstellar",
    genre: "Sci-Fi",
    releaseYear: 2014,
    isClassic: false,
    director: "Christopher Nolan",
  },
  {
    id: 6,
    title: "Terminator 2",
    genre: "Action",
    releaseYear: 1991,
    isClassic: true,
    director: "James Cameron",
  }
];

// 1. GET /movies
app.get("/movies", (req, res) => {
  res.json(movies);
});

// 2. GET /movies/classics
app.get("/movies/classics", (req, res) => {
  const classics = movies.filter(movie => movie.isClassic);
  res.json(classics);
});

// 3. GET /movies/genres
app.get("/movies/genres", (req, res) => {
  const genresMap = movies.reduce((acc, movie) => {
    acc[movie.genre] = (acc[movie.genre] || 0) + 1;
    return acc;
  }, {});

  const genres = Object.keys(genresMap).map(genre => ({
    name: genre,
    movieCount: genresMap[genre],
  }));

  res.json({ genres });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
