import GridBackground from './ui/grid-background'
import { Spotlight } from './ui/spotlight'

function Intro() {
	return (
		<div className='z-[-1] h-[30rem] flex-center relative py-50 px-5 overflow-hidden bg-[#000319]'>
			<Spotlight
				className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
				fill='white'
			/>
			<Spotlight className='h-[80vh] w-[50vw] top-10 left-full' fill='purple' />
			<Spotlight className='left-80 top-28 h-[80vh] w-[50vw]' fill='blue' />
			<GridBackground />

			<div className='flex text-5xl justify-center items-center w-full text-white'>
				<div className='basis-1/2 '>
					<div>Hello there! 👋</div>
					<div>
						I'm <p id='#'>Shubhrajit</p>
					</div>
					<div>
						<button className='relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'>
							<span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
							<span className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl'>
								Border Magic
							</span>
						</button>
					</div>
				</div>

				<div className='relative h-100 w-100'>
					<img
						src='/img/Me.png'
						style={{
							position: 'absolute',
							width: '100%',
							height: '100%',
							filter: 'brightness(50%)',
							mask: 'linear-gradient(to bottom, black 50%, transparent 100%)',
							// filter: 'drop-shadow(0 0 0.75rem blue)',
						}}
						alt='mugshot'
					/>
				</div>
			</div>
		</div>
	)
}

export default Intro
