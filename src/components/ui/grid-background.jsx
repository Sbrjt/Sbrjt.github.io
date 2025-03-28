function gridBackground() {
	return (
		<>
			<div
				className='-z-10 absolute inset-0'
				style={{
					backgroundSize: '100px 100px',
					backgroundImage:
						'linear-gradient(to right, #0f1624 3px, transparent 3px), linear-gradient(to bottom, #0f1624 3px, transparent 3px)',
					maskImage:
						'radial-gradient(ellipse at center, black 0%, transparent 70%)',
				}}
			/>
		</>
	)
}

export default gridBackground
