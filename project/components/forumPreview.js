import React, {Component} from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { Card, CardSection } from './common'

export default ForumPreview = (props) => {
	const {
		title = '',
		description = '',
		id = '',
		navigation = ''
	} = props

	const goToForum = () => {
		console.log('get em', id)
		return navigation.navigate("Forum", {
			forumID: id
		})
	}

	// forum_id | author | title | body | multimedia | score | date_added 
	return (
		<View>
			<TouchableOpacity
				onPress={e => {
					return goToForum();
				}}
				style={styles.container}
				>
				<Card>
					<CardSection>
						<Text>
							{title}
						</Text>
					</CardSection>
					<CardSection>
						<Text>
							{description}
						</Text>
					</CardSection>
				</Card>
			</TouchableOpacity>
		</View>
		)
}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		alignSelf: 'flex-start',
		width: '100%'
	}
}