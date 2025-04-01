'use client'

function Test() {
	return (
		<>
			{/* <div className='relative text-center'>
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
			</div> */}
			<div className='relative w-fit bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 bg-clip-text text-transparent py-4'>
				<span className='text-4xl font-bold'>Exploding beams.</span>
			</div>
		</>
	)
}

export default Test
