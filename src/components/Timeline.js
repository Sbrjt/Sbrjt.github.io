import { Timeline } from '@/components/ui/timeline'
import { Cover } from './ui/cover'

export default function TimelineDemo() {
	const data = [
		{
			title: 'Experience',
			content: (
				<div className='flex flex-col gap-y-10 md:gap-y-20'>
					<Card role='SDE 1' company='@XYZ company' period='2026-Present' />
					<Card
						role='Full Stack Intern'
						company='@Soft company'
						period='2025-2026'
					/>
				</div>
			),
		},
		{
			title: 'Education',
			content: (
				<div className='flex flex-col gap-y-10 md:gap-y-20 '>
					<Card role='BTech in CSE' company='IIIT Ranchi' period='2023-2027' />
					<Card role='10+2' company='APS Barrackpore' period='2011-2023' />
				</div>
			),
		},
	]

	return (
		<div className='w-full'>
			<Timeline data={data} />
		</div>
	)
}

function Card({ role, company, period }) {
	return (
		<div>
			<Cover className='text-2xl md:text-4xl'>{role}</Cover>
			<p className='text-white'>{company}</p>
			<p className='text-blue-400'>{period}</p>
		</div>
	)
}
