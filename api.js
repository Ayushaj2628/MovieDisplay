document.getElementById('search-button').addEventListener('click', function() {
    const movieTitle = document.getElementById('search-input').value;
    fetchMovies(movieTitle);
});

function fetchMovies(title) {
    const apiKey = 'ae34e0f0';
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${title}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                displayMovies(data.Search);
            } else {
                alert('No movies found');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayMovies(movies) {
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = '';

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p><strong>Year:</strong>${movie.Year}</p>
        `;
        movieCard.addEventListener('click', () => showMovieDetails(movie.imdbID));
        movieContainer.appendChild(movieCard);
    });
}
