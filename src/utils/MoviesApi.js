export const BASE_URL = 'https://api.nomoreparties.co';

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
  return request(BASE_URL, `beatfilm-movies`).then((response) => response)
}


