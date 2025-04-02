import { techStack } from '@/data'
import Image from 'next/image'

function TechStack() {
	return (
		<div className='bg-[#000319] pt-10'>
			<div
				className='w-auto mx-5 md:mx-20'
				style={{
					mask: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent 100%)',
				}}
			>
				<div className='overflow-hidden flex'>
					{/* 2 copies for continuous marquee animation */}
					{[1, 2].map((i) => (
						<div className='animate-marquee flex py-10 px-3 gap-5' key={i}>
							{techStack.map((tech, j) => (
								<div
									className='flex items-center justify-between gap-3 mx-2'
									key={j}
								>
									<div className='relative w-8 h-8'>
										<Image src={`/img/${tech}.svg`} fill alt={tech} priority />
									</div>
									<div className='text-emerald-100 w-auto whitespace-nowrap'>
										{tech}
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
export default TechStack

// todo: react native in single line
