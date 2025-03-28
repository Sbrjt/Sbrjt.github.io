'use client'
import { WavyBackground } from './ui/wavy-background'

function Test() {
	return (
		<>
			<div className='relative text-center'>
				<WavyBackground
					className='mx-auto'
					backgroundFill='black'
				></WavyBackground>
				<div
					style={{
						position: 'absolute',
						left: 0,
						top: 200,
						width: '100%',
						height: '100%',
						fontSize: '72px',
						fontWeight: 'bold',
						fontSize: '72px',
						mixBlendMode: 'multiply',
						background: 'black',
						color: 'white',
					}}
				>
					Bold Text Here
				</div>
			</div>
		</>
	)
}

export default Test
