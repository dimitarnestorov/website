module.exports = {
	experimental: {
		async rewrites() {
			return [
				{ source: '/Release', destination: '/api/Release' },
				{ source: '/./Release', destination: '/api/Release' },
				{ source: '/./Packages', destination: '/api/Packages' },
				{ source: '/./Packages.gz', destination: '/api/Packages.gz' },
				{ source: '/Packages', destination: '/api/Packages' },
				{ source: '/Packages.gz', destination: '/api/Packages.gz' },
				{ source: '/./CydiaIcon.png', destination: '/CydiaIcon.png' },
				{ source: '/./api/(.*)', destination: '/api/$1' },
			]
		},
		async redirects() {
			return [{ source: '/discord', destination: 'https://discord.gg/caPYtsN', permanent: false }]
		},
	},
}
