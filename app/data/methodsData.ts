import { StaticImageData } from 'next/image'
import filterImg from '../../public/img/filter.png'
import mapImg from '../../public/img/map.png'
import reduceImg from '../../public/img/reduce.png'
import popImg from '../../public/img/pop.png'
import pushImg from '../../public/img/push.png'
import shiftImg from '../../public/img/shift.png'
import unShiftImg from '../../public/img/unshift.png'
import concatImg from '../../public/img/concat.png'
import sortImg from '../../public/img/sort.png'

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
		title: 'Pop()',
		strong1: 'none',
		strong2: 'element | undefined',
		strong3: '-',
		strong4: '-',
		description:
			'The pop() method removes the last element from an array and returns that element.',
		src: popImg,
		alt: 'Pop method image',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop',
	},
	{
		title: 'Push()',
		strong1: 'element1, …, elementN',
		strong2: 'length',
		strong3: '-',
		strong4: '-',
		description:
			'The push() method adds zero or more elements to the end of the array.',
		src: pushImg,
		alt: 'Push method image',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push',
	},
	{
		title: 'Shift()',
		strong1: 'none',
		strong2: 'element | undefined',
		strong3: '-',
		strong4: '-',
		description:
			'The shift() method removes the first element from an array and returns that element.',
		src: shiftImg,
		alt: 'Shift method image',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift',
	},
	{
		title: 'Unshift()',
		strong1: 'element1, …, elementN',
		strong2: 'length',
		strong3: '-',
		strong4: '-',
		description:
			'The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.',
		src: unShiftImg,
		alt: 'Unshift method image',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift',
	},
	{
		title: 'Concat()',
		strong1: 'value1, …, valueN (Optional)',
		strong2: 'Array',
		strong3: '-',
		strong4: '-',
		description:
			'The concat() method returns a new array by merging two or more values/arrays.',
		src: concatImg,
		alt: 'Concat method image',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat',
	},
	{
		title: 'Sort()',
		strong1: 'compareFn (Optional)',
		strong2: 'sorted Array',
		strong3: '-',
		strong4: '-',
		description:
			'The sort() method sorts the items of an array in a specific order (ascending or descending).',
		src: sortImg,
		alt: 'Sort method image',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
	},
]