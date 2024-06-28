'use client'

import { ArrowUp } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const mainElement = document.getElementById('main')

		const handleScroll = () => {
			if (mainElement) {
				if (mainElement.scrollTop > 100) {
					setIsVisible(true)
				} else {
					setIsVisible(false)
				}
			}
		}

		if (mainElement) {
			mainElement.addEventListener('scroll', handleScroll)
		}

		// Clean up event listener
		return () => {
			if (mainElement) {
				mainElement.removeEventListener('scroll', handleScroll)
			}
		}
	}, [])

	const scrollToTop = () => {
		const mainElement = document.getElementById('main')
		if (mainElement) {
			mainElement.scrollTo({
				top: 0,
				behavior: 'smooth',
			})
		}
	}

	return (
		<div>
			{isVisible && (
				<button
					className='fixed bottom-5 right-5 z-[999] bg-[#F80479] text-white p-4 rounded-full hover:scale-110 duration-300 ease-in-out'
					title='Scroll to top'
					onClick={scrollToTop}
				>
					<ArrowUp size={24} />
				</button>
			)}
		</div>
	)
}

export default ScrollToTopButton
