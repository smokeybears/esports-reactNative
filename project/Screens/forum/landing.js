import React, { Component } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'
import { Input } from '../../components/common'
import GameScroll from '../../components/gameScroll'
import PostPreview from '../../components/postPreview'
import ForumPreview from '../../components/forumPreview'
import { NavigationActions } from 'react-navigation';

const baseURL = 'http://localhost:8080'

class ForumLanding extends Component {
	constructor(props){
		super()
		this.state = {
			games: [],
			game: null, // game database id not name
			searchText: '',
			searchSubject: 'Post',
			feed: {
				Post: [],
				Forums: [],
				People: []
			},
		}
		this.navigation = props.navigation
	}

	subjectChange = (subject) => {
		return this.setState({searchSubject: subject}, this.getFeed)
	}

	getSearchResults = (searchText) => {
		return this.setState({searchText})
		//return fetch('localhost:8080/search?{}')
	}


	gameChange = (field, val) => {
		return this.setState({game: val}, this.getFeed)
	}

	getFeed = () => {
		fetch(`${baseURL}/${this.state.searchSubject.toLowerCase()}/${this.state.game}`)
		.then(r => r.json())
		.then(b => {
			return this.setState({
				feed: {...this.state.feed, ...{[this.state.searchSubject]: b[this.state.searchSubject]}}
			})
		})
		.catch(err => {
			throw err
		})
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
		.then(() => {
			return this.getFeed()
		})	
	}

	componentWillMount = (props) => {
		return this.getGames()
	}

	render(){
		console.log('feed length', this.state.feed['Post'].length)
		return (
			<View style={styles.container}>
				<GameScroll 
					options={this.state.games}
					raiseState={this.gameChange}
					/>
				<SearchSubjects 
					subjectChange={this.subjectChange} 
					curSub={this.state.searchSubject}
					/>
				{renderFeed(
					this.state.feed[this.state.searchSubject], 
					this.state.searchSubject,
					this.navigation
				)}
			</View>
		)
	}
}

const renderFeed = (content, subject, navigation) => {
	if (content.length == 0) {
		return (
			<Text> No Content Found :'( </Text>
		)
	}
	if (subject == "Post"){
		return (
			<ScrollView style={styles.feed}>
				{
					content.map(p => {
						return <PostPreview 
							author={p.author}
							title={p.title}
							body={p.body}
							forum={p.forum_id}
						/>
					})
				}
			</ScrollView>
		)
	} else if (subject == "Forums") {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					onPress={(e) => {
						return navigation.navigate('CreateForum')
					}}
					style={styles.newForm}
					>
					<Text style={styles.newFormText}>New Form</Text>
				</TouchableOpacity>
				<ScrollView style={styles.feed}>
				{
					content.map(p => {
						return <ForumPreview 
							id={p.id}
							title={p.title}
							description={p.description}
							navigation={navigation}
						/>
					})
				}
			</ScrollView>
		</View>
	)
	} else if (subject == "People"){

	} else {
		return <Text>Something Went Wrong.....</Text>
	}
}


const SearchSubjects = (props) => {
	const {curSub, subjectChange} = props
	const subjects = ['Post', 'Forums', 'People']
	return (
			<View style={styles.flexRow}>
				{subjects.map(s => {
					return (
						<TouchableOpacity 
							onPress={(e) => subjectChange(s)} 
							style={{
								...styles.subjectOption, 
								...{
									backgroundColor: s == curSub ? "rgba(100, 100, 100, 0.2)" : 'white'
									}
								}}
								>
								<Text style={styles.subjectText}>
									{s}
								</Text>
						</TouchableOpacity>
						)
				})}
			</View>
		)
}


const styles = {
	flexRow: { // should be in common file probably
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
		flexDirection: 'row',
		flexWrap: 'noWrape',
		maxHeight: 35, // should be not hard coded but flex is being annoying
	},
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		width: '100%',
	},
	newForm: {
		alignSelf: 'flex-end',
		borderBottomWidth: 1,
		borderColor: 'grey'
	},
	newFormText: {
		fontWeight: 'bold',
		fontSize: 15
	},
	feed: {
		flex: 1,
		width: '100%',
		paddingRight: 10
	},
	subjectOption: {
		flex: 1,
		borderRightWidth: 1,
		borderBottomWidth: 1,
		borderTopWidth: 1,
		borderColor: '#444',
	},
	subjectText: {
		fontWeight: 'bold',
		fontSize: 25,
		textAlign: 'center',
		color: '#444'
	},
	searchInput: {
		width: '100%',
		maxHeight: 50,
		borderBottomWidth: 2,
		justifyContent: 'flex-start',
		alignSelf: 'flex-start',
		flex: 1,
		borderBottomColor: 'grey',
	}
}

// <View style={styles.searchInput}>
// 	<Input 
// 		placeholder="Search..."
// 		label="search"
// 		onChangeText={((e) => this.getSearchResults(e))}
// 		/>
// </View>

export default ForumLanding