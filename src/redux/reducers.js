import * as actionTypes from "./actionTypes"
import { combineReducers } from "redux"


let initialState = {
    fetching: false,
    location: null,
    weather: null,
    selectedLocation:{
        city: null,
        country: null,
    },
    error: null,
    city: null,
}

const currentLocationReducer = (state = initialState.location, action) => {
    switch(action.type) {
        case actionTypes.SET_LOCATION:
            return action.payload
        default:
            return state
    }
}

const selectedLocationReducer = (state = initialState.selectedLocation, action) => {
    switch(action.type) {
        case actionTypes.SELECT_LOCATION:
            return action.payload
        case actionTypes.CLEAR_LOCATION:
            return initialState.selectedLocation
        default:
            return state
    }
}

const weatherReducer = (state = initialState.weather, action) => {
    switch(action.type) {
        case actionTypes.SET_WEATHER_DATA:
            return action.payload
        case actionTypes.CLEAR_WEATHER_DATA:
            return initialState.weather
        default:
            return state
    }
}

const fetchingReducer = (state = initialState.fetching, action) => {
    switch(action.type) {
        case actionTypes.FETCHING:
            return action.payload
        case actionTypes.DONE_FETCHING:
            return action.payload
        default:
            return state
    }
}

const setCityReducer = (state = initialState.fetching, action) =>{
    switch(action.type){
    case actionTypes.SET_CITY:
        return action.payload
    default: return state}
}


const rootReducer = combineReducers({
    location: currentLocationReducer,
    weather: weatherReducer,
    selectedLocation: selectedLocationReducer,
    fetching: fetchingReducer,
    setCity: setCityReducer,
})

export default rootReducer

