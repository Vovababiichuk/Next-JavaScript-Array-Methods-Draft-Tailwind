'use client'

import { HoverEffect } from '../components/ui/card-hover-effect'
import filterImg from '../../public/img/filter.png'
import mapImg from '../../public/img/map.png'
import reduceImg from '../../public/img/reduce.png'

export function Cards({ searchText }: { searchText: string }) {
	const filteredProjects = projects
		.filter(project =>
			project.title.toLowerCase().includes(searchText.toLowerCase())
		)
		.map(project => ({
			...project,
			src: project.src || filterImg,
		}))

	return (
		<div className='max-w-20xl mx-auto text-left px-0 md:px-10 '>
			<HoverEffect items={filteredProjects} />
		</div>
	)
}

export const projects = [
	{
		title: 'Filter()',
		strong1: 'callbackFn, thisArg (Optional)',
		strong2: 'Array',
		strong3: 'element, index, array',
		strong4: 'boolean',
		description:
			'The filter() method returns a new array with all elements that pass the test defined by the given function.',
		src: filterImg,
		alt: 'Filter method image',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
	},
	{
		title: 'Map()',
		strong1: 'callbackFn, thisArg (Optional)',
		strong2: 'Array',
		strong3: 'element, index, array',
		strong4: 'elements',
		description:
			'The map() method creates a new array with the results of calling a function for every array element.',
		src: mapImg,
		alt: 'Map method image',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map',
	},
	{
		title: 'Reduce()',
		strong1: 'callbackFn, initialValue (Optional), thisArg (Optional)',
		strong2: 'anything',
		strong3: 'accumulator, currentValue, currentIndex, array',
		strong4: 'new accumulator (any)',
		description:
			'The reduce() method executes a reducer function on each element of the array and returns a single output value.',
		src: reduceImg,
		alt: 'Reduce method image',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce',
	},
	{
		title: 'Sort()',
		strong1: 'callbackFn, thisArg (Optional)',
		strong2: 'Array',
		description:
			'The filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value. ',
		cardImage: filterImg,
		alt: 'Sort method image',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
	},
	{
		title: 'Each()',
		strong1: 'callbackFn, thisArg (Optional)',
		strong2: 'Array',
		description:
			'The filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value. ',
		src: filterImg,
		alt: 'Each method image',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
	},
	{
		title: 'Some()',
		strong1: 'callbackFn, thisArg (Optional)',
		strong2: 'Array',
		description:
			'The filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value. ',
		src: filterImg,
		alt: 'Some method image',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
	},
]
