import {REQUEST_FORECAST_BY_ID,
        RECEIVE_FORECAST_BY_ID,
        ERROR_FORECAST_BY_ID,
        RECEIVE_WEATHER_BY_ID,
        ERROR_WEATHER_BY_ID,
        REQUEST_WEATHER_BY_ID,
        DELETE_CITY_BY_ID} from './actions';



function changeArray(state, newCity, id, field) {
    const ind = state[field].findIndex((el) => el.id === id);
    const array = state[field];
    if(ind !== -1) {
        return {
            ...state,
            [field]: [ ...array.slice(0, ind),
                    newCity,
                    ...array.slice(ind+1) ]
        };
    } else {
        return {
            ...state,
            [field]: [ ...array, newCity]
        };
    }
}

function deleteFromArray(array, id) {
    let ind = array.findIndex((el) => el.id === id);
    if(ind !== -1) {
        return [...array.slice(0, ind), ...array.slice(ind+1)];
    } else {
        return array;
    }
}

function reducer(state, action) {
    const {type, payload} = action;
    const {cityWeather, cityForecast} = state;
    let newCity = {};
    switch(type) {
        case REQUEST_WEATHER_BY_ID:
            newCity = {
                id: payload,
                status: 'Pending'
            }
            return changeArray(state, newCity, payload, 'cityWeather');
        case RECEIVE_WEATHER_BY_ID:
            newCity = {
                id: payload.id,
                ...payload
            }
            return changeArray(state, newCity, payload.id, 'cityWeather');
        case ERROR_WEATHER_BY_ID:
                newCity = {
                    id: payload.id,
                    status: payload.status ? payload.status : 'error',
                    fail: payload.fail
                }
                return changeArray(state, newCity, payload.id, 'cityWeather');
        case REQUEST_FORECAST_BY_ID:
            newCity = {
                id: payload,
                status: 'Pending'
            }
            return changeArray(state, newCity, payload, 'cityForecast');
        case RECEIVE_FORECAST_BY_ID:
                newCity = {
                    ...payload,
                    id: payload.city.id
                }
                return changeArray(state, newCity, payload.city.id, 'cityForecast');
        case ERROR_FORECAST_BY_ID:
                newCity = {
                    id: payload.id,
                    status: payload.status ? payload.status : 'error',
                    fail: payload.fail
                }
                return changeArray(state, newCity, payload.id, 'cityForecast');
        case DELETE_CITY_BY_ID:
            return {
                ...state, 
                cityWeather: deleteFromArray(cityWeather, payload),
                cityForecast: deleteFromArray(cityForecast, payload)
            }
        default:
            return state;
    }
}

export default reducer;