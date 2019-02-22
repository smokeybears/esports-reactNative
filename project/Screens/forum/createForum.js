import React, { Component } from 'react'
import {View, Text} from 'react-native'
import {Input, Card, CardSection} from '../../components/common'

class ForumCreate extends Component {
	constructor(props){
		super(props)
		this.state = {
			title: null,
			description: null,
			game: null,
			banner_image: null
		}
	}

	onChangeText = (e) => {
		console.log('were doing it!!')
		console.log(e)
	}

	render(){
		return (
			<View style={containerStyle}>
				<Card>
					<CardSection>
						<Input
							placeholder="Cats in Dota"
							label="Name"
							value={this.state.title}
							onChangeText={this.onChangeText}
						/>
					</CardSection>
					<CardSection>
						<Input
							placeholder="What is this form about"
							label="Description"
							value={this.state.title}
							onChangeText={this.onChangeText}
						/>
					</CardSection>
					<CardSection>
						<Input
							placeholder="Fortnite"
							label="Game"
							value={this.state.title}
							onChangeText={this.onChangeText}
						/>
					</CardSection>
				</Card>
			</View>
			)
	}
}

const containerStyle = {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	margin: '5%'
}

export default ForumCreate;