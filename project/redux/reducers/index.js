import auth from './auth'
import calendar from './calendar'
import { combineReducers } from 'redux';

export default combineReducers({
	//...auth,
	// namespacing is all fucked up
	// redux sucks plain and simple
	calendar
})