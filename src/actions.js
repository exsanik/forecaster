export const REQUEST_WEATHER_BY_ID = 'REQUEST_WEATHER_BY_ID'
export const RECEIVE_WEATHER_BY_ID = 'RECEIVE_WEATHER_BY_ID'
export const ERROR_WEATHER_BY_ID = 'ERROR_WEATHER_BY_ID'

export const REQUEST_FORECAST_BY_ID = 'REQUEST_FORECAST_BY_ID'
export const RECEIVE_FORECAST_BY_ID = 'RECEIVE_FORECAST_BY_ID'
export const ERROR_FORECAST_BY_ID = 'ERROR_FORECAST_BY_ID'

export const DELETE_CITY_BY_ID = 'DELETE_CITY_BY_ID'

export const requestWeatherByID = id => {
  return {
    type: REQUEST_WEATHER_BY_ID,
    payload: id,
  }
}
export const receiveWeatherByID = data => {
  return {
    type: RECEIVE_WEATHER_BY_ID,
    payload: data,
  }
}

export const errorWeatherByID = (id, status = 'error') => {
  const fail = true
  return {
    type: ERROR_WEATHER_BY_ID,
    payload: { id, status, fail },
  }
}

export const requestForecastByID = id => {
  return {
    type: REQUEST_FORECAST_BY_ID,
    payload: id,
  }
}

export const receiveForecastByID = data => {
  return {
    type: RECEIVE_FORECAST_BY_ID,
    payload: data,
  }
}

export const errorForecastByID = (id, status = 'error') => {
  const fail = true
  return {
    type: ERROR_FORECAST_BY_ID,
    payload: { id, status, fail },
  }
}

export const deleteCityByID = id => {
  return {
    type: DELETE_CITY_BY_ID,
    payload: id,
  }
}
