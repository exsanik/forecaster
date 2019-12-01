import React from 'react'
import { connect } from 'react-redux'

import WeatherItem from '../WeatherItem/WeatherItem'

import './WeatherItemList.css'

const WeatherItemList = ({ cityWeather }) => {
  return cityWeather.map(el => <WeatherItem info={el} key={el.id} />)
}

const mapStateToProps = ({ cityWeather }) => {
  return { cityWeather }
}

export default connect(mapStateToProps)(WeatherItemList)
