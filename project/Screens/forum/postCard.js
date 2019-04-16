import React, {Component} from 'react'
import {
	text, 
	view
} from 'react-native'
import {
	Card
} from '../../components'


const postCard = (params) => {
	return (
		<Card>
			<text> {params.author} </text>
			<text> {params.title} </text>
			<text> {params.body} </text>
		</Card>
		)
}

// class postCard extends Component {
// 	constructor(){

// 	}
// }