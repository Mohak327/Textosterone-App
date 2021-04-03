import React, {useState} from 'react'
import TinderCard from 'react-tinder-card'
import './TinderCards.css'

function TinderCards() {

// Wrong way to push elements in array in React. 👇
// const people = []
// peopel.push()

// Right way to push elements in array in React. 👇
// const [people, setPeople] = useState([])

// ...people(spread operator) means keep the existing values in that state and append the following values to the state as well.
// setPeople([...people, 'Mohak', 'Aniket'])

const [people, setPeople] = useState([
	{
		name: 'Akansha',
		url: 'https://images.unsplash.com/photo-1540076156429-35ffe82b7870?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
	},{
		name: 'Tripti',
		url: 'https://images.unsplash.com/photo-1600618528240-fb9fc964b853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
	},{
		name: 'Drishti',
		url: 'https://images.unsplash.com/photo-1494869042583-f6c911f04b4c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
	},
])

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
							<h3>{person.name}</h3>
						</div>
					</TinderCard>
				))}
			</div>
		</div>
	)
}

export default TinderCards

