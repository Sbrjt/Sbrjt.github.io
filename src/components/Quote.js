function Quote() {
	return (
		<div
			style={{
				backgroundImage: `url('/img/2nd-quote-bg-blur.svg'), url('/img/2nd-quote-circles.svg')`,
			}}
			className='[background-size:100%,90%] md:[background-size:75%,60%] bg-center bg-no-repeat bg-black text-center md:px-80 md:py-60 px-20 py-40'
		>
			<div className='bg-gradient-to-b from-white to-[#CC53C7] bg-clip-text text-transparent font-medium md:text-6xl text-3xl'>
				Simplicity is the ultimate sophistication.
			</div>
			<div className='mt-2 font-extralight text-white/50 lg:text-2xl text-lg'>
				- Leonardo Da Vinci
			</div>
		</div>
	)
}

export default Quote
