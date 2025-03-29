// import nextPWA from 'next-pwa'

// const runtimeCaching = [
// 	{
// 		urlPattern: /^https:\/\/example\.com\/.*\.(?:png|jpg|jpeg|svg|gif|webp)$/,
// 		handler: 'CacheFirst',
// 		options: {
// 			cacheName: 'image-cache',
// 			expiration: {
// 				maxEntries: 50,
// 				maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
// 			},
// 		},
// 	},
// 	{
// 		urlPattern: /^https:\/\/example\.com\/api\/.*$/,
// 		handler: 'NetworkFirst',
// 		options: {
// 			cacheName: 'api-cache',
// 			networkTimeoutSeconds: 10,
// 			expiration: {
// 				maxEntries: 50,
// 				maxAgeSeconds: 5 * 60, // 5 minutes
// 			},
// 		},
// 	},
// ]

// const pwaConfig = {
// 	dest: 'public',
// 	runtimeCaching,
// 	disable: process.env.NODE_ENV === 'development',
// }

const nextConfig = {
	images: {
		unoptimized: true,
	},
	output: 'export',
}

export default nextConfig
