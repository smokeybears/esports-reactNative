import { AsyncStorage } from 'react-native'

import {
	GET_PERSISTED_DATA,
	REQUEST_IN_PROGRESS,
	REQUEST_COMPLETE,
	REQUEST_ERROR	,
	LOAD_USER,
	LOAD_SESSION,
	CREATE_USER,
	LOGOUT
} from '../types'

export const requestInProcess = () => { type: REQUEST_IN_PROGRESS }
export const requestComplete = () => { type: REQUEST_COMPLETE }

export const requestError = (error) => {
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
			navigation.navigate('Settings');
			console.log(body)
			// TODO: dispatch to store to async here
			dispatch(setUserState({
				session: body.session,
				user: body.user
			}))
			// return {
			// 	type: LOAD_SESSION,
			// 	session: body.session,
			// 	user: body.user
			// }
		} else {
			return dispatch(requestError(body.error))
		}
	})
	.catch(err => {
	 throw err;
	 // handle later
	})
}

const setUserState = ({session, user}) => {
	return {
		type: LOAD_SESSION,
		session,
		user
	}
}

export const logout = ({navigation}) => dispatch => {
	return AsyncStorage.removeItem('user')
	.then(() => AsyncStorage.removeItem('session'))
	.then(() => {
		console.log('brbrbrbrbrbr')
		navigation.navigate('SignIn')
		return {
			type: LOGOUT
		}
	})

}

export const createUser = ({username, email, password, navigation}) => dispatch => {
	return fetch('http://localhost:8080/user', {
		method: 'post',
		mode: 'cors',
		body: JSON.stringify({
			username,
			password,
			email 
		}),
		headers: {
			'content-type': 'application/json'
		}
	})
	.then(res => {
		navigation.navigate('Settings')
		return {
			type: CREATE_USER,
			...res
		}
	})
	.catch(err => {
		throw err
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

