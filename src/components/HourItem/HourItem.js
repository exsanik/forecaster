import React from 'react'

import './HourItem.css'
import { iconSwitch } from '../../helpers'

const HourItem = ({ weather: weatherInfo }) => {
  const { dt_txt, weather } = weatherInfo
  const hours = dt_txt.substr(11, 5)
  const icon = iconSwitch(weather[0].icon)
  return (
    <div className="hour-item d-flex flex-column align-items-center">
      {icon}
      {hours}
    </div>
  )
}

export default HourItem
