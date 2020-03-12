import React, { Component } from 'react'

import Profile from '../Profile/Profile'
import './Slider.scss'

class Slider extends Component {
	constructor(props) {
		super(props)

		this.state = {
			scrollY: window.pageYOffset
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
			this.setState({
				scrollY: window.pageYOffset
			})
			const banner = document.querySelector('.banner')
			// console.log(window.pageYOffset)

			if (window.pageYOffset === 0 && firstSlider.classList.contains('loaded')) {
				firstSlider.classList.remove('loaded')
				secondSlider.classList.remove('loaded')
				banner.style.height = '200vh'
			} else {
				firstSlider.classList.add('loaded')
				secondSlider.classList.add('loaded')
			}
			if (window.pageYOffset > 200) {
				bannerTitle.classList.remove('loaded')
			} else {
				bannerTitle.classList.add('loaded')
			}
			// Keeps increasing no matter where i scroll
			if (window.pageYOffset > 500) {
				banner.style.height = banner.offsetHeight * 0.89 + 'px'
			} else {
				banner.style.height = banner.offsetHeight * 1.8 + 'px'
				banner.style.maxHeight = '200vh'
			}
			if (banner.style.height < '20px') {
				console.log('test')
				// 	banner.style.display = 'none'
			} else {
				banner.style.display = 'flex'
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
		return (
			<div ref={this.banner} className='banner'>
				<div ref={this.firstSliderRef} className='first-slider'></div>

				<div ref={this.secondSliderRef} className='second-slider'></div>

				<div ref={this.bannerTitleRef} className='banner-title'>
					<p className='banner-title_h2'>
						Hello And <br /> Welcome
					</p>
				</div>

				<Profile class={this.state.scrollY > 200 ? true : false} />
			</div>
		)
	}
}

export default Slider
