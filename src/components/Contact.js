import { connect } from '@/data'
import { FaPaperPlane } from 'react-icons/fa6'
import { GrDocumentUser } from 'react-icons/gr'
import ShimmerBtn from './ui/ShimmerBtn'
import { BackgroundBeamsWithCollision } from './ui/background-beams-with-collision'

function Contact() {
	return (
		<BackgroundBeamsWithCollision className='bg-black'>
			<div className='text-center flex flex-col justify-center items-center z-20 md:gap-20 gap-14'>
				<div
					className='md:text-6xl text-3xl text-gradient from-gray-500 to-gray-800 font-bold pb-1 md:pb-3'
					id='Contact'
				>
					Let's get in <span className='text-bluepink'>touch</span> :)
				</div>

				<div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 md:text-2xl text-lg w-full'>
					<a
						href='mailto:champa.281982@gmail.com'
						className='w-full md:w-50'
						target='_blank'
						rel='noopener noreferrer'
					>
						<ShimmerBtn className='inline-flex gap-3 items-center justify-center w-full py-4 tracking-widest'>
							Email <FaPaperPlane />
						</ShimmerBtn>
					</a>
					<a
						href='https://sbrjt.github.io/resume/'
						className='w-full md:w-50'
						target='_blank'
						rel='noopener noreferrer'
					>
						<ShimmerBtn className='inline-flex gap-3 items-center justify-center w-full py-4'>
							Resume <GrDocumentUser />
						</ShimmerBtn>
					</a>
				</div>

				<div className='flex justify-between md:justify-center items-center gap-6 text-4xl text-slate-400 w-full px-0.5'>
					{connect.map(({ link, Icon }, i) => (
						<a href={link} target='_blank' rel='noopener noreferrer' key={i}>
							<Icon />
						</a>
					))}
				</div>
			</div>
		</BackgroundBeamsWithCollision>
	)
}

export default Contact
