import isLoggedInReducer from './isLoggedIn.js'
import graphDataReducer from './graphData'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    isLoggedInReducer : isLoggedInReducer,
    graphDataReducer : graphDataReducer
})

export default allReducers;