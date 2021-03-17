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

export const setCity = (cityData) => {
  return { type: actionTypes.SET_CITY, payload: cityData };
};

const key = process.env.REACT_APP_KEY

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

const googleAPI = process.env.REACT_APP_GOOGLE;

export const getCityData = (lat, lon) => {
  let api =
    "https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=" +
    googleAPI;
  return (dispatch) => {
    fetch(api)
      .then((response) => {
        response.json();
        console.log(response)
      })
      .then((data) => dispatch(setCity(data)))
      .catch((error) => dispatch(setError(error)));
  };
};
