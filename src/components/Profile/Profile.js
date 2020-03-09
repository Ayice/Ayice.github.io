import React, { Component } from 'react'
import './Profile.scss'
import profilePic from '../../assets/profile-placeholder.jpg'

class Profile extends Component {
	render() {
		return (
			<section className={'profile-section ' + (this.props.class === true ? 'scrolled' : '')}>
				<div className='profile-img'>
					<img src={profilePic} alt='placeholder' />
				</div>

				<div className='profile-desc'>
					<p>
						Lorem Ipsum er ganske enkelt fyldtekst fra print- og typografiindustrien. Lorem Ipsum har været standard fyldtekst siden 1500-tallet, hvor en ukendt trykker sammensatte en tilfældig spalte
						for at trykke en bog til sammenligning af forskellige skrifttyper. Lorem Ipsum har ikke alene overlevet fem århundreder, men har også vundet indpas i elektronisk typografi uden væsentlige
						ændringer.
					</p>
				</div>
			</section>
		)
	}
}

export default Profile
