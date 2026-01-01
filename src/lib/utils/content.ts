import type { Language } from '$lib/stores/language';

// ============================================
// BILINGUAL CONTENT DATA
// ============================================

// Quick Links (language-independent)
export const quickLinks = [
	{ name: 'Instagram', url: 'https://instagram.com/telaaron', icon: 'instagram' },
	{ name: 'YouTube', url: 'https://www.youtube.com/@telaaron5776', icon: 'youtube' },
	{ name: 'GitHub', url: 'https://github.com/telaaron', icon: 'github' }
];

// Personal Meta
export const meta = {
	name: 'Aaron Pfützner'
};

export const manifestorMethodContent = {
	de: {
		tools: ['Claude', 'VS Code', 'SvelteKit', 'Supabase', 'Vercel'],
		projects: [
			{
				id: 'mustseen',
				name: 'MustSeen',
				status: 'Phase 2 – In Entwicklung',
				statusColor: 'blue',
				description:
					'The Execution Layer for Travel. Die Lücke zwischen AI-Fantasie und buchbarer Realität schließen.',
				longDescription:
					'Ich wollte viele Reiseideen vergleichen, aber für einen guten Gesamtpreis musste man jede Option komplett durchplanen und kohärent machen. Das dauerte ewig. AI hilft, kann aber nicht 100% sagen, ob es funktioniert – die Daten stimmen oft nicht mehr. MustSeen löst das: Es transformiert unstrukturierte Reisepläne in validierte, buchbare Itinerare mit Live-Daten.',
				problem: 'Reiseideen vergleichen war unmöglich ohne jede Option manuell durchzuplanen. AI-Vorschläge klingen toll, sind aber oft logistisch unmöglich.',
				solution: 'Ein System, das natürliche Sprache parst, Reiseintent extrahiert, gegen Live-APIs validiert und nur buchbare Trips zeigt.',
				features: [
					'Natural Language Travel Intent Parsing',
					'Multi-dimensionale Validierung (Zeit, Ort, Budget, Logik)',
					'Real-time Verfügbarkeit & Preise',
					'Coherence Engine – nur was wirklich funktioniert'
				],
				tech: ['SvelteKit', 'Supabase', 'TypeScript', 'Claude API'],
				link: 'https://github.com/telaaron/mustseen-bridge-engine',
				image: '/images/mustseen-mockup-minimal.png',
				logo: '/images/mustseen-logo.svg'
			},
			{
				id: 'spiritual-companion',
				name: 'Spiritual Companion',
				status: 'MVP Live',
				statusColor: 'green',
				description: 'AI-gestützte spirituelle Begleitung mit echten Bibelversen.',
				longDescription:
					'Kein gewöhnlicher Chatbot. Bevor die AI antwortet, durchsucht eine Vektordatenbank relevante Bibelverse. Diese werden dann an die AI weitergegeben – so sind die Antworten in der Bibel verwurzelt, nicht in beliebigem Internet-Content.',
				problem: 'Normale AI-Chatbots geben generische spirituelle Ratschläge ohne biblische Grundlage.',
				solution: 'Vektordatenbank-Suche findet erst passende Bibelverse, die dann als Kontext an die AI gehen.',
				features: [
					'Bibelvers-Suche via Vektordatenbank',
					'Kontextbasierte AI-Antworten',
					'Personalisierte spirituelle Gespräche',
					'Journaling & Reflection Integration'
				],
				tech: ['Python', 'Claude', 'SvelteKit', 'Vektordatenbank'],
				link: 'https://github.com/telaaron/spiritual-companion',
				image: '/images/spiritual-companion.jpg'
			}
		]
	},
	en: {
		tools: ['Claude', 'VS Code', 'SvelteKit', 'Supabase', 'Vercel'],
		projects: [
			{
				id: 'mustseen',
				name: 'MustSeen',
				status: 'Phase 2 – In Development',
				statusColor: 'blue',
				description:
					'The Execution Layer for Travel. Bridging the gap between AI fantasy and bookable reality.',
				longDescription:
					'I wanted to compare many travel ideas, but for a good total price, you had to plan each option completely and make it coherent. That took forever. AI helps, but can\'t say 100% if it works – the data is often outdated. MustSeen solves this: It transforms unstructured travel plans into validated, bookable itineraries with live data.',
				problem: 'Comparing travel ideas was impossible without manually planning each option. AI suggestions sound great but are often logistically impossible.',
				solution: 'A system that parses natural language, extracts travel intent, validates against live APIs, and only shows bookable trips.',
				features: [
					'Natural Language Travel Intent Parsing',
					'Multi-dimensional Validation (Time, Location, Budget, Logic)',
					'Real-time Availability & Pricing',
					'Coherence Engine – only what actually works'
				],
				tech: ['SvelteKit', 'Supabase', 'TypeScript', 'Claude API'],
				link: 'https://github.com/telaaron/mustseen-bridge-engine',
				image: '/images/mustseen-mockup-minimal.png',
				logo: '/images/mustseen-logo.svg'
			},
			{
				id: 'spiritual-companion',
				name: 'Spiritual Companion',
				status: 'MVP Live',
				statusColor: 'green',
				description: 'AI-powered spiritual guidance with real Bible verses.',
				longDescription:
					'Not your ordinary chatbot. Before the AI responds, a vector database searches for relevant Bible verses. These are then passed to the AI – so responses are rooted in Scripture, not random internet content.',
				problem: 'Normal AI chatbots give generic spiritual advice without biblical foundation.',
				solution: 'Vector database search finds matching Bible verses first, which then go as context to the AI.',
				features: [
					'Bible verse search via vector database',
					'Context-based AI responses',
					'Personalized spiritual conversations',
					'Journaling & Reflection Integration'
				],
				tech: ['Python', 'Claude', 'SvelteKit', 'Vector Database'],
				link: 'https://github.com/telaaron/spiritual-companion',
				image: '/images/spiritual-companion.jpg'
			}
		]
	}
};

