import Theme from '@/components/theme'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<GoogleAnalytics gaId='G-ZM4P4CY40X' />
			<body>
				<Theme
					attribute='class'
					defaultTheme='dark'
					// enableSystem
					// disableTransitionOnChange
				>
					{children}
				</Theme>
			</body>
		</html>
	)
}

export const metadata = {
	title: 'My Portfolio :･ﾟ✧',
	description: "Hi! I'm Shubhrajit Sadhukhan. Welcome to my portfolio.",
	openGraph: {
		title: 'My Awesome Portfolio',
		description: '~ Shubhrajit Sadhukhan',
		type: 'website',
		// url: 'https://sbrjt.github.io/',
		images: 'https://sbrjt.github.io/favicon.ico',
	},
	other: {
		'google-adsense-account': 'ca-pub-7149799351566746',
		'google-site-verification': 'xlUTCUMRvEa8sgN7C4hDnxgR_f2yoeUouYWNG6qlhv4',
	},
}
