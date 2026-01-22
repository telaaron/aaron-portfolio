import type { Language } from '$lib/stores/language';

// ============================================
// TRANSLATIONS STRUCTURE
// ============================================

export const translations = {
	de: {
		meta: {
			title: 'Aaron Pfützner - Portfolio',
			description: 'Software-Projekte, Musik, Reisen & mehr. Ein digitales Logbuch.'
		},
		hero: {
			quickLinks: 'Schnelllinks',
			viewProjects: 'Projekte',
			contact: 'Kontakt',
			scroll: 'Scroll'
		},
		manifestorMethod: {
			sectionLabel: 'Wie ich arbeite',
			tagline: 'Ideen → Prototypen → Realität',
			description: 'Ich baue Dinge, die mich interessieren. Mit AI als Werkzeug entstehen funktionierende Prototypen – von der ersten Idee bis zum fertigen Produkt.',
			philosophy: 'Eigene Projekte. Eigene Lösungen. Schneller mit AI.',
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
			description: 'Builder. Läufer. Musiker.',
			rights: 'Alle Rechte vorbehalten.'
		}
	},
	en: {
		meta: {
			title: 'Aaron Pfützner - Portfolio',
			description: 'Software projects, music, travel & more. A digital logbook.'
		},
		hero: {
			quickLinks: 'Quick Links',
			viewProjects: 'View Projects',
			contact: 'Contact',
			scroll: 'Scroll'
		},
		manifestorMethod: {
			sectionLabel: 'How I Work',
			tagline: 'Ideas → Prototypes → Reality',
			description: 'I build things that interest me. With AI as a tool, working prototypes emerge – from first idea to finished product.',
			philosophy: 'Own projects. Own solutions. Faster with AI.',
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
			description: 'Builder. Runner. Musician.',
			rights: 'All rights reserved.'
		}
	}
};

export function t(lang: Language) {
	return translations[lang];
}
