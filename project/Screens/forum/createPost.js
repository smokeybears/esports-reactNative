import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import {Input, Card, CardSection, Button} from '../../components/common'
import { connect } from 'react-redux'

import GameScroll from '../../components/gameScroll'

const baseURL = 'http://localhost:8080'
export default class createForum extends Component {
	constructor(props){
		super()
		this.state = {
			title: '',
			body: '',
			forum_id: [],
			game: ''
		}
		this.navigation = props.navigation
	}

	attemptCreate = () => {
		return fetch(`${baseURL}/posts`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title: this.state.title, 
				body: this.state.description, 
				game: this.state.game
			})
		})
		.then(p => p.json())
		.then(b => {
			if (b.forum) {
				return this.navigation.navigate("Forum", {
					forumID: b.forum.id
				})
			} else {                                                             
				return console.log('no Forum Created.. got:', b)
			}

		})
		.catch(err => {
			throw err
		})
	}

	updateState = (field, val) => {
		return this.setState({[field]: val})
	}

	getGames = () => {
		return fetch(`${baseURL}/games`)
		.then(r => r.json())
		.then(b => {
			return this.setState({
				games: b.games,
				game: b.games[0].id
			})
		})
	}

	componentWillMount = (props) => {
		return this.getGames()
	}

	render() {
		return (
			<View style={styles.containerStyle}>
				<View style={styles.titleInput}>
					<Input
						placeholder="Title of Forum"
						value={this.state.title}
						onChangeText={(e) => this.updateState('title', e)}
						inputStyle={{fontSize: 25}}
					/>
				</View>
				<View style={styles.desStyle}>
					<Input
						placeholder="Short Description of Forum"
						value={this.state.description}
						onChangeText={(e) => this.updateState('description', e)}
						textAlignVertical={'top'}
						multiline={true}
						blurOnSubmit={false}
					/>
				</View>
				<GameScroll
					raiseState={this.updateState}
					options={this.state.games}
				/>
				<TouchableOpacity 
					style={styles.sumbit}
					onPress={() => {this.attemptCreate()}}
					>
					<Text style={styles.submitText}>Create Forum</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = {
	submitText: {
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold'
	},
	sumbit: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'cetner',
		backgroundColor: '#00BFFF',
		minWidth: '100%',
		textAlign: 'center'
	},
	titleInput: {
		width: '100%',
		maxHeight: 100,
		borderBottomWidth: 2,
		alignSelf: 'flex-end',
		flex: 1,
		borderBottomColor: 'grey',
	},
	desStyle: {
		width: '100%',
		minHeight: 400,
		height: 'auto',
		borderBottomWidth: 2,
		flex: 1,
		alignSelf: 'flex-start',
		borderBottomColor: 'black',
	},
	containerStyle: {
		flex: 2,
		justifyContent: 'center',
		width: '100%',
		alignItems: 'center'
	}
}

//export default connect(mapStateToProps)(ForumCreate);