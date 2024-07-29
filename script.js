function showMovieDetails(imdbID) {
    const apiKey = 'ae34e0f0';
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                displayMovieDetails(data);
            } else {
                  alert('Movie details not found');
          }
        })
        .catch(error => console.error('Error fetching data:', error));
}

function displayMovieDetails(movie) {
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = `
        <div class="movie-details">
            <h2>${movie.Title}</h2>
            <img src="${movie.Poster}" alt="${movie.Title}">
            <p><strong>Year:</strong> ${movie.Year}</p>
            <p><strong>Plot:</strong> ${movie.Plot}</p>
            <p><strong>Actors:</strong> ${movie.Actors}</p>
            <p><strong>Ratings:</strong> ${movie.Ratings.map(rating => rating.Source + ': ' + rating.Value).join(', ')}</p>
            <button onclick="goBack()">Go Back</button>
        </div>
    `;
}

function goBack() {
    document.getElementById('search-button').click();
}
