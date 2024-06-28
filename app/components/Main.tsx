'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import { Cards } from './Cards'
import { methods, Method } from '../data/methodsData'
import { filterArrayMethods } from '../components/Cards'

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
		<div className='m-auto rounded-md  h-screen overflow-x-hidden text-center'>
			<h2 className='text-white text-2xl md:text-6xl font-bold mt-12'>
				JavaScript Array/String Methods
			</h2>
			<input
				type='text'
				placeholder='Search for an array method...'
				value={searchText}
				onChange={e => setSearchText(e.target.value)}
				className='rounded-[12px] border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full max-w-[800px] relative z-10 mt-10 p-5  bg-neutral-950 placeholder:text-neutral-700 text-2xl'
			/>
			<Cards searchText={searchText} />
		</div>
	)
}
