import React from 'react'

import './TempItem.css'

const TempItem = ({ diff, weather }) => {
  const { main } = weather
  const customColor1 = `hsl(${150 - Math.floor(main.temp) * 5}, 66%, 66%)`
  const customColor2 = `hsl(${170 - Math.floor(main.temp) * 5}, 66%, 66%)`
  const customStyle = {
    marginTop: -diff * 5 + 'px',
    background: `linear-gradient(${customColor1}, ${customColor2})`,
  }
  const sign = main.temp > 0 ? '+' : null
  return (
    <div
      className="temp-item-wrapper d-flex flex-column"
      style={customStyle /*``*/}
    >
      <div className="text-center temp-item">
        {sign}
        {Math.floor(main.temp)}
      </div>
    </div>
  )
}

export default TempItem
