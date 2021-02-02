import { combineReducers } from 'redux'
import { gridReducer } from "./core/Grill";

// import todosReducer from './features/todos/todosSlice'
// import filtersReducer from './features/filters/filtersSlice'

const rootReducer = combineReducers({
  grill: gridReducer
})

export default rootReducer