export const frequenzenContent = {
	de: {
		ensembles: [
			{
				name: 'UdK Bigband',
				instrument: 'Bassposaune',
				type: 'Jazz/Funk',
				active: true
			},
			{
				name: 'Hermann-Ober Orchester',
				instrument: 'Posaune',
				type: 'Symphonisch',
				active: true
			},
			{
				name: 'Hermann-Ober Jugendchor',
				instrument: 'Klavier',
				type: 'Latin Jazz Mass',
				active: true
			},
			{
				name: '2x Posaunenchor',
				instrument: 'Posaune',
				type: 'Kirchlich',
				active: true
			}
		],
		highlights: [
			'Klavier seit dem 6. Lebensjahr',
			'Klavierlehrer für Anfänger & Fortgeschrittene',
			'Jazz-Improvisation in Open Studio Kursen'
		],
		youtubeVideos: [
			{
				title: 'Klavier mit 10 Jahren',
				url: 'https://youtu.be/s8ZM3CSoohM?si=MGkRTzN2HtixYTF5',
				year: 2016
			},
			{
				title: 'Klavier mit 18 Jahren',
				url: 'https://youtu.be/teC5BZhO598?si=SCKmskgDplZVhwAx',
				year: 2024
			}
		],
		gallery: [
			'/images/musik/675924D2-D207-4B6E-A3CE-E3686D9248DB.jpeg',
			'/images/musik/99DC5488-26EB-4BD8-A779-57747588DDB1_1_102_o.jpeg',
			'/images/musik/1BC15E1D-29FD-4965-9FC6-25408DE6DC37_1_105_c.jpeg',
			'/images/musik/22EA7B72-0CB5-4CC6-8401-785A91207809_1_105_c.jpeg',
			'/images/musik/2478B9BA-0A56-4D2C-99CF-44D6320A8331_1_105_c.jpeg',
			'/images/musik/55D4D68A-B63F-456B-86D5-96BD3314492D_1_105_c.jpeg',
			'/images/musik/62D7E36C-71AC-4F6A-B3AE-522CDDD8D043_1_105_c.jpeg',
			'/images/musik/6DA6ACBF-0D64-44ED-9AD8-217D099F811A_1_105_c.jpeg',
			'/images/musik/747A597B-F6AE-4239-8988-ED2D35B9A85E_1_105_c.jpeg',
			'/images/musik/7C5AC0E6-2825-4C65-B3CC-591260B4614C_1_105_c.jpeg',
			'/images/musik/82526C17-1ED1-4ED9-8C59-43251D8C8B5C_1_105_c.jpeg',
			'/images/musik/9B799541-1DAF-4869-A0AC-D02175DFA42A_1_105_c.jpeg',
			'/images/musik/CA6C18F8-CC47-4E5E-889A-92958BEA5140_1_105_c.jpeg',
			'/images/musik/E46F1780-A8C4-4742-80C9-C245E1531A20_1_105_c.jpeg',
			'/images/musik/FA44620B-1A0B-45BB-BECD-C7BB5C92EA75_1_105_c.jpeg'
		],
		videos: ['/images/musik/IMG_0482.mov']
	},
	en: {
		ensembles: [
			{
				name: 'UdK Big Band',
				instrument: 'Bass Trombone',
				type: 'Jazz/Funk',
				active: true
			},
			{
				name: 'Hermann-Ober Orchestra',
				instrument: 'Trombone',
				type: 'Symphonic',
				active: true
			},
			{
				name: 'Hermann-Ober Youth Choir',
				instrument: 'Piano',
				type: 'Latin Jazz Mass',
				active: true
			},
			{
				name: '2x Church Brass Band',
				instrument: 'Trombone',
				type: 'Church Music',
				active: true
			}
		],
		highlights: [
			'Playing piano since age 6',
			'Piano teacher for beginners & advanced',
			'Jazz improvisation in Open Studio courses'
		],
		youtubeVideos: [
			{
				title: 'Piano at 10 years old',
				url: 'https://youtu.be/WnFQ0LrVwHQ?si=z-zI3r7cG1YkT6hn',
				year: 2016
			},
			{
				title: 'Piano at 18 years old',
				url: 'https://youtu.be/teC5BZhO598?si=SCKmskgDplZVhwAx',
				year: 2024
			}
		],
		gallery: [
			'/images/musik/675924D2-D207-4B6E-A3CE-E3686D9248DB.jpeg',
			'/images/musik/99DC5488-26EB-4BD8-A779-57747588DDB1_1_102_o.jpeg',
			'/images/musik/1BC15E1D-29FD-4965-9FC6-25408DE6DC37_1_105_c.jpeg',
			'/images/musik/22EA7B72-0CB5-4CC6-8401-785A91207809_1_105_c.jpeg',
			'/images/musik/2478B9BA-0A56-4D2C-99CF-44D6320A8331_1_105_c.jpeg',
			'/images/musik/55D4D68A-B63F-456B-86D5-96BD3314492D_1_105_c.jpeg',
			'/images/musik/62D7E36C-71AC-4F6A-B3AE-522CDDD8D043_1_105_c.jpeg',
			'/images/musik/6DA6ACBF-0D64-44ED-9AD8-217D099F811A_1_105_c.jpeg',
			'/images/musik/747A597B-F6AE-4239-8988-ED2D35B9A85E_1_105_c.jpeg',
			'/images/musik/7C5AC0E6-2825-4C65-B3CC-591260B4614C_1_105_c.jpeg',
			'/images/musik/82526C17-1ED1-4ED9-8C59-43251D8C8B5C_1_105_c.jpeg',
			'/images/musik/9B799541-1DAF-4869-A0AC-D02175DFA42A_1_105_c.jpeg',
			'/images/musik/CA6C18F8-CC47-4E5E-889A-92958BEA5140_1_105_c.jpeg',
			'/images/musik/E46F1780-A8C4-4742-80C9-C245E1531A20_1_105_c.jpeg',
			'/images/musik/FA44620B-1A0B-45BB-BECD-C7BB5C92EA75_1_105_c.jpeg'
		],
		videos: ['/images/musik/IMG_0482.mov']
	}
};

