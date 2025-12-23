// Sport/Endurance Events
export const enduranceEvents = [
	{
		id: 'marathon',
		name: 'Marathon Berlin',
		year: '2024',
		date: 'October 2024',
		image: '/images/marathon-finish.jpg',
		stats: [
			{ label: 'Distance', value: '42.2km' },
			{ label: 'Time', value: '3:45:23' },
			{ label: 'Pace', value: '5:20/km' },
			{ label: 'Avg HR', value: '165 bpm' }
		],
		description: 'First Marathon'
	},
	{
		id: 'gr20',
		name: 'GR20 Corsica',
		year: '2023',
		date: 'Summer 2023',
		image: '/images/gr20-summit.jpg',
		stats: [
			{ label: 'Distance', value: '180km' },
			{ label: 'Elevation', value: '10,000m+' },
			{ label: 'Duration', value: '15 days' }
		],
		description: "Europe's toughest trek"
	},
	{
		id: 'alps',
		name: 'Alpenüberquerung',
		year: '2024',
		date: 'Summer 2024',
		image: '/images/alps.jpg',
		stats: [
			{ label: 'Distance', value: '300km' },
			{ label: 'Elevation', value: '15,000m+' }
		],
		description: 'Crossing the Alps on foot'
	},
	{
		id: 'split',
		name: 'Austria → Split',
		year: '2024',
		date: 'Summer 2024',
		image: '/images/bike-tour.jpg',
		stats: [
			{ label: 'Distance', value: '800km' },
			{ label: 'Mode', value: 'Bicycle' },
			{ label: 'Countries', value: 'AT → SI → HR' }
		],
		description: 'Bicycle tour across three countries'
	}
];

// Tech Stack Items
export const techStack = [
	{ name: 'Python', icon: 'python', context: 'Backend APIs for MustSeen' },
	{ name: 'TypeScript', icon: 'typescript', context: 'Full-stack type safety' },
	{ name: 'SvelteKit', icon: 'svelte', context: 'Modern web framework' },
	{ name: 'Docker', icon: 'docker', context: 'Containerization & deployment' },
	{ name: 'Supabase', icon: 'supabase', context: 'Backend as a Service' },
	{ name: 'Vercel', icon: 'vercel', context: 'Edge deployment platform' },
	{ name: 'GitHub', icon: 'github', context: 'Version control & collaboration' },
	{ name: 'Tailwind', icon: 'tailwind', context: 'Utility-first CSS framework' }
];

// Social Links
export const socialLinks = [
	{ name: 'LinkedIn', url: 'https://linkedin.com/in/aaronpfuetzner', icon: 'linkedin' },
	{ name: 'GitHub', url: 'https://github.com/telaaron', icon: 'github' }
];

// Contact Info
export const contactInfo = {
	email: 'aaron@pfuetzners.com',
	location: 'Berlin, Germany'
};
