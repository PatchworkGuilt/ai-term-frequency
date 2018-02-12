import { combineReducers } from 'redux'
import documents from './Documents'
import search from './Search'

export default combineReducers({
  documents,
  search
})