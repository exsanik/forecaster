import React, { useState, useRef, useEffect, useCallback } from 'react'
import { getCityWeatherByID } from '../../services/OpenWeatherService'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import './AddCityItem.css'

import autoComplete from '@tarekraafat/autocomplete.js'
import cityList from '../../citylist2.json'

const AddCityItem = ({ getCityWeather }) => {
  const currentWidth = window.innerWidth
  new autoComplete({
    data: {
      src: cityList,
      key: ['name'],
    },
    sort: (a, b) => {
      if (a.match < b.match) return -1
      if (a.match > b.match) return 1
      return 0
    },
    highlight: true,
    searchEngine: 'loose',
    maxResults: currentWidth > 600 ? 6 : 4,
  })

  const defaultEvent = { detail: { results: [] } }
  const [event, setEvent] = useState(defaultEvent)

  const handlerAutoComplete = useCallback(event => setEvent(event), [setEvent])
  useEventListener('autoComplete', handlerAutoComplete)

  const suggestionList = event.detail.results.map(e => {
    let text = e.match
    const ind1 = text.lastIndexOf('>')
    text = text.substr(ind1 + 1, text.length - ind1)
    const ind2 = e.value.name.lastIndexOf(text)
    return (
      <li key={e.value.id} onClick={() => getCityWeather(e.value.id)}>
        <span className="autoCompleteHighlighted">
          {e.value.name.substr(0, ind2)}
        </span>
        {text}
      </li>
    )
  })

  const handlerInput = event => {
    if (event.target.value === '') {
      setEvent(defaultEvent)
    }
  }
  return (
    <div className="weather-item add-city-wrapper d-flex align-items-center flex-column">
      <div className="city-input-wrapper mt-auto">
        <p>Add new city</p>
        <input
          id="autoComplete"
          name="city-input"
          autoComplete="off"
          placeholder="Input city name"
          onChange={handlerInput}
        />
      </div>
      <div className="resultWrapper mb-auto">
        <ul className="resultList">{suggestionList}</ul>
      </div>
    </div>
  )
}

function useEventListener(eventName, handler, element = window) {
  const savedHandler = useRef()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    const eventListener = event => savedHandler.current(event)
    element.addEventListener(eventName, eventListener)

    return () => element.removeEventListener(eventName, eventListener)
  }, [eventName, element])
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCityWeather: getCityWeatherByID,
    },
    dispatch
  )

export default connect(null, mapDispatchToProps)(AddCityItem)