export const bewegungContent = {
	de: {
		activities: [
			{
				id: 'calisthenics',
				name: 'Calisthenics',
				icon: '💪',
				description: 'Main Sport nach Ian Baseagle Plan',
				details: [
					'Muscle-Up ✓',
					'Weighted Pull-Ups',
					'Weighted Dips',
					'Weighted Push-Ups',
					'Progressive Overload Focus'
				],
				frequency: '4x/Woche'
			},
			{
				id: 'wimhof',
				name: 'Wim Hof Methode',
				icon: '❄️',
				description: 'Kälte-Mindset & Atemtechnik',
				details: [
					'Eisbaden im Schlachtensee',
					'3-4 Runden Atemtechnik täglich',
					'Kalte Duschen am Morgen',
					'Mentale Stärke & Fokus',
					'Immunsystem & Recovery',
					'Stress-Resistenz aufbauen'
				],
				frequency: '2-3x/Woche',
				image: '/images/bewegung/eisbaden.jpg'
			},
			{
				id: 'running',
				name: 'Laufen',
				icon: '🏃',
				description: '10km Runs',
				details: [
					'Regelmäßige 10km Läufe',
					'Ausdauer & Cardio',
					'Recovery zwischen Workouts',
					'Mental Clarity'
				],
				frequency: '1x/Woche'
			}
		]
	},
	en: {
		activities: [
			{
				id: 'calisthenics',
				name: 'Calisthenics',
				icon: '💪',
				description: 'Main Sport following Ian Baseagle Plan',
				details: [
					'Muscle-Up ✓',
					'Weighted Pull-Ups',
					'Weighted Dips',
					'Weighted Push-Ups',
					'Progressive Overload Focus'
				],
				frequency: '4x/week'
			},
			{
				id: 'wimhof',
				name: 'Wim Hof Method',
				icon: '❄️',
				description: 'Cold Mindset & Breathing Technique',
				details: [
					'Ice Bathing in Schlachtensee',
					'3-4 Breathing Rounds Daily',
					'Cold Showers in the Morning',
					'Mental Strength & Focus',
					'Immune System & Recovery',
					'Build Stress Resistance'
				],
				frequency: '2-3x/week',
				image: '/images/bewegung/eisbaden.jpg'
			},
			{
				id: 'running',
				name: 'Running',
				icon: '🏃',
				description: '10km Runs',
				details: [
					'Regular 10km Runs',
					'Endurance & Cardio',
					'Recovery Between Workouts',
					'Mental Clarity'
				],
				frequency: '1x/week'
			}
		]
	}
};

