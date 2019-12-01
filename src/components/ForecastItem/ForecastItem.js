import React, { useState, useEffect } from 'react'

import TempItem from '../TempItem/TempItem'
import HourItem from '../HourItem/HourItem'

import './ForecastItem.css'

const ForecastItem = ({ info }) => {
  const [avgItemTemp, setAvgItemTemp] = useState(0)
  const [avgItemHum, setAvgItemHum] = useState(0)
  const [avgItemWind, setAvgItemWind] = useState(0)
  useEffect(() => {
    setAvgItemTemp(
      Math.floor(
        info.reduce((a, el) => a + Math.floor(el.main.temp), 0) / info.length
      )
    )
    setAvgItemHum(
      Math.floor(
        info.reduce((a, el) => a + Math.floor(el.main.humidity), 0) /
          info.length
      )
    )
    setAvgItemWind(
      Math.floor(
        info.reduce((a, el) => a + Math.floor(el.wind.speed), 0) / info.length
      )
    )
  }, [info])
  const day = info[0].dt_txt.substr(8, 2) - 0
  const dayStr = info[0].dt_txt.substr(8, 2)
  const month = info[0].dt_txt.substr(5, 2) - 0
  const year = info[0].dt_txt.substr(0, 4) - 0
  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const date = new Date(year, month - 1, day)
  const weekDay = weekDays[date.getDay()]
  return (
    <div className="mx-auto forecast-block-wrapper">
      <div className="d-flex flex-row justify-content-around">
        <div className="additional-info ">
          <h4>
            {weekDay},{' '}
            <span>
              {dayStr}.{month}
            </span>
          </h4>
          <div className="humidity">
            <i className="wi wi-humidity" /> {avgItemHum}
          </div>
          <div className="wind">
            <i className="wi wi-strong-wind" /> <span>{avgItemWind}</span> m/s
          </div>
        </div>
        <div className="day-forecast-wrapper d-flex flex-row justify-content-center">
          {info.map(el => {
            return (
              <div key={el.dt + 'thw'} className="d-flex flex-column ">
                <div key={el.dt + 'tw'} className="temp-items-wrapper">
                  <TempItem
                    key={el.dt + 't'}
                    weather={el}
                    diff={Math.floor(el.main.temp) - avgItemTemp}
                  />
                </div>
                <div key={el.dt + 'hw'} className="hour-items-wrapper">
                  <HourItem key={el.dt + 'h'} weather={el} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ForecastItem
