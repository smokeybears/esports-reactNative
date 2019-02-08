import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'
import {
	GET_PERSISTED_DATA,
	REQUEST_IN_PROGRESS,
	REQUEST_COMPLETE,
	REQUEST_ERROR,
	LOAD_SESSION,
	NAV_TO_STATE,
	CREATE_USER,
	LOGOUT
} from '../types'


const getPersistedData = (state = {}, action) => {
	switch(action.type){
		case GET_PERSISTED_DATA:
			return {
				...state,
				...action.perisistedData
			}
		default:
			return state
	}
}

//const requestComplete

const loadSession = (state = {}, action) => {
	switch(action.type){
		case LOAD_SESSION:
			return {
				...state,
				user: action.user,
				session: action.session
				}
			default: 
				return state
	}
}

const logout = (state = {}, action) => {
	switch(action.type){
		case LOGOUT:
		// not sure if clearing whole state is allowed
			return {
				...state,
				session: null,
				user: null
			}
		default:
			return state
	}
}

const createUser = (state = {}, action) => {
	switch(action.type){
		case CREATE_USER: 
			return {
				user: action.user,
				session: action.session
			}
	}
};

export default {
	getPersistedData,
	loadSession,
	logout
	};