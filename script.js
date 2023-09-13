// script.js

// Simulate loading movie and TV show data
const movies = [
    { title: "Kushi", poster: "movie1.jpg" },
    { title: "Movie 2", poster: "movie2.jpg" },
    // Add more movie data here
];

const tvShows = [
    { title: "TV Show 1", poster: "show1.jpg" },
    { title: "TV Show 2", poster: "show2.jpg" },
    // Add more TV show data here
];

// Function to display movie and TV show lists
function displayLists() {
    const movieList = document.querySelector(".movie-list");
    const tvShowList = document.querySelector(".tv-show-list");

    movies.forEach((movie) => {
        const movieItem = document.createElement("div");
        movieItem.className = "movie-item";
        movieItem.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}">
            <p>${movie.title}</p>
        `;
        movieList.appendChild(movieItem);
    });

    tvShows.forEach((show) => {
        const showItem = document.createElement("div");
        showItem.className = "tv-show-item";
        showItem.innerHTML = `
            <img src="${show.poster}" alt="${show.title}">
            <p>${show.title}</p>
        `;
        tvShowList.appendChild(showItem);
    });
}

// Execute the displayLists function when the page loads
window.onload = displayLists;
