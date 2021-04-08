import React from 'react'
import Header from './components/Header'
import TinderCards from './components/TinderCards'
import SwipeButtons from './components/SwipeButtons'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css'

function App() {
  return (

    <div className="App">
      <Router>
	  	<Header />
		<Switch>
			<Route path='/chats'><h1>Chats Page</h1></Route>

			<Route path='/cards'>
				<TinderCards />
				<SwipeButtons />
      		</Route>

			{/* This default route 👇 is to be placed at bottom. */}
			<Route path='/'><h1>Homepage</h1></Route>

		</Switch>
      </Router>
    </div>
  );
}

export default App;

        // {/* Tinder Cards */}
        // {/* Buttons */}
        // {/* Chats Screen */}
        // {/* Individual chat screen */}