import filterImg from '../../public/img/filter.png'
import mapImg from '../../public/img/map.png'
import reduceImg from '../../public/img/reduce.png'
import { StaticImageData } from 'next/image'

export interface Method {
	title: string
	strong1: string
	strong2: string
	strong3: string
	strong4: string
	description: string
	src: StaticImageData
	alt: string
	link: string
}

export const methods: Method[] = [
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
		title: 'Test()',
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
]