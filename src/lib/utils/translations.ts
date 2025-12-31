import type { Language } from '$lib/stores/language';

// ============================================
// TRANSLATIONS STRUCTURE
// ============================================

export const translations = {
	de: {
		meta: {
			title: 'Aaron Pfützner - Ideen → Realität',
			description: 'Ich übersetze. AI baut. Manifestor, Musiker, Athlet.'
		},
		hero: {
			quickLinks: 'Schnelllinks',
			viewProjects: 'Projekte ansehen',
			contact: 'Kontakt',
			scroll: 'Scroll'
		},
		manifestorMethod: {
			sectionLabel: 'The Manifestor Method',
			tagline: 'Impulse → AI-gestützte Realität',
			description: 'Ich habe als Manifestor eigenständig Impulse und Ideen. Diese setze ich gezielt mit AI um – von Konzept bis zur funktionierenden Realität.',
			philosophy: 'Nicht auf Kunden warten. Selbst kreieren. Mit AI schneller machen.',
			tools: 'Werkzeuge',
			origin: 'Eigene Vision',
			features: 'Features'
		},
		frequenzen: {
			sectionLabel: 'Frequenzen',
			tagline: 'Von Bassposaune bis Jazz-Piano',
			highlights: 'Highlights',
			recordings: 'Aufnahmen',
			moments: 'Momente'
		},
		bewegung: {
			sectionLabel: 'Bewegung',
			tagline: 'Disziplin. Kälte. Wille.',
			philosophy: 'Ian Baseagle + Wim Hof Methode'
		},
		expeditionen: {
			sectionLabel: 'Expeditionen',
			tagline: 'Nicht Urlaub. Expedition.',
			selectTrip: 'Trip auswählen',
			backToList: 'Zurück zur Übersicht',
			story: 'Story',
			highlights: 'Highlights',
			tags: 'Tags',
			planned: 'Geplant'
		},
		lifestyle: {
			sectionLabel: 'Lifestyle',
			tagline: 'Hobbies & Leidenschaften'
		},
		footer: {
			description: 'Manifestor. Builder. Läufer. Musiker.',
			rights: 'Alle Rechte vorbehalten.'
		}
	},
	en: {
		meta: {
			title: 'Aaron Pfützner - Ideas → Reality',
			description: 'I translate. AI builds. Manifestor, Musician, Athlete.'
		},
		hero: {
			quickLinks: 'Quick Links',
			viewProjects: 'View Projects',
			contact: 'Contact',
			scroll: 'Scroll'
		},
		manifestorMethod: {
			sectionLabel: 'The Manifestor Method',
			tagline: 'Impulses → AI-Powered Reality',
			description: 'As a Manifestor, I independently have impulses and ideas. I implement them strategically with AI – from concept to working reality.',
			philosophy: "Don't wait for clients. Create yourself. Make it faster with AI.",
			tools: 'Tools',
			origin: 'Own Vision',
			features: 'Features'
		},
		frequenzen: {
			sectionLabel: 'Frequencies',
			tagline: 'From Bass Trombone to Jazz Piano',
			highlights: 'Highlights',
			recordings: 'Recordings',
			moments: 'Moments'
		},
		bewegung: {
			sectionLabel: 'Movement',
			tagline: 'Discipline. Cold. Will.',
			philosophy: 'Ian Baseagle + Wim Hof Method'
		},
		expeditionen: {
			sectionLabel: 'Expeditions',
			tagline: 'Not Vacation. Expedition.',
			selectTrip: 'Select Trip',
			backToList: 'Back to Overview',
			story: 'Story',
			highlights: 'Highlights',
			tags: 'Tags',
			planned: 'Planned'
		},
		lifestyle: {
			sectionLabel: 'Lifestyle',
			tagline: 'Hobbies & Passions'
		},
		footer: {
			description: 'Manifestor. Builder. Runner. Musician.',
			rights: 'All rights reserved.'
		}
	}
};

export function t(lang: Language) {
	return translations[lang];
}
