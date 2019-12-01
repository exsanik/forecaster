import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteCityByID } from '../../actions'
import { getCityWeatherByID } from '../../services/OpenWeatherService'

import './WeatherLoadingItem.css'

const WeatherLoadingItem = ({ text, id, updateCity, deleteCity }) => {
  return (
    <div className="d-flex weather-loading-item">
      <h3>{text}</h3>
      <div className="ml-auto control d-flex flex-column">
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

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      deleteCity: deleteCityByID,
      updateCity: getCityWeatherByID,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(WeatherLoadingItem)
