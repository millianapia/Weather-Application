import * as actionTypes from "./actionTypes";

export const setCurrentLocation = (location) => {
  return { type: actionTypes.SET_LOCATION, payload: location };
};

export const selectLocation = (location) => {
  return { type: actionTypes.SELECT_LOCATION, payload: location };
};

export const clearLocation = () => {
  return { type: actionTypes.CLEAR_LOCATION };
};

export const setWeatherData = (data) => {
  return { type: actionTypes.SET_WEATHER_DATA, payload: data };
};

export const clearWeatherData = () => {
  return { type: actionTypes.CLEAR_WEATHER_DATA };
};

export const setFetchingTrue = () => {
  return { type: actionTypes.FETCHING, payload: true };
};

export const setFetchingFalse = () => {
  return { type: actionTypes.DONE_FETCHING, payload: false };
};

export const setError = (error) => {
  return { type: actionTypes.SET_ERROR, payload: error };
};


const key = process.env.REACT_APP_KEY;

export const getWeatherData = (lat, lon) => {
  let api =
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=` +
    key;
  return (dispatch) => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => dispatch(setWeatherData(data)))
      .then(dispatch(setFetchingFalse))
      .catch((error) => dispatch(setError(error)));
  };
};

