import { combineReducers } from 'redux'
import { NavigationActions } from 'react-navigation'
import {
	GET_PERSISTED_DATA,
	REQUEST_IN_PROGRESS,
	REQUEST_COMPLETE,
	REQUEST_ERROR,
	LOAD_SESSION
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
			console.log('sessionLoad', action)
			return {
				...state,
				user: { ...action.user },
				session: action.session
				}
			default: 
				return state
	}
}

export default {
	getPersistedData,
	loadSession
	};