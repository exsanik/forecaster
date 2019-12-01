import React from 'react'

import WeatherItemList from '../WeatherItemList/WeatherItemList'
import AddCityItem from '../AddCityItem/AddCityItem'

const WeatherPage = () => {
  return (
    <React.Fragment>
      <WeatherItemList />
      <AddCityItem />
    </React.Fragment>
  )
}

export default WeatherPage
