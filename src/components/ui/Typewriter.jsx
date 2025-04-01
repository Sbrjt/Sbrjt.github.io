'use client'
import { useState } from 'react'
import Typewriter from 'typewriter-effect'

function Type({ text }) {
	const [typewriterFinished, setTypewriterFinished] = useState(false)
	return (
		<>
			{!typewriterFinished ? (
				<Typewriter
					onInit={(typewriter) => {
						typewriter
							.typeString(text)
							.pauseFor(300)
							.callFunction(() => {
								setTypewriterFinished(true)
							})
							.start()
					}}
					options={{
						cursor: '_',
						cursorClassName: 'text-pink-800 ',
					}}
				/>
			) : (
				<>{text}</>
			)}

			{/* <Typewriter
				options={{
					strings: text,
					autoStart: true,
					// loop: true,
					cursorClassName: 'text-pink-800 ',
					cursor: '_',
				}}
			/> */}
		</>
	)
}

export default Type
