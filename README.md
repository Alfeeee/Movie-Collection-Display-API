# 🎬 Movie Collection Display API

## 1. About the Collection

This movie collection includes a mix of classic and modern films across multiple genres such as Drama, Action, and Sci-Fi. The collection is designed to showcase variety, ranging from timeless classics to visually stunning modern cinema. This gives a balanced dataset for demonstrating API filtering and genre grouping.

---

## 2. Project Description

This project is a simple Movie Collection API built using **Node.js** and **Express.js**, along with a frontend HTML page that fetches and displays movie data. The API provides three endpoints to view all movies, classic movies, and genre statistics. The frontend uses **HTML**, **CSS**, and **JavaScript (Fetch API)** to interact with the backend and dynamically show results.

---

## 3. Genres Available

* Drama
* Action
* Sci-Fi
  (Your list may include more depending on your movie data.)

---

## 4. Project Structure

```
movie-collection-api/
│── server.js
│── package.json
│── README.md
│── .gitignore
│
└── public/
    └── index.html
```

---

## 5. API Documentation

### **GET /movies**

* **Method:** GET
* **Description:** Returns all movies
* **Sample Response:**

```json
[
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "releaseYear": 1994,
    "isClassic": true,
    "director": "Frank Darabont"
  }
]
```

---

### **GET /movies/classics**

* **Method:** GET
* **Description:** Returns movies marked as classic (released before 2000)
* **Sample Response:**

```json
[
  {
    "id": 1,
    "title": "The Shawshank Redemption",
    "genre": "Drama",
    "releaseYear": 1994,
    "isClassic": true,
    "director": "Frank Darabont"
  }
]
```

---

### **GET /movies/genres**

* **Method:** GET
* **Description:** Returns all unique genres with movie counts
* **Sample Response:**

```json
{
  "genres": [
    { "name": "Drama", "movieCount": 2 },
    { "name": "Action", "movieCount": 2 },
    { "name": "Sci-Fi", "movieCount": 2 }
  ]
}
```

---

## 6. Installation & Setup Instructions

### Step 1 — Clone the Repository

```
git clone https://github.com/Alfeeee/Movie-Collection-Display-API.git
```

### Step 2 — Enter the Project Folder

```
cd movie-collection-api
```

### Step 3 — Install Dependencies

```
npm install
```

### Step 4 — Start the Server

```
node server.js
```

### Step 5 — Access the API and Frontend

* API Base URL: `http://localhost:3000`
* Endpoints:

  * `/movies`
  * `/movies/classics`
  * `/movies/genres`
* Frontend Page:

  ```
  http://localhost:3000
  ```

---

## 7. Features

* View all movies
* View classic movies
* View genres with movie count
* Interactive frontend using Fetch API
* Classic movies visually highlighted
* Clean project structure and organized code

---

## 8. GitHub Repository Link

 [https://github.com/Alfeeee/Movie-Collection-Display-API.git](https://github.com/Alfeeee/Movie-Collection-Display-API.git)
(Replace with your actual link)

---

## 9. Author Information

**Name:** Alfin

---
