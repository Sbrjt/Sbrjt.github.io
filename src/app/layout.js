import { GoogleAnalytics } from '@next/third-parties/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<GoogleAnalytics gaId='G-ZM4P4CY40X' />
			<body>
				<ThemeProvider
					forcedTheme='dark'
					attribute='class'
					defaultTheme='dark'
					enableSystem={false}
					// disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}

export const metadata = {
	title: 'My Portfolio :･ﾟ✧',
	description: "Hi! I'm Shubhrajit Sadhukhan. Welcome to my portfolio.",
	openGraph: {
		title: 'My Awesome Portfolio 😎',
		description: '~ Shubhrajit Sadhukhan',
		images: 'https://sbrjt.github.io/favicon.ico',
	},
	other: {
		'google-adsense-account': 'ca-pub-7149799351566746',
		'google-site-verification': 'xlUTCUMRvEa8sgN7C4hDnxgR_f2yoeUouYWNG6qlhv4',
	},
}

export const viewport = {
	themeColor: '#10131a',
}
