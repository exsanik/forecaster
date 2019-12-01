import reducer from './reducer'
import { compose, createStore, applyMiddleware } from 'redux'
import persistState from 'redux-localstorage'
import thunk from 'redux-thunk'

const enhancer = compose(applyMiddleware(thunk), persistState())

const initialState = {
  cityWeather: [],
  cityForecast: [],
}

const store = createStore(reducer, initialState, enhancer)

export default store
