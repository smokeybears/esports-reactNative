import React, { Component } from 'react'
import {Text, View, ScrollView, TouchableOpacity} from 'react-native'

export default class GameScroll extends Component {
	constructor(props){
		super()
		this.state = {
			options: props.options,
			selected: '' // indexOfSelectedItem keeping it in two states..
		}
	}

	updateSelection = (e, id) => {
		this.setState({selected: id})
		return this.props.raiseState('game', id)
	}

	componentDidUpdate = (prevProps) => {
		if (prevProps.options != this.props.options){
			this.setState({
				options: this.props.options,
				selected: this.props.options[0].id
			})
		}
	}

	render(){
		return (
			<View style={styles.container}>
				<ScrollView
					contentContainerStyle={styles.container}
				>
					{this.state.options.map( o =>  {
						return (
							<TouchableOpacity
								style={{
									...styles.option,
									...{
										borderColor: o.id == this.state.selected ? 'blue' : 'grey'
										}
									}}
								onPress={e => {this.updateSelection(e, o.id)}}
							>
								<Text 
									style={{
										...styles.optionText,
										...{
											color: o.id == this.state.selected ? 'blue': 'grey'
										}
									}}
								>  
									{o.name} 
								</Text>
							</TouchableOpacity>
						)}
					)}
				</ScrollView>
			</View>
		)
	}
}

const styles = {
	optionText: {
		fontWeight: 'bold',
		marginTop: 4,
		marginBottom: 4
	},
	option: {
		borderColor: 'grey',
		borderWidth: 2,
		flex: 1,
		justifyContent: 'center', 
		alignItems: 'center',
		textAlign: 'center',
		verticleAlign: 'center',
		borderRadius: 10,
		margin: 4,
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'flex-start',
		maxHeight: 50
	}
}
