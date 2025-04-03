import { BiBuildings } from 'react-icons/bi'
import { GoProjectRoadmap } from 'react-icons/go'
import { HiHome } from 'react-icons/hi'
import { IoMdContact } from 'react-icons/io'
import { TbSchool } from 'react-icons/tb'
import { FloatingNav } from './ui/floating-navbar'

export default function Navbar() {
	const navItems = [
		{
			name: 'Home',
			link: '#',
			icon: <HiHome className='h-4 w-4 text-white' />,
		},
		{
			name: 'Projects',
			link: '#Projects',
			icon: <GoProjectRoadmap className='h-4 w-4 text-white' />,
		},
		{
			name: 'Experience',
			link: '#Experience',
			icon: <BiBuildings className='h-4 w-4 text-white' />,
		},
		{
			name: 'Education',
			link: '#Education',
			icon: <TbSchool className='h-4 w-4 text-white' />,
		},

		{
			name: 'Contact',
			link: '#Contact',
			icon: <IoMdContact className='h-4 w-4 text-white' />,
		},
	]

	return (
		<div className='relative'>
			<FloatingNav navItems={navItems} />
		</div>
	)
}
