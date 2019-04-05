import React, { Component } from 'react'
import {Text, View, ScrollView, TouchableOppacity} from 'react-native'
import { connect } from 'react-redux'

const baseURL = 'http://localhost:8080'

class Forum extends Component {
	constructor(props){
		console.log(props.navigation)
		super()
		this.state = {
			game: {
				name: '',
				id: 0
			},
			title: '',
			description: '',
			id: ''
		}
		//id: this.
		// console.log('80 take', this.props.navigation)
		this.navigation = props.navigation
	}

	// subscribeToForum(){
	// 	console.log('ting')
	// 	return ''
	// }

	loadForum = (id) => {
		return fetch(`${baseURL}/forumsg/${id}`)
		.then(r => r.json())
		.then(b => {
			console.log('return load', b)
			return this.setState({
				id: b.forum.id,
				title: b.forum.title,
				description: b.forum.description
			})
		})
		.catch(err => {
			throw err
		})
	}

	componentWillMount = (props) => {
		return this.loadForum(this.navigation.getParam('forumID', 108))
	}	

	render(){
		return (
			<View style={styles.container}>
				<View style={styles.titleContainer}>
					<Text style={styles.titleText}>
						{this.state.title}
					</Text>
				</View>
				<View style={styles.descriptionContainer}>
					<Text style={styles.descriptionText} >
						{this.state.description}
					</Text>				
				</View>
				<View>
				</View>
			</View>
			)
	}
					// <TouchableOppacity
					// 	onPress={this.subscribeToForum}
					// >
					// 	<Text> submit </Text>
					// </TouchableOppacity>
			//<postFeed />
}

const mapStateToProps = (state) => {
	console.log(state)
	return {}
}

export default connect(mapStateToProps)(Forum)

const styles = {
	container: {
		width: '100%',
		flex: 1
	},
	titleContainer: {
		flex: 1,
		maxHeight: 100,
		justifyContent: 'flex-end',
		alignItems: 'left',
		borderBottomColor: 'grey',
		borderBottomWidth: 2
	},
	titleText: {
		flex: 1,
		fontSize: 30,
		backgroundColor: 'green',
		//justifyContent: 'center',
		//width: '100%',
		//alignItems: 'baseline',
		fontWeight: 'bold'
	},
	descriptionContainer: {
		flex: 1,
	},
	descriptionText: {
		flex: 1,
	}
}