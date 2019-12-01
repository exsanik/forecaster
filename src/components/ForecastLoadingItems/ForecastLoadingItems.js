import React from 'react'

import './ForecastLoadingItems.css'

const ForecastLoadingItem = () => {
  const forecastLoadingItems = []
  for (let i = 0; i < 5; ++i) {
    forecastLoadingItems.push(
      <div
        key={i + 'a'}
        className="mx-auto forecast-block-wrapper forecast-loading-block-wrapper"
      >
        <div key={i + 'b'} className="d-flex flex-row justify-content-around">
          <div key={i + 'c'} className="additional-info "></div>
          <div className="day-forecast-wrapper d-flex flex-row justify-content-center"></div>
        </div>
      </div>
    )
  }
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <h3
          className="city-forecast-name city-loading-name"
          style={{ color: 'black' }}
        >
          &#8195;&#8195;&#8195;&#8195;&#8195;&#8195;&#8195;
        </h3>
      </div>
      <div className="d-flex flex-column">{forecastLoadingItems}</div>
    </React.Fragment>
  )
}

export default ForecastLoadingItem
