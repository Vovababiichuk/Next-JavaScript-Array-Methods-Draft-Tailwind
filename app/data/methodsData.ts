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
import spliceImg from '../../public/img/splice.png'
import sliceImg from '../../public/img/slice.png'
import foreachImg from '../../public/img/foreach.png'
import reverseImg from '../../public/img/reverse.png'
import joinImg from '../../public/img/join.png'
import splitImg from '../../public/img/split.png'
import includesImg from '../../public/img/includes.png'
import indexofImg from '../../public/img/indexof.png'
import findImg from '../../public/img/find.png'
import everyImg from '../../public/img/every.png'

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
		title: 'forEach()',
		strong1: 'callbackFn, thisArg (Optional)',
		strong2: 'None (undefined).',
		strong3: 'element, index, array',
		strong4: 'elements',
		description:
			'The forEach() method executes a provided function for each array element.',
		src: foreachImg,
		alt: 'forEach method image',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach',
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
		strong2: 'Returns the new (after appending the arguments) length of the array upon which the method was called.',
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
		strong2: 'Returns the new (after adding arguments to the beginning of array) length of the array upon which the method was called.',
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
		strong2: 'Returns a newly created array after merging all arrays/values passed in the argument.',
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
		strong2: 'The reference to the original array, now sorted. Note that the array is sorted in place, and no copy is made.',
		strong3: 'a, b',
		strong4: 'sort order',
		description:
			'The sort() method sorts the items of an array in a specific order (ascending or descending).',
		src: sortImg,
		alt: 'Sort method image',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort',
	},
	{
		title: 'Splice()',
		strong1: 'start, deleteCount (Optional), item1,…, itemN (Optional)',
		strong2: 'Returns an array containing the deleted elements',
		strong3: '-',
		strong4: '-',
		description:
			'The splice() method modifies an array (adds, removes or replaces elements).',
		src: spliceImg,
		alt: 'Splice method image',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice',
	},
	{
		title: 'Slice()',
		strong1: 'start (Optional), end (Optional)',
		strong2: 'new Array',
		strong3: '-',
		strong4: '-',
		description:
			'The slice() method returns a shallow copy of a portion of an array into a new array object.',
		src: sliceImg,
		alt: 'Slice method image',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice',
	},
	{
		title: 'Split()',
		strong1: 'separator (Optional), limit (Optional)',
		strong2: 'Returns an Array of strings, split at each point where the separator occurs in the given string.',
		strong3: '-',
		strong4: '-',
		description:
			'The split() method divides a string into substrings and returns them as an array without modifying the original string.',
		src: splitImg,
		alt: 'Split method image',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split',
	},
	{
		title: 'Reverse()',
		strong1: 'None.',
		strong2: 'Returns the array after reversing the order of its elements.',
		strong3: '-',
		strong4: '-',
		description:
			'The reverse() method returns the array in reverse order. The method changes the original array.',
		src: reverseImg,
		alt: 'Reverse method image',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse',
	},
	{
		title: 'Join()',
		strong1: 'separator (Optional). If omitted, the array elements are separated with a comma (",").',
		strong2: 'Returns a String with all the array elements joined by separator.',
		strong3: '-',
		strong4: '-',
		description:
			'join() combines all array elements into a single string with a specified separator, without changing the original array.',
		src: joinImg,
		alt: 'Join method image',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join',
	},
	{
		title: 'Includes()',
		strong1: 'searchElement, fromIndex (Optional)',
		strong2: 'true/false',
		strong3: '-',
		strong4: '-',
		description:
			'The includes() method checks if an array contains a specified element or not.',
		src: includesImg,
		alt: 'Includes method image',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes',
	},
	{
		title: 'IndexOf()',
		strong1: 'searchElement, fromIndex (Optional)',
		strong2: 'The first index of searchElement in the array; -1 if not found.',
		strong3: '-',
		strong4: '-',
		description:
			'indexOf() compares searchElement to elements of the Array using strict equality (similar to triple-equals operator or ===).',
		src: indexofImg,
		alt: 'IndexOf method image',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf',
	},
	{
		title: 'Find()',
		strong1: 'callbackFn, thisArg (Optional)',
		strong2: 'Returns the first element in the array that satisfies a given function, or undefined if none do.',
		strong3: 'element, index, array',
		strong4: 'true/false',
		description:
			'The find() method returns the value of the first array element that satisfies the provided test function.',
		src: findImg,
		alt: 'Find method image',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find',
	},
	{
		title: 'Every()',
		strong1: 'callbackFn, thisArg (Optional)',
		strong2: 'true/false',
		strong3: 'element, index, array',
		strong4: 'true/false',
		description:
			'The every() method checks if all array elements pass a given test function without modifying the original array.',
		src: everyImg,
		alt: 'Every method image',
		link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every',
	},
]