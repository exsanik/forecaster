import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getCityForecastByID } from '../../services/OpenWeatherService'

import ForecastItem from '../ForecastItem/ForecastItem'
import ForecastLoadingItems from '../ForecastLoadingItems/ForecastLoadingItems'

import './ForecastList.css'

const ForecastList = ({ id, cityForecast, getCityForecast }) => {
  const [forecastInd, setForecastInd] = useState(-1)
  useEffect(() => {
    getCityForecast(id)
  }, [getCityForecast, id])

  useEffect(() => {
    setForecastInd(cityForecast.findIndex(el => el.id === id))
  }, [cityForecast, id])

  if (forecastInd === -1) {
    return <ForecastLoadingItems />
  } else {
    if (
      cityForecast[forecastInd].status === 'Pending' ||
      cityForecast[forecastInd].fail
    ) {
      return <ForecastLoadingItems />
    } else {
      let resultInfo = []
      let counter = -1
      let currDay = '00'
      for (const el of cityForecast[forecastInd].list) {
        const day = el.dt_txt.substr(8, 2)
        if (day !== currDay) {
          currDay = day
          ++counter
          resultInfo.push([])
        }
        resultInfo[counter].push(el)
      }
      const forecastItems = resultInfo.map((info, idx) => {
        return <ForecastItem key={idx} info={info} />
      })
      return (
        <React.Fragment>
          <div className="d-flex justify-content-center">
            <h3 className="city-forecast-name">
              {cityForecast[forecastInd].city.name},{' '}
              {cityForecast[forecastInd].city.country}
            </h3>
          </div>
          <div className="d-flex flex-column">{forecastItems}</div>
        </React.Fragment>
      )
    }
  }
}

const mapStateToProps = ({ cityForecast }) => {
  return {
    cityForecast,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCityForecast: getCityForecastByID,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(ForecastList)
