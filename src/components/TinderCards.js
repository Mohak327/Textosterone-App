import React, {useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'
import database from '../firebase'

function TinderCards() {
// 1
const [people, setPeople] = useState([])
// 2
useEffect(() => {
	// Pulls data from database
	const unsubscribe = database
		.collection('people')
		.onSnapshot(snapshot =>
			setPeople(snapshot.docs.map(doc => doc.data()))
		)

	return() => {
		// Change the new list of data after we swipe on a person
		unsubscribe()
	}

}, [] // This will run once when the component loads, and never again.
)

const swiped = (direction, nameToDelete) => {
	console.log('removing: ' + nameToDelete)
	// setLastDirection(direction)
}

const outOfFrame = (name) => {
	console.log(name + ' left the screen!')
}

	return (
		<div className='tinderCards'>
			<div className="tinderCards__cardContainer">
				{people.map((person) => (
					<TinderCard
						className ='swipe'
						key = {person.name}
						preventSwipe = {['up', 'down']}
						onSwipe = {(dir) => swiped(dir, person.name)}
						onCardLeftScreen = {() => outOfFrame(person.name)}
					>
						<div
							style={{ backgroundImage: `url(${person.url})`}}
							className="card"
						>
							<h1>{person.name}</h1>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	)
}

export default TinderCards

// 1 👇
// Wrong way to push elements in array in React. 👇
// const people = []
// people.push()

// Right way to push elements in array in React. 👇
// const [people, setPeople] = useState([])

// ...people(spread operator) means keep the existing values in that state and append the following values to the state as well.
// setPeople([...people, 'Mohak', 'Aniket'])

// _________________________________________________________

// 2 👇
// {
// 		name: 'Akansha',
// 		url: 'https://images.unsplash.com/photo-1540076156429-35ffe82b7870?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
// 	},{
// 		name: 'Tripti',
// 		url: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
// 	},{
// 		name: 'Drishti',
// 		url: 'https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
// 	},