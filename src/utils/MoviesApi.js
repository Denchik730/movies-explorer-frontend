import { BASE_URL_MOVIES_API } from "./constants";

const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(response.status);
};

const request = (baseUrl, endpoint, options) => {
  return fetch(`${baseUrl}/${endpoint}`, options).then(checkResponse);
};

export const getMovies = () => {
  return request(BASE_URL_MOVIES_API, `beatfilm-movies`).then((response) => response)
}


