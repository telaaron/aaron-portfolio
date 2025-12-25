// Sport/Endurance Events
export const enduranceEvents = [
	{
		id: 'marathon',
		name: 'Marathon Berlin',
		year: '2024',
		date: 'October 2024',
		image: '/images/marathon-finish.jpg',
		stats: [
			{ label: 'Time', value: '5:30' },
			{ label: 'Mode', value: 'Mit Freund & Helfer' },
			{ label: 'Team', value: '3 people' }
		],
		description: 'Auf eigene Faust mit Freund und Radhelfer'
	},
	{
		id: 'gr20',
		name: 'GR20 Corsica',
		year: '2023',
		date: 'Summer 2023',
		image: '/images/gr20-summit.jpg',
		stats: [
			{ label: 'Duration', value: '9 days' },
			{ label: 'Section', value: 'Northern part' },
			{ label: 'Shelter', value: 'Only tent' }
		],
		description: 'GR20 Corsica - 9 Tage Nordteil mit Zelt'
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
			{ label: 'Distance', value: '719km' },
			{ label: 'Elevation', value: '10.030m ↑ / 10.530m ↓' },
			{ label: 'Shelter', value: 'Mostly tent' }
		],
		description: 'Radtour AT → SI → HR mit Zelt'
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
