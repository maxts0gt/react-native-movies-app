import axios from 'axios';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=f9f6a974d4008919a6c191d00ca95c6a';
//Get popular movies
export const getPopularMovies = async () => {
  const response = await axios.get(`${apiUrl}/movie/popular?${apiKey}`);
  return response.data.results;
};

export const getUpcomingMovies = async () => {
  const response = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`);
  return response.data.results;
};

export const getPopularTv = async () => {
  const response = await axios.get(`${apiUrl}/tv/upcoming?${apiKey}`);
  return response.data.results;
};
