import Image from 'next/image'
import Typewriter from './ui/Typewriter'
import { Spotlight } from './ui/spotlight'
import GridBackground from './ui/grid-background'

function Intro() {
	return (
		<div className='flex justify-center items-center relative overflow-hidden bg-[#000319]'>
			<Spotlight
				className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
				fill='white'
			/>
			<Spotlight className='h-[80vh] w-[50vw] top-10 left-full' fill='purple' />
			<Spotlight className='left-80 top-28 h-[80vh] w-[50vw]' fill='blue' />
			<GridBackground />

			<div className='flex flex-col md:flex-row justify-between md:items-center w-full z-50 md:px-48 py-5 mt-20'>
				<div className='mx-auto md:mx-0'>
					<div className='my-8'>
						<div className='text-2xl md:text-4xl text-slate-400 mb-4'>
							👋 Hi there! I'm
						</div>
						<div
							className='text-bluepink text-5xl md:text-7xl font-bold pb-3 h-16 md:h-24'
							id='#'
						>
							<Typewriter text='Shubhrajit' />
						</div>
					</div>

					<div className='flex justify-between gap-2 text-lg md:pr-3'>
						<a
							className='relative inline-flex h-12 overflow-hidden rounded-full p-0.5 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
							href='https://www.linkedin.com/in/shubhrajit-sadhukhan'
							target='_blank'
							rel='noopener noreferrer'
						>
							<span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
							<span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 font-medium text-white backdrop-blur-3xl'>
								Let's Talk
							</span>
						</a>
						<a
							className='bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-0.5'
							href='https://sbrjt.github.io/resume/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<div className='bg-black text-white hover:bg-transparent transition duration-200 rounded-full h-full py-2 px-8'>
								My Resume
							</div>
						</a>
					</div>
				</div>

				<div className='relative h-72 md:h-80 md:w-80 mt-10 md:mt-0'>
					<Image
						className='object-contain md:object-cover'
						style={{
							filter: 'brightness(50%)',
							mask: 'linear-gradient(to bottom, black 50%, transparent 100%)',
							// filter: 'drop-shadow(0 0 0.75rem blue)',
						}}
						src='/img/Me.png'
						alt='mugshot'
						fill
					/>
				</div>
			</div>
		</div>
	)
}

export default Intro
