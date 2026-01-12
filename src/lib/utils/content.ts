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
					'Reiseideen zu vergleichen ist schwierig: Für einen guten Gesamtpreis muss man jede Option durchplanen und validieren. Das dauert ewig. AI hilft, kann aber nicht garantieren, ob es funktioniert – die Daten sind oft veraltet. MustSeen löst das: Es transformiert unstrukturierte Reisepläne in validierte, buchbare Itinerare mit Live-Daten.',
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
					'Ein Chatbot mit biblischer Grundlage. Bevor die AI antwortet, durchsucht eine Vektordatenbank relevante Bibelverse. Diese werden dann als Kontext weitergegeben – so sind die Antworten in der Bibel verwurzelt, nicht in beliebigem Internet-Content.',
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
					'Comparing travel ideas is difficult: for a good total price, you need to fully plan and validate each option. That takes forever. AI helps, but can\'t guarantee if it works – the data is often outdated. MustSeen solves this: It transforms unstructured travel plans into validated, bookable itineraries with live data.',
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
					'A chatbot with biblical foundation. Before the AI responds, a vector database searches for relevant Bible verses. These are then passed as context – so responses are rooted in Scripture, not random internet content.',
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
					'Kalte Duschen am Morgen',
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
				story: `YouTube-Video gesehen: Jemand läuft mehrere Marathons in einer Woche. Dachte: Das geht.

Flyer erstellt, WhatsApp-Community gegründet – in der Spitze 20 Leute. Gemeinsam trainiert. Ein Highlight: Schulausfall wegen Blöcken. Stattdessen spontan 30km gelaufen. 6x die gleiche 5km-Runde, immer die Pferde gegrüßt. 3 Stunden. Gut.

Am Termin krank – verschoben. Dann zu zweit plus Philipp mit dem Rad. Apple Watch musste mehrfach an die Powerbank, falsch gelaufen, umgedreht. Philipp hat sein Rad jede verdammte Treppe hochgetragen.

Als wir ankamen, musste das jedem Stranger erzählt werden. Ein Opa kam aus dem Wasser – trainiert gerade für den IronMan.`,
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
			},
			{
				id: 'gr20',
				name: 'GR20',
				year: 2023,
				location: 'Korsika',
				image: '/images/gr20/15-hoechster-punkt.png',
				stats: {
					distance: '180km',
					elevation: '10.000hm+',
					time: '9 Tage'
				},
				story: `Ursprünglich wollten wir die Alpenüberquerung machen. Eines Nachmittags saßen wir bei mir im Garten um zu planen. Kurzer Anruf bei einer der Hütten: Selbst ein Vierteljahr vorher buchen funktioniert nicht. Alles ausgebucht. Internetrecherche ergab dann den GR20.

Hinflug über München wo wir 3h bei der Tante von einem Schulkamerad geschlafen haben. Dann bei 30°C Hitze in Korsika angekommen. 4h an einer Bushaltestelle in der Sonne gegammelt bis ein Bus kam. Noch ein wenig Zeit am Meer und Pool verbracht, ehe eines Morgens um 5:15 Uhr der Wecker klingelte.

Taxi zum offiziellen Start und dann gings los. 9 Tage heftige Etappen und immer im Zelt gepennt, bei Wind und Wetter. Verrückte Kletterpassagen, Distanzen die einem den Atem rauben. Internet nur wenn man das Meer gesehen hat. Mit 16kg Rucksäcken – Zelt, Isomatte, Essen, Gaskocher, Topf und was man noch so brauchte.

Dann kamen wir an unserem Ziel an. Danach haben wir uns ein fancy Airbnb geholt – wohlgemerkt mit unseren überhitzenden Handys, die gleichzeitig versuchten die eigene Buchung zu canceln (weil unter 18) und im Call mit Papa neu zu buchen. An Powerbank hängend. Traum.

Das Airbnb war krass. Haben die 5kg die wir abgenommen haben über den Trip wieder reingeholt, weil wir uns so vollgehauen haben. Richtiger fetter Kontrast. Immer mal Strandurlaub zwischendurch.

Dann zum Abschluss der Heimflug. Erster Flug hatte Verspätung – und das war der letzte an dem Abend. Eine Nacht in Frankfurt gepennt, nachdem jeder nach einer von der Airline finanzierten 50€ McDonalds Session (der einzige Laden der noch auf hatte) im zweiten Hotel (das erste war voll) ein eigenes Zimmer bekommen hat. Erstmal die heißeste Badewanne die man sich ausdenken kann eingelassen. Nächster Tag früh los, leerer Flieger. Heading Home.`,
				tags: ['Trekking', 'Korsika', 'Camping', 'Bergsteigen'],
				gallery: [
					{ url: '/images/gr20/01-airport-ber.png', caption: 'Start am BER' },
					{ url: '/images/gr20/02-ankunft-korsika.png', caption: '30°C – Willkommen in Korsika' },
					{ url: '/images/gr20/03-warten-bus.png', caption: '4h in der Sonne auf den Bus gewartet' },
					{ url: '/images/gr20/04-strand-gammeln.png', caption: 'Noch ein wenig Meer genießen' },
					{ url: '/images/gr20/05-stoecke-kaufen.png', caption: 'Wichtige Entscheidung: Stöcke kaufen' },
					{ url: '/images/gr20/06-fruehstueck.png', caption: '5:30 Uhr Frühstück' },
					{ url: '/images/gr20/07-start.png', caption: 'Start der Tour' },
					{ url: '/images/gr20/08-erster-view.png', caption: 'Erster View (schon mit Blase)' },
					{ url: '/images/gr20/09-wlan-aussicht.png', caption: 'Aussicht aufs Meer = WLAN' },
					{ url: '/images/gr20/10-erster-zeltplatz.png', caption: 'Erster Zeltplatz' },
					{ url: '/images/gr20/11-view.png', caption: 'Views die einem den Atem rauben' },
					{ url: '/images/gr20/12-naechster-morgen.png', caption: 'Nächster Morgen, kein Bock mehr' },
					{ url: '/images/gr20/13-view-2.png', caption: 'Aber es geht weiter' },
					{ url: '/images/gr20/14-view-3.png', caption: 'Und weiter' },
					{ url: '/images/gr20/15-hoechster-punkt.png', caption: 'Gruppe am höchsten Punkt der Route' },
					{ url: '/images/gr20/16-view-5.png', caption: 'Noch mehr Views' },
					{ url: '/images/gr20/17-sprung-wasser.png', caption: 'Sprung ins Wasser' },
					{ url: '/images/gr20/18-sprung-wasser-2.png', caption: 'Noch ein Sprung' },
					{ url: '/images/gr20/19-sonnenbrand-summit.png', caption: 'Sonnenbrand am Summit' },
					{ url: '/images/gr20/20-schuh-problem.png', caption: 'Schuh macht Probleme' },
					{ url: '/images/gr20/21-view-5.png', caption: 'Mehr Views' },
					{ url: '/images/gr20/22-wasser.png', caption: 'Kristallklares Wasser' },
					{ url: '/images/gr20/23-geilster-badespot.png', caption: 'Geilster Badespot' },
					{ url: '/images/gr20/24-sonnenuntergang.png', caption: 'Sonnenuntergang in den Bergen' },
					{ url: '/images/gr20/25-airbnb-strandtag.png', caption: 'Airbnb Strandtag nach dem Trek' },
					{ url: '/images/gr20/26-mittelmeer-1.png', caption: 'Mittelmeer genießen' },
					{ url: '/images/gr20/27-mittelmeer-2.png', caption: 'Entspannung pur' },
					{ url: '/images/gr20/28-mittelmeer-3.png', caption: 'Beach vibes' },
					{ url: '/images/gr20/29-mcdonalds.png', caption: '50€ McDonalds Session in Frankfurt' },
					{ url: '/images/gr20/30-badewanne.png', caption: 'Heißeste Badewanne ever' },
					{ url: '/images/gr20/31-flug-home.png', caption: 'Flug nach Hause' }
				]
			}
		],
		planned: [
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
				story: `Saw someone on YouTube who ran multiple marathons in one week. Thought: That's doable.

Created flyers, started a WhatsApp community – peaked at 20 people. Trained together. One highlight: School cancelled due to blocks. Instead spontaneously ran 30km. 6x the same 5km loop, greeted the horses every time. 3 hours. Good.

On race day sick – postponed. Then ran with one friend plus Philipp on his bike. Apple Watch needed charging multiple times, took wrong turns, had to backtrack. Philipp carried his bike up every damn staircase.

When we finished, had to tell every stranger. An old man came out of the lake – training for an IronMan.`,
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
				image: '/images/gr20/15-hoechster-punkt.png',
				stats: {
					distance: '180km',
					elevation: '10,000m+',
					time: '9 days'
				},
				story: `Originally wanted to do the Alps crossing. One afternoon we sat in my garden planning. Quick call to one of the huts: Booking even three months ahead doesn't work. Everything fully booked. Internet research led us to the GR20.

Flight via Munich where we slept 3 hours at a schoolmate's aunt's place. Then arrived in Corsica at 30°C heat. Spent 4 hours at a bus stop in the sun until a bus came. Enjoyed some time at the sea and pool before the alarm rang at 5:15 AM one morning.

Taxi to the official start and off we went. 9 days of tough stages, always sleeping in the tent, through wind and weather. Crazy climbing passages, distances that take your breath away. Internet only when you could see the sea. With 16kg backpacks – tent, sleeping pad, food, gas stove, pot and everything else you need.

Then we arrived at our destination. After that we got a fancy Airbnb – mind you with our overheating phones, which were simultaneously trying to cancel their own booking (because under 18) and rebook via call with Dad. Hanging on powerbanks. Dream.

The Airbnb was insane. Gained back the 5kg we lost on the trip because we ate so much. Real contrast. Beach vacation in between.

Then finally the flight home. First flight was delayed – and it was the last one that evening. Spent a night in Frankfurt after everyone got their own room in the second hotel (first one was full) after an airline-sponsored 50€ McDonalds session (the only place still open). First thing: hottest bath you can imagine. Next day early departure, empty plane. Heading Home.`,
				tags: ['Trekking', 'Corsica', 'Camping', 'Mountaineering'],
				gallery: [
					{ url: '/images/gr20/01-airport-ber.png', caption: 'Start at BER' },
					{ url: '/images/gr20/02-ankunft-korsika.png', caption: '30°C – Welcome to Corsica' },
					{ url: '/images/gr20/03-warten-bus.png', caption: 'Waited 4h in the sun for the bus' },
					{ url: '/images/gr20/04-strand-gammeln.png', caption: 'Enjoying the sea a bit more' },
					{ url: '/images/gr20/05-stoecke-kaufen.png', caption: 'Important decision: buying poles' },
					{ url: '/images/gr20/06-fruehstueck.png', caption: '5:30 AM breakfast' },
					{ url: '/images/gr20/07-start.png', caption: 'Start of the tour' },
					{ url: '/images/gr20/08-erster-view.png', caption: 'First view (already with blisters)' },
					{ url: '/images/gr20/09-wlan-aussicht.png', caption: 'Sea view = WiFi' },
					{ url: '/images/gr20/10-erster-zeltplatz.png', caption: 'First campsite' },
					{ url: '/images/gr20/11-view.png', caption: 'Breathtaking views' },
					{ url: '/images/gr20/12-naechster-morgen.png', caption: 'Next morning, no more motivation' },
					{ url: '/images/gr20/13-view-2.png', caption: 'But we keep going' },
					{ url: '/images/gr20/14-view-3.png', caption: 'And going' },
					{ url: '/images/gr20/15-hoechster-punkt.png', caption: 'Group at the highest point' },
					{ url: '/images/gr20/16-view-5.png', caption: 'Even more views' },
					{ url: '/images/gr20/17-sprung-wasser.png', caption: 'Jump into the water' },
					{ url: '/images/gr20/18-sprung-wasser-2.png', caption: 'Another jump' },
					{ url: '/images/gr20/19-sonnenbrand-summit.png', caption: 'Sunburn at the summit' },
					{ url: '/images/gr20/20-schuh-problem.png', caption: 'Shoe causing problems' },
					{ url: '/images/gr20/21-view-5.png', caption: 'More views' },
					{ url: '/images/gr20/22-wasser.png', caption: 'Crystal clear water' },
					{ url: '/images/gr20/23-geilster-badespot.png', caption: 'Best swimming spot' },
					{ url: '/images/gr20/24-sonnenuntergang.png', caption: 'Mountain sunset' },
					{ url: '/images/gr20/25-airbnb-strandtag.png', caption: 'Airbnb beach day after the trek' },
					{ url: '/images/gr20/26-mittelmeer-1.png', caption: 'Enjoying the Mediterranean' },
					{ url: '/images/gr20/27-mittelmeer-2.png', caption: 'Pure relaxation' },
					{ url: '/images/gr20/28-mittelmeer-3.png', caption: 'Beach vibes' },
					{ url: '/images/gr20/29-mcdonalds.png', caption: '50€ McDonalds session in Frankfurt' },
					{ url: '/images/gr20/30-badewanne.png', caption: 'Hottest bath ever' },
					{ url: '/images/gr20/31-flug-home.png', caption: 'Flight home' }
				]
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
