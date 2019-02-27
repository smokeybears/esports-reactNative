import React, { Component } from 'react'
import {View, Text} from 'react-native'
import {Input, Card, CardSection, Button} from '../../components/common'
import { connect } from 'react-redux'
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

	onChangeText = (e, inputLabel) => {
		this.setState({[inputLabel]: e})
		console.log(this.state)
	}

	render(){
		return (
			<View style={containerStyle}>
				<Card>
					<CardSection>
						<Input
							placeholder="Cats in Dota"
							label="title"
							value={this.state.title}
							onChangeText={(e) => {this.onChangeText(e, "title")}}
						/>
					</CardSection>
					<CardSection>
						<Input
							placeholder="What is this form about"
							label="description"
							value={this.state.description}
							onChangeText={(e) => {this.onChangeText(e, "description")}}
						/>
					</CardSection>
					<CardSection>
						<Input
							placeholder="Fortnite"
							label="game"
							value={this.state.game}
							onChangeText={(e) => {this.onChangeText(e, 'game')}}
						/>
					</CardSection>
					<CardSection>
						<Button onPress={() => {console.log('life is here')}}>
							Create Forum
						</Button>
					</CardSection>
				</Card>
			</View>
			)
	}
}

const mapStateToProps = (state) => {
	return {};
}

const containerStyle = {
	flex: 1,
	justifyContent: 'center',
	alignItems: 'center',
	margin: '5%'
}

export default connect(mapStateToProps)(ForumCreate);