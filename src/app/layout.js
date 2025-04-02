import Theme from '@/components/theme'
import './globals.css'

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-ZM4P4CY40X"></script>
                <script>
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-ZM4P4CY40X');
                </script>
            </head>
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
		title: 'My Portfolio',
		description: 'Welcome to my portfolio website - Shubhrajit Sadhukhan',
		type: 'website',
		url: 'https://sbrjt.github.io/',
	},
}
