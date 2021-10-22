import { createStore } from 'redux'
import { mainReducer } from '../reducers'

export const initialState = {
  count: 0
}

const configureStore = createStore(
  mainReducer,
  initialState,
  // the third argument activates middleware, plugins or extensions etc
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)