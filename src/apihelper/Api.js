import API from './BaseAPI';

const BaseURL = 'https://wookie.codesubmit.io'

export const getMovies = (callback) => {
  const path = `${BaseURL}/movies`
  API.makeGetRequest(path , callback);
};

export const searhMovies = (search_text, callback) => {
  const path = `${BaseURL}/movies?q=${search_text}`
  API.makeGetRequest(path , callback);
};
