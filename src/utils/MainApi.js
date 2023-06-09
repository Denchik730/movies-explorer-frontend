import { BASE_URL_MAIN_API } from "./constants";

class Api {
  constructor({ baseUrl }) {
    this._url = baseUrl;
  }

  _checkRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkRes);
  }

  register(name, email, password) {
    return this._request(`${this._url}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      })
    });
  }

  login(email, password) {
    return this._request(`${this._url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
    .then((response) => {
      if (response.token) {
        localStorage.setItem('token', response.token);
        return response;
      }
    })
  }

  checkToken(token) {
    return this._request(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    })
  }

  getUserInfo(token) {
    return this._request(`${this._url}/users/me`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  }

  setProfileUserInfo(name, email, token) {
    return this._request(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        email: email,
        name: name,
      })
    });
  }

  getSavedMovies(token) {
    return this._request(`${this._url}/movies`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    });
  }

  addNewMovies(dataMovies, token) {
    return this._request(`${this._url}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({
        country: dataMovies.country,
        director: dataMovies.director,
        duration: dataMovies.duration,
        year: dataMovies.year,
        description: dataMovies.description,
        image: dataMovies.image,
        trailerLink: dataMovies.trailerLink,
        nameRU: dataMovies.nameRU,
        nameEN: dataMovies.nameEN,
        thumbnail: dataMovies.thumbnail,
        movieId: dataMovies.movieId,
      })
    });
  }

  deleteSavedMovie(id, token) {
    return this._request(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
  }

  getAllNeededData() {
    return Promise.all([this.getUserInfo(), this.getSavedMovies()]);
  }
}

const mainApi = new Api({
  baseUrl: BASE_URL_MAIN_API,
});

export default mainApi;
