import React from 'react'
// import { Spring, config } from 'react-spring/renderprops'
import Slider from './components/Slider/Slider'

import './App.scss'
import Navbar from './components/Navbar/Navbar'

const App = () => {
	return (
		<div className='App'>
			<Navbar />

			<Slider />

			{/* 
			Padding-top is the way to go
			<div className="fdsaf">
				<h1>hejs</h1>
			</div>
			*/}
		</div>
	)
}

export default App
