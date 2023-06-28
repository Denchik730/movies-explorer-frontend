export const BASE_URL_MAIN_API = 'https://api.filmreview.nomoredomains.rocks';
export const BASE_URL_MOVIES_API = 'https://api.nomoreparties.co';

export const SHORT_MOVIE_DURATION = 40;

export const BIG_DEVICE = {
  SIZE_PX: 1280,
  DEFAULT_CARDS: 12,
  ADD_CARDS: 3,
};

export const MIDDLE_DEVICE = {
  SIZE_PX: 780,
  DEFAULT_CARDS: 8,
  ADD_CARDS: 2,
};

export const SMALL_DEVICE = {
  DEFAULT_CARDS: 5,
  ADD_CARDS: 2,
};

export const PAGES = {
  PAGE_MOVIES: '/movies',
  PAGE_SAVED_MOVIES: '/saved-movies',
  PAGE_PROFILE: '/profile',
  PAGE_SIGNIN: '/signin',
  PAGE_SIGNUP: '/signup',
  PAGE_MAIN: '/',
};

export const REQUEST_ERROR = {
  BAD_REQUEST: {
    CODE: 400,
    DESCRIPTION: 'Некорректно заполнено одно из полей',
    DESCRIPTION_FOR_TOKEN: 'Токен не передан или передан не в том формате',
  },
  CONFLICT: {
    CODE: 409,
    DESCRIPTION: 'Пользователь с указанной почтой уже существует',
  },
  SERVER_ERROR: {
    CODE: 500,
    DESCRIPTION: 'Ошибка сервера, попробуйте ещё раз чуть позже',
  },
  UNAUTHORIZATION: {
    CODE: 401,
    DESCRIPTION: 'Пользователь с таким email не найден',
    DESCRIPTION_FOR_TOKEN: 'Переданный токен некорректен',
  }
};

export const REQUEST_SUCCESS = {
  UPDATE_PROFILE: {
    DESCRIPTION: 'Данные успешно изменены',
  },
};

export const SEARCH_SERVER_ERROR_DESCR = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз';

export const MOVIES_NOT_FOUND_DESCR = 'Ничего не найдено';
