import React, { Component } from 'react'

import Profile from '../Profile/Profile'
import './Slider.scss'

class Slider extends Component {
	constructor(props) {
		super(props)

		this.state = {
			scrollY: 0
		}

		this.handleLoad = this.handleLoad.bind(this)

		this.firstSliderRef = React.createRef()
		this.secondSliderRef = React.createRef()
		this.bannerTitleRef = React.createRef()
	}

	isBottom(el) {
		return el.getBoundingClientRect().bottom <= window.innerHeight
	}

	componentDidMount() {
		const firstSlider = this.firstSliderRef.current
		const secondSlider = this.secondSliderRef.current
		const bannerTitle = this.bannerTitleRef.current

		// const banner = this.bannerRef.current
		document.addEventListener('scroll', this.trackScrolling)

		this.handleLoad()

		window.onscroll = () => {
			const banner = document.querySelector('.banner')
			this.setState({
				scrollY: window.pageYOffset
			})

			if (this.state.scrollY === 0 && firstSlider.classList.contains('loaded')) {
				firstSlider.classList.remove('loaded')
				secondSlider.classList.remove('loaded')
			} else {
				firstSlider.classList.add('loaded')
				secondSlider.classList.add('loaded')
			}
			if (this.state.scrollY > 200) {
				bannerTitle.classList.remove('loaded')
			} else {
				bannerTitle.classList.add('loaded')
			}
			// Keeps increasing no matter where i scroll
			if (this.state.scrollY > 500) {
				console.log(banner.offsetHeight)
				banner.style.height = banner.offsetHeight - 50 + 'px'

				if (banner.offsetHeight < 100) {
					banner.style.height = banner.offsetHeight - 2 + 'px'
				}
			} else {
				banner.style.height = banner.offsetHeight + 50 + 'px'
			}
		}
	}

	// trackScrolling = () => {
	// 	if (this.isBottom(banner)) {
	// 		console.log('header bottom reached')
	// 		// document.removeEventListener('scroll', this.trackScrolling)
	// 	}
	// }

	handleLoad() {
		const firstSlider = this.firstSliderRef.current
		const secondSlider = this.secondSliderRef.current
		const bannerTitle = this.bannerTitleRef.current
		window.onload = () => {
			firstSlider.classList.add('loaded')
			secondSlider.classList.add('loaded')
			bannerTitle.classList.add('loaded')
		}
	}

	render() {
		const { scrollY } = this.state
		return (
			<div ref={this.banner} className='banner'>
				<div ref={this.firstSliderRef} className='first-slider'></div>

				<div ref={this.secondSliderRef} className='second-slider'></div>

				<div ref={this.bannerTitleRef} className='banner-title'>
					<p className='banner-title_h2'>
						Hello And <br /> Welcome
					</p>
				</div>

				<Profile class={scrollY > 200 ? true : false} />
			</div>
		)
	}
}

export default Slider
