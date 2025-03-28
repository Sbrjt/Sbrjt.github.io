import {
	FaGithub,
	FaInstagram,
	FaLinkedin,
	FaReddit,
	FaStackOverflow,
} from 'react-icons/fa'

const projects = [
	{
		title: 'MealMap',
		des: 'A web application to connect food donors with NGOs or individuals, powered by Mapbox and Firebase.',
		img: '/img/MealMap.png',
		iconLists: [
			'/img/React.svg',
			'/img/Firebase.svg',
			'/img/Mapbox.svg',
			//
		],
		link: 'https://proj3-8bf4f.firebaseapp.com/',
	},
	{
		title: 'Overleaf Resume Syncer',
		des: 'A GitHub Action that seamlessly syncs your overleaf resume with Google Drive and GitHub.',
		img: '/img/Resume_Syncer.png',
		iconLists: ['/img/Github.svg', '/img/Python.svg', '/img/Selenium.svg'],
		link: 'https://github.com/Sbrjt/overleaf-resume-downloader',
	},
	{
		title: 'College Predictor',
		des: 'Make college hunt easy after JEE. Look up JoSAA cutoffs with custom filters and get personalized result based on your rank.',
		img: '/img/josaa.png',
		iconLists: [
			'/img/html.svg',
			'/img/Bootstrap.svg',
			'/img/JS.svg',
			'/img/SQLite.svg',
		],
		link: 'https://sbrjt.github.io/josaa-cutoffs/',
	},
]

const techStack = [
	'Tailwind',
	'Node',
	'React',
	'NextJS',
	'Prisma',
	'Firebase',
	'React Native',
	'Python',
	'Git',
	'Docker',
]

const connect = [
	{
		link: 'https://www.linkedin.com/in/shubhrajit-sadhukhan',
		Icon: FaLinkedin,
	},
	{ link: 'https://github.com/Sbrjt', Icon: FaGithub },
	{
		link: 'https://stackoverflow.com/users/14313852/shub',
		Icon: FaStackOverflow,
	},
	{
		link: 'https://chat.reddit.com/user/t2_apzmupyj',
		Icon: FaReddit,
	},
	{ link: 'https://www.instagram.com/shubjt/', Icon: FaInstagram },
]

export { connect, projects, techStack }
