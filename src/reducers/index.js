import isLoggedInReducer from './isLoggedIn.js'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    isLoggedInReducer : isLoggedInReducer
})

export default allReducers;