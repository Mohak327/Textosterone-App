import React from 'react'
import Header from './components/Header'
import Chats from './components/Chats'
import TinderCards from './components/TinderCards'
import SwipeButtons from './components/SwipeButtons'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'

function App() {
  return (

    <div className="App">
        <Router>
		<Switch>
			<Route path='/chats'>
	  			<Header backButton='/cards'/>
				<Chats />
			</Route>

			<Route path='/cards'>
	  			<Header />
				<TinderCards />
				<SwipeButtons />
      		</Route>

			{/* This default route 👇 is to be placed at bottom. */}
			<Route path='/'>
				<Header />
				<h1>Homepage</h1>
			</Route>

		</Switch>
      </Router>
    </div>
  );
}

export default App;