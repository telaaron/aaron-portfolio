import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger);
}

/**
 * Fade in element from bottom on scroll
 */
export function fadeInUp(element: HTMLElement, delay = 0) {
	if (typeof window === 'undefined') return;
	
	gsap.fromTo(
		element,
		{
			opacity: 0,
			y: 50
		},
		{
			opacity: 1,
			y: 0,
			duration: 0.8,
			delay,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: element,
				start: 'top 85%',
				toggleActions: 'play none none reverse'
			}
		}
	);
}

/**
 * Stagger animation for multiple children
 */
export function staggerFadeIn(container: HTMLElement, childSelector: string, staggerDelay = 0.1) {
	if (typeof window === 'undefined') return;
	
	const children = container.querySelectorAll(childSelector);
	
	gsap.fromTo(
		children,
		{
			opacity: 0,
			y: 30
		},
		{
			opacity: 1,
			y: 0,
			duration: 0.6,
			stagger: staggerDelay,
			ease: 'power2.out',
			scrollTrigger: {
				trigger: container,
				start: 'top 80%',
				toggleActions: 'play none none reverse'
			}
		}
	);
}

/**
 * Scale in animation for cards
 */
export function scaleIn(element: HTMLElement, delay = 0) {
	if (typeof window === 'undefined') return;
	
	gsap.fromTo(
		element,
		{
			opacity: 0,
			scale: 0.9
		},
		{
			opacity: 1,
			scale: 1,
			duration: 0.7,
			delay,
			ease: 'back.out(1.2)',
			scrollTrigger: {
				trigger: element,
				start: 'top 85%',
				toggleActions: 'play none none reverse'
			}
		}
	);
}

/**
 * Slide in from left
 */
export function slideInLeft(element: HTMLElement, delay = 0) {
	if (typeof window === 'undefined') return;
	
	gsap.fromTo(
		element,
		{
			opacity: 0,
			x: -50
		},
		{
			opacity: 1,
			x: 0,
			duration: 0.8,
			delay,
			ease: 'power3.out',
			scrollTrigger: {
				trigger: element,
				start: 'top 85%',
				toggleActions: 'play none none reverse'
			}
		}
	);
}

/**
 * Parallax effect on scroll
 */
export function parallax(element: HTMLElement, speed = 0.5) {
	if (typeof window === 'undefined') return;
	
	gsap.to(element, {
		y: () => window.innerHeight * speed * 0.3,
		ease: 'none',
		scrollTrigger: {
			trigger: element,
			start: 'top bottom',
			end: 'bottom top',
			scrub: true
		}
	});
}

/**
 * Cleanup all ScrollTrigger instances (call on component destroy)
 */
export function cleanupScrollTriggers() {
	if (typeof window !== 'undefined') {
		ScrollTrigger.getAll().forEach(trigger => trigger.kill());
	}
}

/**
 * Initialize scroll reveal (CSS-based fallback)
 */
export function initScrollReveal() {
	if (typeof window === 'undefined') return;

	const revealElements = document.querySelectorAll('.reveal');

	const revealObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('revealed');
				}
			});
		},
		{
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px'
		}
	);

	revealElements.forEach((el) => revealObserver.observe(el));

	return () => {
		revealElements.forEach((el) => revealObserver.unobserve(el));
	};
}