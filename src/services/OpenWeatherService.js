import { apiKey } from './config'

import {
  requestWeatherByID,
  receiveWeatherByID,
  errorWeatherByID,
  requestForecastByID,
  receiveForecastByID,
  errorForecastByID,
} from '../actions'

function getResource(url, recieve, error) {
  return dispatch => {
    const _apiUrl = 'https://api.openweathermap.org/data/2.5/'
    const _unitsType = 'metric'
    const request = `${_apiUrl}${url}&appid=${apiKey}&units=${_unitsType}`
    fetch(request)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(res => {
        dispatch(recieve(res))
        return res
      })
      .catch(err => {
        const id = url.match(/[0-9]+$/)[0] - 0
        dispatch(error(id, err.message))
      })
  }
}

function getCityWeatherByID(id) {
  return dispatch => {
    dispatch(requestWeatherByID(id))
    return getResource(
      `weather?id=${id}`,
      receiveWeatherByID,
      errorWeatherByID
    )(dispatch)
  }
}

function getCityForecastByID(id) {
  return dispatch => {
    dispatch(requestForecastByID(id))
    return getResource(
      `forecast?id=${id}`,
      receiveForecastByID,
      errorForecastByID
    )(dispatch)
  }
}

export { getCityForecastByID, getCityWeatherByID }
