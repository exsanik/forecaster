import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteCityByID } from '../../actions'
import { getCityWeatherByID } from '../../services/OpenWeatherService'

import WeatherLoadingItem from '../WeatherLoadingItem/WeatherLoadingItem'
import { iconSwitch } from '../../helpers'

import './WeatherItem.css'

const WeatherItem = ({ info, updateCity, deleteCity }) => {
  const { weather, main, wind, id } = info
  useEffect(() => {
    updateCity(id)
  }, [id, updateCity])

  if (info.status === 'Pending') {
    return <WeatherLoadingItem text="Loading..." id={info.id} />
  } else if (info.fail) {
    return (
      <WeatherLoadingItem
        text="Faild to load weather. Try again. :("
        id={info.id}
      />
    )
  } else {
    const description =
      weather[0].description[0].toUpperCase() + weather[0].description.slice(1)
    const sign = main.temp_max > 0 ? '+' : null
    const icon = iconSwitch(weather[0].icon)
    return (
      <div className="weather-item d-flex">
        <div className="city-info d-flex flex-column">
          <h3>
            {info.name}, {info.sys.country} {icon}
          </h3>
          <div className="detail-info">{description}</div>
          <div className="mt-auto">
            <Link to={`./forecast${id}`}>
              <button className="forecast-button">Check forecast</button>
            </Link>
          </div>
        </div>

        <div className="params d-flex align-items-start flex-column">
          <div className="temperature">
            {sign}
            {Math.floor(main.temp_max)}
            <i className="wi wi-celsius" />
          </div>
          <div className="humidity">
            <i className="wi wi-humidity" /> {main.humidity}
          </div>
          <div className="wind">
            <i className="wi wi-strong-wind" /> <span>{wind.speed}</span> m/s
          </div>
        </div>
        <div className="control d-flex align-items-end flex-column">
          <div className="refresh">
            <i className="wi wi-refresh" onClick={() => updateCity(id)}></i>
          </div>
          <div className="delete mt-auto">
            <i className="far fa-trash-alt" onClick={() => deleteCity(id)}></i>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      deleteCity: deleteCityByID,
      updateCity: getCityWeatherByID,
    },
    dispatch
  )

export default connect(null, mapDispatchToProps)(WeatherItem)
