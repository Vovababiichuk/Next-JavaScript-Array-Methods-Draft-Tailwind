'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { Cards } from './Cards'
import { methods, Method } from '../data/methodsData'
import { filterArrayMethods } from '../components/Cards'
import ScrollToTopButton from './scrollToTopButton'

export function Main() {
	const [searchText, setSearchText] = useState('')
	const [filteredMethods, setFilteredMethods] = useState<Method[]>(methods)

	useEffect(() => {
		const debounce = setTimeout(() => {
			const filtered = filterArrayMethods(searchText, methods)
			setFilteredMethods(filtered)
		}, 300)

		return () => clearTimeout(debounce)
	}, [searchText])

	return (
		<div className='m-auto rounded-md  h-screen overflow-x-hidden text-center' id='main'>
			<h2 className='text-white text-2xl md:text-6xl font-bold mt-12'>
				JavaScript Array/String Methods
			</h2>
			<input
				type='text'
				placeholder='Search for a method...'
				value={searchText}
				onChange={e => setSearchText(e.target.value)}
				className='rounded-[12px] border border-neutral-800 focus:ring-2 focus:ring-[#F80479]  w-full max-w-[800px] relative z-10 mt-10 p-5  bg-neutral-950 placeholder:text-[#F80479] text-2xl shadow-neon outline-none'
			/>
			<Cards searchText={searchText} />
			<ScrollToTopButton />
		</div>
	)
}
