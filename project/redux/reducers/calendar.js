import M from 'moment'
import _ from 'lodash'
import { NavigationActions } from 'react-navigation'
import {
	UPDATE_MONTH_MATCHES
} from '../types'


/// basically everything trickles down from the month state
/// there is no update current week because it's just automatically calulated 
/// from the Month / cDay
/// cMonth = [] containing all days in month
/// cWeek = [] a chunk of current month (shallow copy) based on the current day
/// cDay = {date:planWork:assignments}


const getMonthGames = (state = {}, action) => {
	switch(action.type){
		case UPDATE_MONTH_MATCHES:
			return {
				...state,
				matches: action.payload.matches,
			}
		default:
			return {
				...state,
				month: M().month()	
			}
	}
}

export default getMonthGames