export const expeditionenContent = {
	de: {
		trips: [
			{
				id: 'marathon',
				name: 'Marathon',
				year: 2024,
				location: 'Berlin – Schlachtensee',
				image: '/images/marathon-finish.jpg',
				stats: {
					time: '5:30h',
					team: '2 Läufer + 1 Radbegleitung',
					training: '20 Leute Community'
				},
				story: `Sah auf YouTube jemanden der mehrere Marathons in einer Woche lief. Dachte: Kann ich auch.

Flyer erstellt, WhatsApp-Community gegründet – in der Spitze 20 Leute. Gemeinsam trainiert, Trainingsplan durchgezogen. Mein Highlight: Wache auf, 2 Blöcke Schulausfall. Dachte mir: Okay, dann lauf ich jetzt 30km. 6x die gleiche 5km-Runde, jedes Mal die Pferde gegrüßt. In 3 Stunden. Sehr stark.

Am Termintag war ich krank – verschoben. Am Ende zu zweit gelaufen plus Philipp mit dem Rad. Apple Watch musste mehrfach an die Powerbank, wir sind falsch gelaufen und mussten umdrehen, und Philipp hat sein Rad jede verdammte Treppe hochgetragen.

Als wir ankamen war ich so happy, dass ich es jedem Stranger erzählen musste. Ein Opa kam aus dem Wasser – meinte er trainiert gerade für den IronMan.`,
				tags: ['Laufen', 'Community', 'DIY', 'Durchhalten']
			},
			{
				id: 'balkangurken',
				name: 'Balkan-Gurken',
				year: 2024,
				location: 'Transdinarica: Udine → Split',
				image: '/images/BalkanGurken/1F3A6C87-BB3C-4E31-8441-ED511CFB70D9_1_105_c.jpeg',
				stats: {
					distance: '720km',
					elevation: '5.000hm',
					time: '9 Tage'
				},
				story: `Transdinarica-Route: Von Triest nach Split mit dem Rad. Das war der Plan.

Nach 24h Zugfahrt kommen wir in Udine an – weil der Zug nach Triest uns einfach nicht mitgenommen hat. Zelt irgendwo aufgeschlagen. So beginnt die Reise.

Was folgte: Geisteskranke Höhenmeter. Absurde Distanzen. Wind der unseren Kochtopf weggeweht hat. Von der Polizei verfolgt. In einer Schafherde gezeltet. Schlangen. Anstiege die man nicht mehr fahren konnte – nur noch schieben. Lost Places wo wir bei Bora-Winden gepennt haben. Komplett einsturzgefährdet. Aber trocken.

In Split angekommen: Erstmal chillen. Dann mit dort gefundenen Fahrradkartons im Schulbus zum Airport. Mit unseren Rädern nach Hause geflogen.

Das war die Kurzfassung. Vielleicht kommt 2026 ein Film.`,
				tags: ['Bikepacking', 'Transdinarica', 'Chaos', 'Abenteuer'],
				comingSoon: 'Film 2026',
				gallery: [
					{
						url: '/images/BalkanGurken/1F3A6C87-BB3C-4E31-8441-ED511CFB70D9_1_105_c.jpeg',
						caption: 'Tag 1 – Udine statt Triest'
					},
					{
						url: '/images/BalkanGurken/69DCBC63-58B8-4EC1-B44F-23AC9734D530_1_105_c.jpeg',
						caption: 'Anstiege die man nicht mehr fahren konnte'
					},
					{
						url: '/images/BalkanGurken/742006F7-DE5E-43BD-B51B-098AB5775E32_1_105_c.jpeg',
						caption: 'Lost Place bei Bora-Wind'
					},
					{
						url: '/images/BalkanGurken/811DC580-0CA8-4F2B-B7D0-CCF5E0B3DC6D_4_5005_c.jpeg',
						caption: 'Adriatische Küste – endlich flach'
					},
					{
						url: '/images/BalkanGurken/9B46DA1C-BB29-462B-AE20-BFE3E66193B1_4_5005_c.jpeg',
						caption: 'Split – geschafft'
					}
				]
			}
		],
		planned: [
			{
				id: 'gr20',
				name: 'GR20',
				year: 2023,
				location: 'Korsika',
				teaser: 'Europas härtester Fernwanderweg. Mit 3 Schulkameraden.',
				status: 'Coming Soon'
			},
			{
				id: 'alpencross',
				name: 'Alpenüberquerung',
				year: 2024,
				location: 'Alpen',
				teaser: 'Zu 11 gestartet, zu 7 angekommen.',
				status: 'Coming Soon'
			},
			'Island 2025',
			'Nordkap mit dem Rad'
		]
	},
	en: {
		trips: [
			{
				id: 'marathon',
				name: 'Marathon',
				year: 2024,
				location: 'Berlin – Schlachtensee',
				image: '/images/marathon-finish.jpg',
				stats: {
					time: '5:30h',
					team: '2 runners + 1 bike support',
					training: '20 people community'
				},
				story: `Saw someone on YouTube who ran multiple marathons in one week. Thought: I can do that too.

Created flyers, started a WhatsApp community – peaked at 20 people. Trained together, followed a training plan. My highlight: Woke up, saw I had 2 blocks of school cancelled. Thought: Okay, I'll run 30km now. 6x the same 5km loop, greeted the horses every time. In 3 hours. Very strong.

On race day I was sick – postponed. In the end, ran it with one friend plus Philipp on his bike. Apple Watch needed charging multiple times, we took wrong turns and had to backtrack, and Philipp carried his bike up every damn staircase.

When we finished I was so happy I had to tell every stranger. An old man came out of the lake – said he was training for an IronMan.`,
				tags: ['Running', 'Community', 'DIY', 'Perseverance']
			},
			{
				id: 'balkangurken',
				name: 'Balkan Cucumbers',
				year: 2024,
				location: 'Transdinarica: Udine → Split',
				image: '/images/BalkanGurken/1F3A6C87-BB3C-4E31-8441-ED511CFB70D9_1_105_c.jpeg',
				stats: {
					distance: '720km',
					elevation: '5,000m',
					time: '9 days'
				},
				story: `Transdinarica route: Trieste to Split by bike. That was the plan.

After 24h on trains we arrive in Udine – because the train to Trieste simply refused to take us. Set up tent somewhere random. And so the journey begins.

What followed: Insane elevation gain. Absurd distances. Wind that blew away our cooking pot. Chased by police. Camped in a sheep herd. Snakes. Climbs you couldn't ride anymore – just push. Lost places where we slept during Bora winds. Completely unsafe structures. But dry.

Arrived in Split: First, chill. Then found cardboard bike boxes, took a school bus to the airport. Flew home with our bikes.

That was the short version. Maybe a film in 2026.`,
				tags: ['Bikepacking', 'Transdinarica', 'Chaos', 'Adventure'],
				comingSoon: 'Film 2026',
				gallery: [
					{
						url: '/images/BalkanGurken/1F3A6C87-BB3C-4E31-8441-ED511CFB70D9_1_105_c.jpeg',
						caption: 'Day 1 – Udine instead of Trieste'
					},
					{
						url: '/images/BalkanGurken/69DCBC63-58B8-4EC1-B44F-23AC9734D530_1_105_c.jpeg',
						caption: 'Climbs you couldn\'t ride anymore'
					},
					{
						url: '/images/BalkanGurken/742006F7-DE5E-43BD-B51B-098AB5775E32_1_105_c.jpeg',
						caption: 'Lost place during Bora winds'
					},
					{
						url: '/images/BalkanGurken/811DC580-0CA8-4F2B-B7D0-CCF5E0B3DC6D_4_5005_c.jpeg',
						caption: 'Adriatic coast – finally flat'
					},
					{
						url: '/images/BalkanGurken/9B46DA1C-BB29-462B-AE20-BFE3E66193B1_4_5005_c.jpeg',
						caption: 'Split – made it'
					}
				]
			}
		],
		planned: [
			{
				id: 'gr20',
				name: 'GR20',
				year: 2023,
				location: 'Corsica',
				teaser: 'Europe\'s toughest long-distance trail. With 3 school friends.',
				status: 'Coming Soon'
			},
			{
				id: 'alpencross',
				name: 'Alpine Crossing',
				year: 2024,
				location: 'Alps',
				teaser: 'Started with 11, finished with 7.',
				status: 'Coming Soon'
			},
			'Iceland 2025',
			'North Cape by Bike'
		]
	}
};

