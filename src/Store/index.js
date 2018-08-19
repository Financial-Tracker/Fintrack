import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import plaidContainer from './plaidContainer'
import userContainer from './userContainer'
import BillReducer from './BillReducer'
import GoalReducer from './GoalReducer'
const reducer = combineReducers({
  plaidContainer,
  userContainer,
  bills : BillReducer,
  goals : GoalReducer
  
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
