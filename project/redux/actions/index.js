import { AsyncStorage } from 'react-native'
import { NavigationActions } from 'react-navigation'
import {
	GET_PERSISTED_DATA,
	REQUEST_IN_PROGRESS,
	REQUEST_COMPLETE,
	REQUEST_ERROR	,
	LOAD_USER,
	LOAD_SESSION 
} from '../types'

export const requestInProcess = () => { type: REQUEST_IN_PROGRESS }
export const requestComplete = () => { type: REQUEST_COMPLETE }
export const requestError = (error) => {
	console.log('\n::::::::', error)
	return {type: REQUEST_ERROR, error}
}

export const loadSession = ({user, session}) => {
	return {
		type: LOAD_USER,
		user,
		session
	}
}

export const attemptLogin = ({username, password, navigation}) => dispatch => {
	dispatch(requestInProcess)
	return fetch('http://localhost:8080/user/login', {
		method: 'post',
		mode: 'cors',
		body: JSON.stringify({
			username,
			password
		}),
		headers: {
			'content-type': 'application/json'
		}
	})
	.then((res) => res.json())
	.then((body) => {
		if (body.session){
			dispatch(requestComplete)
			dispatch(NavigationActions.navigate({routeName: 'Settings'}));
			// TODO: dispatch to store to async here
			return {
				type: LOAD_SESSION,
				session: body.session,
				user: body.user
			}
		} else {
			return dispatch(requestError(body.error))
		}
	})
	.catch(err => {
	 throw err;
	 // handle later
	})
}

export const getPersistedData = () => dispatch => {
	return AsyncStorage.getAllKeys()
	.then(keys => {
		return {
			type: GET_PERSISTED_DATA,
			persistedData: {...keys}
		} 
	})
	.catch((err) => {
		throw err;
	})
}

