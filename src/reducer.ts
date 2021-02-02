import { combineReducers } from 'redux'
import { gridReducer } from "./core/Grill";

const rootReducer = combineReducers({
  grill: gridReducer
})

export default rootReducer