export const lifestyleContent = {
	de: {
		hobbies: [
			{
				id: 'tech-automation',
				name: 'Tech & Home Automation',
				icon: 'Home',
				description: 'Home Assistant, Elektronik basteln & reparieren'
			},
			{
				id: 'content-creation',
				name: 'Content Creation',
				icon: 'Video',
				description: 'Motivation-Reels, Portfolio Website, Storytelling & kurze Videos'
			},
			{
				id: 'faith-community',
				name: 'Glaube & Gemeinschaft',
				icon: 'Users',
				description: 'Gespräche über christlichen Glauben, GrowTogether Mastermind'
			},
			{
				id: 'finance-crypto',
				name: 'Finanzen & Krypto',
				icon: 'Bitcoin',
				description: 'Bitcoin & Kryptowährungen, Hardware-Wallets, Aktien'
			},
			{
				id: 'sailing',
				name: 'Segeln',
				icon: 'Anchor',
				description: 'Segelclub in Berlin (in Planung)'
			}
		]
	},
	en: {
		hobbies: [
			{
				id: 'tech-automation',
				name: 'Tech & Home Automation',
				icon: 'Home',
				description: 'Home Assistant, electronics tinkering & repair'
			},
			{
				id: 'content-creation',
				name: 'Content Creation',
				icon: 'Video',
				description: 'Motivation reels, Portfolio Website, storytelling & short videos'
			},
			{
				id: 'faith-community',
				name: 'Faith & Community',
				icon: 'Users',
				description: 'Conversations about Christian faith, GrowTogether Mastermind'
			},
			{
				id: 'finance-crypto',
				name: 'Finance & Crypto',
				icon: 'Bitcoin',
				description: 'Bitcoin & cryptocurrencies, hardware wallets, stocks'
			},
			{
				id: 'sailing',
				name: 'Sailing',
				icon: 'Anchor',
				description: 'Sailing club in Berlin (planned)'
			}
		]
	}
};

// Helper functions to get content based on current language
export function getManifestorMethod(lang: Language) {
	return manifestorMethodContent[lang];
}

export function getFrequenzen(lang: Language) {
	return frequenzenContent[lang];
}

export function getBewegung(lang: Language) {
	return bewegungContent[lang];
}

export function getExpeditionen(lang: Language) {
	return expeditionenContent[lang];
}

export function getLifestyle(lang: Language) {
	return lifestyleContent[lang];
}
