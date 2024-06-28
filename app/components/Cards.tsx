'use client'
import { useEffect } from 'react'
import { HoverEffect } from '../components/ui/card-hover-effect'
import { methods, Method } from '../data/methodsData'

interface CardsProps {
	searchText: string
}

export const filterArrayMethods = (
	searchText: string,
	filteredMethods: Method[]
): Method[] => {
	if (!searchText) {
		return filteredMethods
	}
	return filteredMethods.filter(({ title }) => {
		return title.toLowerCase().includes(searchText.toLowerCase())
	})
}

export function Cards({ searchText }: CardsProps) {
	const filteredMethods = filterArrayMethods(searchText, methods)
	return (
		<div className='max-w-20xl mx-auto text-left px-0 md:px-10 '>
			<HoverEffect items={filteredMethods} />
		</div>
	)
}
