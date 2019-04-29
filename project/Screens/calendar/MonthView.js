import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import M from 'moment'
import _ from 'lodash'
import actions from '../../redux/actions/calendar'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import {
  Button 
} from '../../components/common'

class MonthView extends Component {
	constructor(props){
		super(props)
		this.state = {
			month: props.month
		}
	}
	// This is needed to find the days in preceding and following months 
	// to have even 6X7 week rows
	getCalendarDays(){
		// only current year right now
		let fd = M().month(this.state.month).startOf('month')
		let startDate = M(fd).startOf('month').startOf('week') 
		let endDate = M(fd).endOf('month').endOf('week')
		const dayComponents = []
		for (let d = M(startDate); d <= endDate; d.add(1, 'd')){
			if (M(fd).startOf('month') <= d && d <= M(fd).endOf('month')){
				dayComponents.push(
					inMonthDay(
						d.date(),
						this.props.matches[d.date()] || [],
						this.props.onDaySelect
					)
				) 
			} else {
				dayComponents.push(outOfMonthDay(d))
			}
		}
		return dayComponents
	}


	render(){
		return (
			<View style={styles.screenContainer}>
				<View style={styles.selectGameStyles}>
        	<Button onPress={() => this.props.changeGame('csgo')}>
        		CSGO
        	</Button>
          <Button onPress={() => this.props.changeGame('dota2')}>
          	DOTA2
          </Button>
          <Button onPress={() => this.props.changeGame('lol')}>
          	LOL
          </Button>
        </View>
				<View style={styles.monthContainer}>
					{_.chunk(this.getCalendarDays(), 7).map((week, idx) => {
						return (
							<View 
								style={styles.weekStyle}
								key={`week-${idx}-${week[0].date}`}
								>
								{week}
							</View>
						)
					})}

				</View>
			</View>
		)
	}
}

const	outOfMonthDay = (date) => {
	return (
	 	<View key={date.toString()} style={styles.dayContainer}>
			<Text style={styles.nonMonthDay}>{date.date()}</Text>
		</View>
	)
}

const inMonthDay = (day, dayMatches, onPress) => {
 	return (
		<TouchableOpacity 
			onPress={() => {onPress(day)}}
			style={styles.dayContainer}
			key={day}
			> 		
		 	<View style={styles.workPrevContainer}>
		 		<View 
		 			style={{
		 				...styles.workPrevItem,
		 				backgroundColor: 'rgba(135, 206, 250, 0.7)'
		 			}}>
		 			<Text>{dayMatches.length}</Text>
		 		</View>
		 		<View 
		 			style={{
		 				...styles.workPrevItem, 
		 				backgroundColor: 'white' // 'rgba(250, 128, 114, 0.7)'
		 			}}>
		 			<Text></Text>
		 		</View>
		 	</View>
			<Text style={styles.monthDay}>{day}</Text>
		</TouchableOpacity>
	)
}




const styles = {
	selectGameStyles: {
		maxHeight: '4%',
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'nowrap'
	},
	dayContainer: {
		margin: '2%',
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		flexWrap: 'nowrap'
	},
	workPrevContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		// alignItems: 'center'
	},
	workPrevItem: {
		borderRadius: 50,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden'
	},
	navButton: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	nonMonthDay: {
		fontSize: 18
	},
	monthDay: {
		justifyContent: 'center',
		alignItems: 'center',
		fontWeight: 'bold',
		fontSize: 18
	},
	navContainer: {
		position: 'absolute',
		top: 30,
		left: 0,
		right: 0,
		flexDirection: 'row',
		height: '7%',
		margin: '1%'
	},
	weekStyle: {
		flexDirection: 'row'
	},
	changeMonthText: {
		fontSize: 25,
		fontWeight: 'bold'
	},
	screenContainer: {
		flex: 1,
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	monthContainer: {
		// borderStyle: 'solid',
		// borderWidth: 2,
		// borderColor: 'rgba(100, 100, 100, 0.5)',
		alignSelf: 'center',
		width: '90%',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 'auto'
	}
}


// Later
	// navButtons(){
	// 	const prevMonth = M(this.props.cMonth[0].date).subtract(1, 'M')
	// 	const nextMonth = M(this.props.cMonth[0].date).add(1, 'M')
	// 	return (
	// 		<View style={styles.navContainer}>
	// 			<TouchableOpacity
	// 				onPress={() => this.props.updateCurrentMonth(prevMonth.month())}
	// 				style={styles.navButton}
	// 			>
	// 				<Text style={styles.changeMonthText}> {`<`} </Text>
	// 			</TouchableOpacity>
	// 			<View style={styles.monthName}>
	// 				<Text style={{fontSize: 30, fontWeight: 'bold'}}>
	// 					{M(this.props.cMonth[0].date).format('MMMM')}
	// 				</Text>
	// 			</View>
	// 			<TouchableOpacity
	// 				onPress={() => this.props.updateCurrentMonth(nextMonth.month())}
	// 				style={styles.navButton}
	// 			>
	// 				<Text style={styles.changeMonthText}> {`>`} </Text>
	// 			</TouchableOpacity>
	// 		</View>
	// 	)
	// }

export default MonthView

