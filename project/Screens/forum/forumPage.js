import React, { Component } from 'react'
import {Text, View, ScrollView, TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import PostPreview from '../../components/postPreview'

const baseURL = 'http://localhost:8080'

class Forum extends Component {
	constructor(props){
		super()
		this.state = {
			game: {
				name: '',
				id: 0
			},
			forumPost: [],
			title: '',
			description: '',
			id: ''
		}
		//id: this.
		this.navigation = props.navigation
	}

	// subscribeToForum(){
	// 	return ''
	// }

	loadForum = (id) => {
		return fetch(`${baseURL}/forumsg/${id}`)
		.then(r => r.json())
		.then(b => {
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

	getForumPost = () => {
		return fetch(`${baseURL}/forums/${this.state.id}/post`)
		.then(r => r.json())
		.then(b => {
			console.log('Post On Forum', b)
			return this.setState({forumPost: b.post})
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
				<TouchableOpacity
					onPress={() => {
						return this.navigation.navigate('CreatePost')
					}}
					style={styles.newPost}
				>
					<Text style={styles.newPostText}> 
						New Post
					</Text>
				</TouchableOpacity>
				<ScrollView style={styles.feed}>
					{
						this.state.forumPost.map(p => {
							return <PostPreview 
								author={p.author}
								title={p.title}
								body={p.body}
								forum={p.forum_id}
							/>
						})
					}
				</ScrollView>
			</View>
			)
	}
					// <TouchableOpacity
					// 	onPress={this.subscribeToForum}
					// >
					// 	<Text> submit </Text>
					// </TouchableOpacity>
			//<postFeed />
}

const mapStateToProps = (state) => {
	return {}
}

export default connect(mapStateToProps)(Forum)

const styles = {
	container: {
		width: '100%',
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start'
	},
	titleContainer: {
		flex: 1,
		maxHeight: 100,
		justifyContent: 'flex-end',
		alignItems: 'left',
		borderBottomColor: 'grey',
		borderBottomWidth: 2
	},
	newPost: {
		alignSelf: 'flex-end',
		//justifyContent: 'flex-start',
		borderBottomWidth: 1,
		//flex: 1,
		borderColor: 'grey'
	},
	newPostText: {
		fontWeight: 'bold',
		fontSize: 15
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