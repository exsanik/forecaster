import React, { useEffect, useState } from 'react'
import { useRouteMatch, Redirect } from 'react-router-dom'
import cityList from '../../citylist2.json'

import ForecastList from '../ForecastList/ForecastList'
import ForecastLoadingItems from '../ForecastLoadingItems/ForecastLoadingItems'

const ForecastPage = () => {
  let [renderWeather, setRenderWeather] = useState(-2)
  const match = useRouteMatch({ path: '/forecast:id' })

  const id = match.params.id - 0
  useEffect(() => {
    setRenderWeather(cityList.findIndex(el => el.id === id))
  }, [id])

  if (renderWeather === -2) {
    return (
      <ForecastList id={id}>
        <ForecastLoadingItems />
      </ForecastList>
    )
  } else if (renderWeather === -1) {
    return <Redirect to="/" />
  } else {
    return <ForecastList id={id} />
  }
}

export default ForecastPage
