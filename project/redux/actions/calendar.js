import {
	UPDATE_MONTH_MATCHES
} from '../types'

const getMonthTournaments = ({month, game}) => (distpatch) => {
	return fetch(`http://localhost:8080/games/${game}/tournaments/${month}`)
	.then(res => res.json())
	.then((body) => {
		distpatch(updateMonthTournaments(body.matches))
		return {
			type: UPDATE_MONTH_MATCHES,
			payload: {
				matches: body.matches
			}	
		}
	})
	.catch(err => {
		throw err
	})
}

const updateMonthTournaments = (matches) => {
	return {
		type: UPDATE_MONTH_MATCHES,
		payload: {
			matches: matches
		}	
	}
}
export default {
	getMonthTournaments,
	updateMonthTournaments
}

