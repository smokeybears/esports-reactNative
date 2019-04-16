import {
	CREATE_FORUM
} from '../types'

const createForum = ({title, description, game}) => {
	return fetch('http://localhost:8080/forums', {
		method: 'POST',
		mode: 'CORS',
		body: JSON.stringify({
			title,
			description,
			game
		})
	})
	.then((res) => res.json)
	.then((res) => {
		return {
			type: CREATE_FORUM,
			title,
			description,
			game
		}		
	})
}