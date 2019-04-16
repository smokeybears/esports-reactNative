import React, {Component} from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import { Card, CardSection } from './common'

export default PostPreview = (props) => {
	const {
		author = '',
		title = '',
		body = '',
		forum = ''
	} = props
	const goToPost = () => {
		// Navigate To Post Preview
	}

	// forum_id | author | title | body | multimedia | score | date_added 
	return (
		<TouchableOpacity
			onPress={e => goToPost(id)}
			style={styles.container}
			>
			<Card>
				<CardSection>
					<Text>
						{author} posted in {forum}
					</Text>
				</CardSection>
				<CardSection>
					<Text>
						{body.slice(0, 125)}
						{body.length > 125 ? '...' : ''}
					</Text>
				</CardSection>
			</Card>
		</TouchableOpacity>
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