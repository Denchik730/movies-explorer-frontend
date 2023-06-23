import { BASE_URL_MAIN_API } from "./constants";

class Api {
  constructor({baseUrl, headers}) {
    this._url = baseUrl;
    this._headers = headers
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
      headers: this._headers,
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
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
    .then((response) => {
      console.log(response)
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

  getUserInfo() {
    return this._request(`${this._url}/users/me`, {
      headers: this._headers
    });
  }

  setProfileUserInfo(name, email) {
    return this._request(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        name: name,
      })
    });
  }

  getSavedMovies() {
    return this._request(`${this._url}/movies`, {
      headers: this._headers
    });
  }

  addNewMovies(dataMovies) {
    return this._request(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
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
        movieId: dataMovies.id,
      })
    });
  }

  deleteSavedMovie(id) {
    return this._request(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers
    });
  }

  getAllNeededData() {
    return Promise.all([this.getUserInfo(), this.getSavedMovies()]);
  }
}

const mainApi = new Api({
  // baseUrl: BASE_URL_MAIN_API,
  baseUrl: 'http://localhost:3001',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem("token")}`,
    'Content-Type': 'application/json',
  },
});

export default mainApi;
