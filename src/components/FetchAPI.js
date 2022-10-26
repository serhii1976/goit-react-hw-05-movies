import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'f09d1b5efa02f6d2c633cb000c7d93f9';

export async function getTrendingMovies() {
  const response = await axios(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
}

export async function getMovieDitails(movie_id) {
  const response = await axios(
    `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`
  );
  return response;
}

export async function getCast(movie_id) {
  const response = await axios(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
}

export async function getReviews(movie_id) {
  const response = await axios(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}`
  );
  return response.data.results;
}

export async function getSearchMovies(searchQuery) {
  const response = await axios(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}`
  );
  return response;
}
