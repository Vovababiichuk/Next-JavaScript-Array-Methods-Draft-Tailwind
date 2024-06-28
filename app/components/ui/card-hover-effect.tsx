import { cn } from '@/app/utils/cn'
import { AnimatePresence, motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export const HoverEffect = ({
	items,
	className,
}: {
	items: {
		title: string
		strong1: string
		strong2: string
		strong3: string
		strong4: string
		description: string
		alt: string
		src: StaticImageData
		link: string
	}[]
	className?: string
}) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

	return (
		<div
			className={cn(
				'grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10',
				className
			)}
		>
			{items.map((item, idx) => (
				<Link
					href={item?.link}
					key={item?.link}
					className='relative group  block p-2 h-full w-full'
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
					target='_blank'
				>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className='absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl'
								layoutId='hoverBackground'
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { duration: 0.15 },
								}}
								exit={{
									opacity: 0,
									transition: { duration: 0.15, delay: 0.2 },
								}}
							/>
						)}
					</AnimatePresence>
					<Card>
						<div className='flex flex-col gap-2`'>
							<div className='h-[210px]'>
								<CardTitle>{item.title}</CardTitle>
								<CardStrong
									strong1={item.strong1}
									strong2={item.strong2}
									strong3={item.strong3}
									strong4={item.strong4}
								/>
							</div>
							<div className='h-[100px]'>
								<CardDescription>{item.description}</CardDescription>
							</div>
							<div>
								<CardImage src={item.src} alt={item.title} />
							</div>
						</div>
					</Card>
				</Link>
			))}
		</div>
	)
}

export const Card = ({
	className,
	children,
}: {
	className?: string
	children: React.ReactNode
}) => {
	return (
		<div
			className={cn(
				'rounded-[12px] h-full w-full overflow-hidden bg-neutral-900 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20',
				className
			)}
		>
			<div className='relative z-50'>
				<div className='p-0'>{children}</div>
			</div>
		</div>
	)
}
export const CardTitle = ({
	className,
	children,
}: {
	className?: string
	children: React.ReactNode
}) => {
	return (
		<h2
			className={cn(
				'text-[#f80479] font-bold tracking-wide text-2xl text-center mb-4 uppercase border-b-2 dark:border-white/[0.2] py-2',
				className
			)}
		>
			{children}
		</h2>
	)
}
export const CardStrong = ({
	className,
	strong1,
	strong2,
	strong3,
	strong4,
}: {
	className?: string
	strong1: React.ReactNode
	strong2: React.ReactNode
	strong3: React.ReactNode
	strong4: React.ReactNode
}) => {
	return (
		<>
			<div className='px-4'>
				<div>
					<span className='text-[#12d979]'>Input: </span>
					<strong
						className={cn(
							'mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm',
							className
						)}
					>
						{strong1}
					</strong>
				</div>
				<div>
					<span className='text-[#12d979]'>Output: </span>
					<strong
						className={cn(
							'mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm',
							className
						)}
					>
						{strong2}
					</strong>
				</div>
				<div>
					<span className='text-[#12d979]'>Callback-input: </span>
					<strong
						className={cn(
							'mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm',
							className
						)}
					>
						{strong3}
					</strong>
				</div>
				<div>
					<span className='text-[#12d979]'>Callback-output: </span>
					<strong
						className={cn(
							'mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm',
							className
						)}
					>
						{strong4}
					</strong>
				</div>
			</div>
		</>
	)
}

export const CardDescription = ({
	className,
	children,
}: {
	className?: string
	children: React.ReactNode
}) => {
	return (
		<p
			className={cn(
				'mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm mb-6 px-4',
				className
			)}
		>
			{children}
		</p>
	)
}

export const CardImage = ({
	src,
	alt,
	className,
}: {
	src: StaticImageData
	alt: string
	className?: string
}) => {
	return (
		<div
			className={cn(
				'relative w-full h-64 flex items-center justify-center bg-neutral-900 rounded-lg overflow-hidden p-0',
				className
			)}
		>
			<div className='w-full h-full relative'>
				<Image
					src={src}
					alt={alt}
					layout='fill'
					objectFit='cover'
					className='rounded-lg'
				/>
			</div>
		</div>
	)
}
