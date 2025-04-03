'use client'
import { cn } from '@/lib/utils'
import {
	AnimatePresence,
	motion,
	useMotionValueEvent,
	useScroll,
} from 'motion/react'
import Link from 'next/link'
import { useState } from 'react'

export const FloatingNav = ({ navItems, className }) => {
	const { scrollYProgress } = useScroll()

	const [float, setFloat] = useState(false)
	const [floatVisible, setFloatVisible] = useState(false)

	useMotionValueEvent(scrollYProgress, 'change', (current) => {
		// Check if current is not undefined and is a number
		if (typeof current === 'number') {
			let direction = current - scrollYProgress.getPrevious()

			if (scrollYProgress.get() < 0.2) {
				setFloat(false)
			} else {
				setFloat(true)
			}

			if (direction < 0) {
				setFloatVisible(true)
			} else {
				setFloatVisible(false)
			}
		}
	})

	return (
		<>
			{float ? (
				<AnimatePresence mode='wait'>
					<motion.div
						initial={{
							opacity: 1,
							y: -100,
						}}
						animate={{
							y: floatVisible ? 0 : -100,
							opacity: floatVisible ? 1 : 0,
						}}
						transition={{
							duration: 0.2,
						}}
						className={cn(
							'gap-5 py-5 px-7 md:px-10 flex items-center justify-between max-w-fit fixed top-6 inset-x-0 mx-auto border backdrop-blur-sm border-white/[0.2] rounded-full shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]',
							className
						)}
					>
						<Nav navItems={navItems} />
					</motion.div>
				</AnimatePresence>
			) : (
				<div
					className={cn(
						'gap-5 py-5 px-7 md:px-10 absolute top-6 inset-x-0 flex items-center justify-between max-w-fit mx-auto border backdrop-blur-sm border-white/[0.2] rounded-full bg-transparent shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]',
						className
					)}
				>
					<Nav navItems={navItems} />
				</div>
			)}
		</>
	)
}

function Nav({ navItems }) {
	return (
		<>
			{navItems.map((navItem, idx) => (
				<Link
					key={`link=${idx}`}
					href={navItem.link}
					className={cn('relative text-neutral-50 hover:text-neutral-300 ')}
				>
					<span className='block md:hidden'>{navItem.icon}</span>
					<span className='hidden md:block text-sm'>{navItem.name} </span>
				</Link>
			))}
			{/* <button className='border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full'>
				<span>Login</span>
				<span className='absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px' />
			</button> */}
		</>
	)
}
