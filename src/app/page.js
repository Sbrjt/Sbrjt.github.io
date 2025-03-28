import Contact from '@/components/Contact'
import Intro from '@/components/Intro'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Quote from '@/components/Quote'
import LogoCloud from '@/components/TechStack'
import Test from '@/components/Test'
import TimelineDemo from '@/components/Timeline'

function Home() {
	return (
		<div className='relative'>
			<Navbar />
			<Intro />
			<LogoCloud />
			<Projects />
			<TimelineDemo />
			<Quote />
			<Contact />
			{/* <Test /> */}
		</div>
	)
}

export default Home

// TODO
// Coffee to code
// hover border gradient
// lens + showcase + bg gradient
// vortex vs spakles vs bg beams
