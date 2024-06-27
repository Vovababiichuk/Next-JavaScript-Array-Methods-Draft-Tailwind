'use client'

import { Main } from './components/Main'
import { Vortex } from './components/ui/vortex'

export default function Home() {
	return (
		<div>
			<Vortex
				backgroundColor='black'
				rangeY={800}
				particleCount={500}
				baseHue={120}
				className='flex items-center flex-col justify-center px-2  py-4 w-full'
			>
				<Main />
			</Vortex>
		</div>
	)
}
