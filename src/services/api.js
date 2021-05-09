import axios from "axios";

const basicUrl = "https://api.themoviedb.org/3";
const key = "f6dc6a80ab643da3afb0355d292a0e10";

export const popularFilms = () =>
  axios.get(`${basicUrl}/trending/movie/week?api_key=${key}`);

export const searchInfo = (id) =>
  axios.get(`${basicUrl}/movie/${id}?api_key=${key}`);

export const searchMovie = (query = "batman") =>
  axios.get(
    `${basicUrl}/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${query}`
  );

export const Cast = (id) =>
  axios.get(`${basicUrl}/movie/${id}/credits?api_key=${key}`);

export const Reviews = (id) =>
  axios.get(`${basicUrl}/movie/${id}/reviews?api_key=${key}`);
