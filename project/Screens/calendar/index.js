import React, {Component} from 'react'
import { connect } from 'react-redux'
import { ActivityIndicator } from 'react-native'
import MonthView from './MonthView'
import calendarActions from '../../redux/actions/calendar'
import Scoreboard from './Scoreboard'
import { View } from 'react-native'
class Calendar extends Component {
	constructor(props){
		super(props)
		this.state = {
			game: 'csgo',
			magnification: 'Month', // Month or Day
			month: props.month,
			day: null, // set from MonthView in onDaySelect
			dayMatches: null,
			matches: props.matches
		}
		this.getMonthTournaments()
	}

	getMonthTournaments = () => {
		return fetch(`http://localhost:8080/games/${this.state.game}/tournaments/${this.state.month}`)
		.then(res => res.json())
		.then((body) => {
			this.setState({
				matches: body.matches
			})
		})
		.catch(err => {
			throw err
		})
	}

	onDaySelect = (date) => {
		if (!this.state.matches[date]) {
			return this.setState({
				dayMatches: [],
				magnification: 'Day'
			});
		}

		const matchIDs = this.state.matches[date].reduce((acc, cur) => {
			return `${acc}${cur.id},`
		}, '')

		return fetch(`http://localhost:8080/games/${this.state.game}/matches?ids=${matchIDs}`)
		.then(r => r.json())
		.then(matches => {
			console.log(matches)
			return this.setState({
				dayMatches: matches.matches,
				magnification: 'Day'
			})
		})
	}
	changeGame = (game) => {
		console.log(game)
		return this.setState({
			game: game
		}, () => {this.getMonthTournaments()})
	}

	render(){
		if (this.state.magnification == 'Month'){
			if (this.state.matches){
				return (
					<MonthView 
						month={this.state.month}
						matches={this.state.matches}
						navigation={this.props.navigation}
						onDaySelect={this.onDaySelect}
						changeGame={this.changeGame}
					/>
				)
			} 
			return <ActivityIndicator />
		} else {
			return (
				<Scoreboard 
					events={this.state.dayMatches} 
					onDaySelect={this.onDaySelect}
//	to go back at some point				goToMonthView={() => {this.setState({magnification: 'Day'})}}
					/>
			) 
		}
	}
}


const mapStateToProps = (state) => {
	return { month: state.calendar.month }
}

export default connect(mapStateToProps)(Calendar)