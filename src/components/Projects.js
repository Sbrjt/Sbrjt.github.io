'use client'

import { projects } from '@/data'
import Image from 'next/image'
import { PinContainer } from './ui/Pin'

function Projects() {
	return (
		<div className='pt-20 pb-0.5 bg-[#000319]'>
			<h1 className='md:text-5xl text-3xl font-bold px-5 pb-1 md:pb-3 text-center'>
				<div className='text-gradient from-slate-200 to-slate-700'>
					A small selection of
				</div>
				<div className='text-bluepink mx-auto pb-3'>
					recent <span id='Projects'> projects</span>
				</div>
			</h1>
			<div className='flex flex-wrap items-center justify-center gap-16 mt-10 md:mt-0 mb-20 md:mb-60'>
				{projects.map((item, id) => (
					<div
						className='mx-40 lg:pt-40 lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'
						key={id}
					>
						<PinContainer title='Visit' href={item.link}>
							<div className='w-[80vw] md:w-150 p-[8vw] md:p-9'>
								<div className='relative flex items-center justify-center w-full overflow-hidden h-40 md:h-60 mb-10 '>
									<div
										className='relative w-full h-full overflow-hidden rounded-xl md:rounded-3xl'
										style={{ backgroundColor: '#13162D' }}
									>
										<Image src='/img/bg.png' fill alt='bg-img' />
									</div>
									<img
										src={item.img}
										style={{
											width: '80%',
											borderRadius: '10px',
											transform: 'rotate(3deg) translateY(50px)',
										}}
										alt='cover'
										className='z-10 absolute bottom-0'
									/>
								</div>
								<h1 className='font-bold md:text-2xl text-base line-clamp-1 text-white'>
									{item.title}
								</h1>
								<p
									className='lg:text-xl lg:font-normal font-light line-clamp-3 text-slate-500'
									style={{
										margin: '1vh 0',
									}}
								>
									{item.des}
								</p>
								<div className='flex items-center justify-between mt-7 md:mb-3'>
									<div className='flex items-center'>
										{item.iconLists.map((icon, index) => (
											<div
												key={index}
												className='border border-white/[.2] rounded-full bg-gradient-to-r from-[#161a31] to-[#06091f] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
												style={{
													transform: `translateX(-${5 * index + 2}px)`,
												}}
											>
												<Image
													src={icon}
													alt={icon}
													className='p-2 object-contain'
													fill
												/>
											</div>
										))}
									</div>

									{/* <div className='flex justify-center items-center text-purple-300'>
										<p className='flex lg:text-xl md:text-xs text-sm text-purple'>
											Check Live Site
										</p>
										<FaLocationArrow className='ms-3' />
									</div> */}
								</div>
							</div>
						</PinContainer>
					</div>
				))}
			</div>
		</div>
	)
}

export default Projects
