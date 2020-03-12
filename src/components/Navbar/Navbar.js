import React, { Component } from 'react'
import './Navbar.scss'

class Navbar extends Component {
	state = {
		showMenu: false
	}

	toggleMenu = () => {
		this.setState({
			showMenu: !this.state.showMenu
		})

		document.querySelector('body').classList.toggle('show')
	}

	render() {
		return (
			<header>
				<nav>
					<div onClick={this.toggleMenu} className='menu'>
						<span className='menu-span'></span>
						<span className='menu-span'></span>
						<span className='menu-span'></span>
					</div>

					<div className={'burger-menu ' + (this.state.showMenu ? 'show' : '')}>
						<ul>
							<li>
								<a href='#'>Home</a>
							</li>
							<li>
								<a href='#'>About</a>
							</li>
							<li>
								<a href='#'>Portfolio</a>
							</li>
						</ul>
					</div>
				</nav>
			</header>
		)
	}
}

export default Navbar
