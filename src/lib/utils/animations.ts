// GSAP animations - Apple-style, scroll-coupled premium animations
// Inspired by Apple.com, Linear, Stripe, and GSAP showcase demos

let gsap: any;
let ScrollTrigger: any;
let initialized = false;

// Custom easing curves for Apple-like smoothness
const EASE = {
	// Apple's signature smooth ease
	smooth: 'power2.inOut',
	// Soft deceleration
	softOut: 'power3.out',
	// Dramatic entrance
	dramatic: 'expo.out',
	// Elastic bounce (subtle)
	elastic: 'elastic.out(1, 0.5)',
	// Custom bezier for text reveals
	textReveal: 'power4.out',
	// Smooth scrub feel
	scrub: 'none'
};

// Initialize GSAP with plugins
async function initGSAP() {
	if (typeof window === 'undefined' || initialized) return;
	
	const gsapModule = await import('gsap');
	const scrollTriggerModule = await import('gsap/dist/ScrollTrigger');
	
	gsap = gsapModule.gsap || gsapModule.default;
	ScrollTrigger = scrollTriggerModule.ScrollTrigger;
	
	gsap.registerPlugin(ScrollTrigger);
	
	// Global GSAP defaults
	gsap.defaults({
		ease: EASE.softOut,
		duration: 1
	});
	
	// ScrollTrigger config
	ScrollTrigger.config({
		ignoreMobileResize: true
	});
	
	initialized = true;
}

// Auto-init on import
if (typeof window !== 'undefined') {
	initGSAP();
}

/**
 * Ensure GSAP is ready before running animations
 */
export async function ensureGSAP() {
	if (!initialized) {
		await initGSAP();
	}
	return { gsap, ScrollTrigger };
}

// ============================================
// APPLE-STYLE HERO ANIMATIONS
// ============================================

/**
 * Hero text reveal with clip-path wipe (like Apple product pages)
 */
export async function heroTextClipReveal(element: HTMLElement, delay = 0) {
	const { gsap } = await ensureGSAP();
	if (!gsap || !element) return;
	
	// Set initial state with clip-path
	gsap.set(element, {
		clipPath: 'inset(0 100% 0 0)',
		opacity: 1
	});
	
	gsap.to(element, {
		clipPath: 'inset(0 0% 0 0)',
		duration: 1.2,
		delay,
		ease: EASE.textReveal
	});
}

/**
 * Hero text - words reveal with Y translation and opacity
 * More subtle than character animation
 */
export async function heroWordsReveal(element: HTMLElement, delay = 0) {
	const { gsap } = await ensureGSAP();
	if (!gsap || !element) return;
	
	const text = element.textContent || '';
	const words = text.split(' ');
	element.innerHTML = '';
	
	const wordSpans: HTMLSpanElement[] = [];
	words.forEach((word) => {
		const span = document.createElement('span');
		span.textContent = word;
		span.style.display = 'inline-block';
		span.style.marginRight = '0.3em';
		span.style.overflow = 'hidden';
		
		const inner = document.createElement('span');
		inner.textContent = word;
		inner.style.display = 'inline-block';
		span.innerHTML = '';
		span.appendChild(inner);
		
		element.appendChild(span);
		wordSpans.push(inner);
	});
	
	gsap.fromTo(
		wordSpans,
		{
			y: '110%',
			opacity: 0
		},
		{
			y: '0%',
			opacity: 1,
			duration: 1,
			stagger: 0.08,
			delay,
			ease: EASE.dramatic
		}
	);
}

/**
 * Smooth fade with subtle Y movement (Apple-style)
 */
export async function smoothFadeIn(element: HTMLElement, delay = 0) {
	const { gsap } = await ensureGSAP();
	if (!gsap || !element) return;
	
	gsap.fromTo(
		element,
		{
			opacity: 0,
			y: 20
		},
		{
			opacity: 1,
			y: 0,
			duration: 1,
			delay,
			ease: EASE.smooth
		}
	);
}

// ============================================
// SCROLL-COUPLED ANIMATIONS (SCRUB)
// ============================================

/**
 * Parallax with depth - different speeds for layered effect
 */
export async function parallaxDepth(
	element: HTMLElement, 
	speed: number = 0.3,
	direction: 'up' | 'down' = 'up'
) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !element) return;
	
	const yPercent = direction === 'up' ? -speed * 100 : speed * 100;
	
	gsap.to(element, {
		yPercent,
		ease: EASE.scrub,
		scrollTrigger: {
			trigger: element,
			start: 'top bottom',
			end: 'bottom top',
			scrub: 1.5 // Smooth scrub with slight delay
		}
	});
}

/**
 * Scale on scroll - element grows/shrinks as you scroll
 */
export async function scaleOnScroll(
	element: HTMLElement,
	fromScale: number = 0.8,
	toScale: number = 1
) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !element) return;
	
	gsap.fromTo(
		element,
		{ scale: fromScale, opacity: 0.5 },
		{
			scale: toScale,
			opacity: 1,
			ease: EASE.scrub,
			scrollTrigger: {
				trigger: element,
				start: 'top 90%',
				end: 'top 30%',
				scrub: 1
			}
		}
	);
}

/**
 * Opacity fade on scroll (smooth content reveal)
 */
export async function fadeOnScroll(element: HTMLElement) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !element) return;
	
	gsap.fromTo(
		element,
		{ opacity: 0, y: 60 },
		{
			opacity: 1,
			y: 0,
			ease: EASE.scrub,
			scrollTrigger: {
				trigger: element,
				start: 'top 85%',
				end: 'top 50%',
				scrub: 1
			}
		}
	);
}

/**
 * Horizontal move on scroll (like Apple product showcases)
 */
export async function horizontalSlide(
	element: HTMLElement,
	distance: number = 100,
	direction: 'left' | 'right' = 'left'
) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !element) return;
	
	const xFrom = direction === 'left' ? distance : -distance;
	
	gsap.fromTo(
		element,
		{ x: xFrom, opacity: 0 },
		{
			x: 0,
			opacity: 1,
			ease: EASE.scrub,
			scrollTrigger: {
				trigger: element,
				start: 'top 80%',
				end: 'top 40%',
				scrub: 1.2
			}
		}
	);
}

// ============================================
// PINNED SECTIONS (IMMERSIVE SCROLLING)
// ============================================

/**
 * Pin section while content animates (Apple-style section takeover)
 */
export async function pinnedSection(
	section: HTMLElement,
	contentCallback: (progress: number) => void
) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !section) return;
	
	ScrollTrigger.create({
		trigger: section,
		start: 'top top',
		end: '+=100%',
		pin: true,
		scrub: 1,
		onUpdate: (self: any) => {
			contentCallback(self.progress);
		}
	});
}

/**
 * Fade between pinned content (like Apple feature reveals)
 */
export async function pinnedFadeSequence(
	section: HTMLElement,
	items: HTMLElement[]
) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !section || items.length === 0) return;
	
	// Set initial state
	items.forEach((item, i) => {
		gsap.set(item, { opacity: i === 0 ? 1 : 0 });
	});
	
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: section,
			start: 'top top',
			end: `+=${items.length * 100}%`,
			pin: true,
			scrub: 1
		}
	});
	
	items.forEach((item, i) => {
		if (i < items.length - 1) {
			tl.to(item, { opacity: 0, duration: 0.5 }, i);
			tl.to(items[i + 1], { opacity: 1, duration: 0.5 }, i);
		}
	});
}

// ============================================
// TEXT ANIMATIONS (PREMIUM)
// ============================================

/**
 * Line-by-line reveal with mask (like Stripe)
 */
export async function lineByLineReveal(element: HTMLElement, delay = 0) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !element) return;
	
	// Wrap each line in a mask
	const text = element.innerHTML;
	const lines = text.split('<br>').length > 1 
		? text.split('<br>') 
		: [text];
	
	element.innerHTML = '';
	
	const lineElements: HTMLElement[] = [];
	lines.forEach(line => {
		const wrapper = document.createElement('div');
		wrapper.style.overflow = 'hidden';
		wrapper.style.display = 'block';
		
		const inner = document.createElement('div');
		inner.innerHTML = line;
		inner.style.display = 'block';
		
		wrapper.appendChild(inner);
		element.appendChild(wrapper);
		lineElements.push(inner);
	});
	
	gsap.fromTo(
		lineElements,
		{ y: '100%' },
		{
			y: '0%',
			duration: 0.8,
			stagger: 0.1,
			delay,
			ease: EASE.dramatic,
			scrollTrigger: {
				trigger: element,
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		}
	);
}

/**
 * Counter animation with easing
 */
export async function animateCounter(
	element: HTMLElement,
	endValue: number,
	duration: number = 2,
	suffix: string = ''
) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !element) return;
	
	const counter = { value: 0 };
	
	gsap.to(counter, {
		value: endValue,
		duration,
		ease: 'power2.out',
		scrollTrigger: {
			trigger: element,
			start: 'top 80%',
			toggleActions: 'play none none none'
		},
		onUpdate: () => {
			element.textContent = Math.round(counter.value) + suffix;
		}
	});
}

// ============================================
// CARD & GRID ANIMATIONS
// ============================================

/**
 * Stagger cards with 3D tilt entrance
 */
export async function staggerCards3D(container: HTMLElement, cardSelector: string) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !container) return;
	
	const cards = container.querySelectorAll(cardSelector);
	
	gsap.fromTo(
		cards,
		{
			opacity: 0,
			y: 100,
			rotateX: 15,
			transformPerspective: 1000
		},
		{
			opacity: 1,
			y: 0,
			rotateX: 0,
			duration: 1,
			stagger: 0.15,
			ease: EASE.smooth,
			scrollTrigger: {
				trigger: container,
				start: 'top 75%',
				end: 'top 25%',
				scrub: 1
			}
		}
	);
}

/**
 * Cards reveal with scale and opacity (like Linear)
 */
export async function cardsScaleReveal(container: HTMLElement, cardSelector: string) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !container) return;
	
	const cards = container.querySelectorAll(cardSelector);
	
	gsap.fromTo(
		cards,
		{
			opacity: 0,
			scale: 0.9,
			y: 40
		},
		{
			opacity: 1,
			scale: 1,
			y: 0,
			duration: 0.8,
			stagger: 0.1,
			ease: EASE.softOut,
			scrollTrigger: {
				trigger: container,
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		}
	);
}

/**
 * Masonry-style stagger (different delays based on position)
 */
export async function masonryReveal(container: HTMLElement, itemSelector: string) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !container) return;
	
	const items = container.querySelectorAll(itemSelector);
	
	items.forEach((item, i) => {
		const row = Math.floor(i / 3);
		const col = i % 3;
		const delay = row * 0.1 + col * 0.05;
		
		gsap.fromTo(
			item,
			{
				opacity: 0,
				y: 60 + (col * 20)
			},
			{
				opacity: 1,
				y: 0,
				duration: 0.8,
				delay,
				ease: EASE.smooth,
				scrollTrigger: {
					trigger: container,
					start: 'top 80%',
					toggleActions: 'play none none none'
				}
			}
		);
	});
}

// ============================================
// IMAGE ANIMATIONS
// ============================================

/**
 * Image reveal with clip-path (like fashion websites)
 */
export async function imageClipReveal(
	element: HTMLElement,
	direction: 'left' | 'right' | 'top' | 'bottom' = 'bottom'
) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !element) return;
	
	const clipPaths: Record<string, { from: string; to: string }> = {
		left: { from: 'inset(0 100% 0 0)', to: 'inset(0 0% 0 0)' },
		right: { from: 'inset(0 0 0 100%)', to: 'inset(0 0 0 0%)' },
		top: { from: 'inset(100% 0 0 0)', to: 'inset(0% 0 0 0)' },
		bottom: { from: 'inset(0 0 100% 0)', to: 'inset(0 0 0% 0)' }
	};
	
	gsap.fromTo(
		element,
		{ clipPath: clipPaths[direction].from },
		{
			clipPath: clipPaths[direction].to,
			duration: 1.2,
			ease: EASE.smooth,
			scrollTrigger: {
				trigger: element,
				start: 'top 80%',
				toggleActions: 'play none none none'
			}
		}
	);
}

/**
 * Image parallax with scale (Ken Burns effect on scroll)
 */
export async function imageKenBurns(element: HTMLElement) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !element) return;
	
	gsap.fromTo(
		element,
		{ scale: 1.2, y: 0 },
		{
			scale: 1,
			y: -50,
			ease: EASE.scrub,
			scrollTrigger: {
				trigger: element,
				start: 'top bottom',
				end: 'bottom top',
				scrub: 2
			}
		}
	);
}

// ============================================
// MAGNETIC & HOVER EFFECTS
// ============================================

/**
 * Magnetic hover effect (follows cursor within bounds)
 */
export async function magneticHover(element: HTMLElement, strength: number = 0.3) {
	const { gsap } = await ensureGSAP();
	if (!gsap || !element) return;
	
	const handleMouseMove = (e: MouseEvent) => {
		const rect = element.getBoundingClientRect();
		const x = e.clientX - rect.left - rect.width / 2;
		const y = e.clientY - rect.top - rect.height / 2;
		
		gsap.to(element, {
			x: x * strength,
			y: y * strength,
			duration: 0.4,
			ease: 'power2.out'
		});
	};
	
	const handleMouseLeave = () => {
		gsap.to(element, {
			x: 0,
			y: 0,
			duration: 0.6,
			ease: 'elastic.out(1, 0.4)'
		});
	};
	
	element.addEventListener('mousemove', handleMouseMove);
	element.addEventListener('mouseleave', handleMouseLeave);
	
	return () => {
		element.removeEventListener('mousemove', handleMouseMove);
		element.removeEventListener('mouseleave', handleMouseLeave);
	};
}

/**
 * Smooth scroll to element with GSAP
 */
export async function smoothScrollTo(target: string | HTMLElement) {
	const { gsap } = await ensureGSAP();
	if (!gsap) return;
	
	const element = typeof target === 'string' 
		? document.querySelector(target) 
		: target;
	
	if (!element) return;
	
	gsap.to(window, {
		duration: 1.2,
		scrollTo: { y: element, offsetY: 80 },
		ease: EASE.smooth
	});
}

// ============================================
// UTILITY ANIMATIONS
// ============================================

/**
 * Floating animation (subtle up/down movement)
 */
export async function floatingElement(element: HTMLElement, distance: number = 10) {
	const { gsap } = await ensureGSAP();
	if (!gsap || !element) return;
	
	gsap.to(element, {
		y: distance,
		duration: 2,
		ease: 'sine.inOut',
		yoyo: true,
		repeat: -1
	});
}

/**
 * Pulse glow effect
 */
export async function pulseGlow(element: HTMLElement) {
	const { gsap } = await ensureGSAP();
	if (!gsap || !element) return;
	
	gsap.to(element, {
		boxShadow: '0 0 40px rgba(59, 130, 246, 0.4)',
		duration: 1.5,
		ease: 'sine.inOut',
		yoyo: true,
		repeat: -1
	});
}

/**
 * Section title reveal - SCROLL-COUPLED with scrub
 */
export async function sectionTitleReveal(element: HTMLElement) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !element) return;
	
	gsap.fromTo(
		element,
		{
			opacity: 0,
			y: 60,
			filter: 'blur(12px)',
			scale: 0.95
		},
		{
			opacity: 1,
			y: 0,
			filter: 'blur(0px)',
			scale: 1,
			ease: 'none',
			scrollTrigger: {
				trigger: element,
				start: 'top 95%',
				end: 'top 60%',
				scrub: 1
			}
		}
	);
}

/**
 * Content block reveal with subtle movement
 */
export async function contentReveal(element: HTMLElement, delay = 0) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !element) return;
	
	gsap.fromTo(
		element,
		{
			opacity: 0,
			y: 30
		},
		{
			opacity: 1,
			y: 0,
			duration: 0.8,
			delay,
			ease: EASE.softOut,
			scrollTrigger: {
				trigger: element,
				start: 'top 85%',
				toggleActions: 'play none none none'
			}
		}
	);
}

/**
 * Stagger children reveal
 */
export async function staggerReveal(
	container: HTMLElement,
	childSelector: string,
	options: {
		stagger?: number;
		y?: number;
		duration?: number;
		scrub?: boolean;
	} = {}
) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !container) return;
	
	const { stagger = 0.1, y = 40, duration = 0.8, scrub = false } = options;
	const children = container.querySelectorAll(childSelector);
	
	if (scrub) {
		gsap.fromTo(
			children,
			{ opacity: 0, y },
			{
				opacity: 1,
				y: 0,
				stagger,
				ease: EASE.scrub,
				scrollTrigger: {
					trigger: container,
					start: 'top 80%',
					end: 'top 30%',
					scrub: 1.5
				}
			}
		);
	} else {
		gsap.fromTo(
			children,
			{ opacity: 0, y },
			{
				opacity: 1,
				y: 0,
				duration,
				stagger,
				ease: EASE.softOut,
				scrollTrigger: {
					trigger: container,
					start: 'top 80%',
					toggleActions: 'play none none none'
				}
			}
		);
	}
}

// ============================================
// CLEANUP
// ============================================

/**
 * Cleanup all ScrollTrigger instances
 */
export function cleanupScrollTriggers() {
	if (typeof window !== 'undefined' && ScrollTrigger) {
		ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
	}
}

/**
 * Refresh ScrollTrigger (call after dynamic content loads)
 */
export async function refreshScrollTrigger() {
	const { ScrollTrigger } = await ensureGSAP();
	if (ScrollTrigger) {
		ScrollTrigger.refresh();
	}
}

// ============================================
// PREMIUM LEVEL 2 - NEXT-LEVEL ANIMATIONS
// ============================================

/**
 * Character-by-character 3D flip reveal (like Linear.app)
 */
export async function heroCharacterReveal(element: HTMLElement, delay = 0) {
	const { gsap } = await ensureGSAP();
	if (!gsap || !element) return;
	
	const text = element.textContent || '';
	element.innerHTML = '';
	element.style.perspective = '1000px';
	
	const chars: HTMLSpanElement[] = [];
	text.split('').forEach((char) => {
		const span = document.createElement('span');
		span.textContent = char === ' ' ? '\u00A0' : char;
		span.style.display = 'inline-block';
		span.style.transformStyle = 'preserve-3d';
		element.appendChild(span);
		chars.push(span);
	});
	
	gsap.fromTo(
		chars,
		{
			opacity: 0,
			rotateX: -90,
			y: 50,
			filter: 'blur(10px)'
		},
		{
			opacity: 1,
			rotateX: 0,
			y: 0,
			filter: 'blur(0px)',
			duration: 0.8,
			stagger: 0.02,
			delay,
			ease: 'back.out(1.7)'
		}
	);
}

/**
 * Blur-fade section transition on scroll - EARLIER trigger
 */
export async function blurFadeSection(element: HTMLElement) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !element) return;
	
	gsap.fromTo(
		element,
		{
			opacity: 0,
			filter: 'blur(15px)',
			y: 60
		},
		{
			opacity: 1,
			filter: 'blur(0px)',
			y: 0,
			ease: 'none',
			scrollTrigger: {
				trigger: element,
				start: 'top 100%',
				end: 'top 60%',
				scrub: 1
			}
		}
	);
}

/**
 * Mouse-following gradient spotlight
 */
export function mouseGradientSpotlight(container: HTMLElement) {
	if (typeof window === 'undefined') return;
	
	// Create gradient element
	const gradient = document.createElement('div');
	gradient.style.cssText = `
		position: absolute;
		width: 600px;
		height: 600px;
		border-radius: 50%;
		background: radial-gradient(circle, rgba(251,146,60,0.15) 0%, transparent 70%);
		pointer-events: none;
		transform: translate(-50%, -50%);
		transition: opacity 0.3s ease;
		z-index: 1;
	`;
	container.style.position = 'relative';
	container.appendChild(gradient);
	
	let rafId: number;
	let targetX = 0, targetY = 0;
	let currentX = 0, currentY = 0;
	
	const handleMouseMove = (e: MouseEvent) => {
		const rect = container.getBoundingClientRect();
		targetX = e.clientX - rect.left;
		targetY = e.clientY - rect.top;
	};
	
	const handleMouseLeave = () => {
		gradient.style.opacity = '0';
	};
	
	const handleMouseEnter = () => {
		gradient.style.opacity = '1';
	};
	
	// Smooth follow animation
	const animate = () => {
		currentX += (targetX - currentX) * 0.1;
		currentY += (targetY - currentY) * 0.1;
		gradient.style.left = currentX + 'px';
		gradient.style.top = currentY + 'px';
		rafId = requestAnimationFrame(animate);
	};
	
	container.addEventListener('mousemove', handleMouseMove);
	container.addEventListener('mouseleave', handleMouseLeave);
	container.addEventListener('mouseenter', handleMouseEnter);
	animate();
	
	return () => {
		container.removeEventListener('mousemove', handleMouseMove);
		container.removeEventListener('mouseleave', handleMouseLeave);
		container.removeEventListener('mouseenter', handleMouseEnter);
		cancelAnimationFrame(rafId);
		gradient.remove();
	};
}

/**
 * Parallax layers with depth (multiple elements, different speeds)
 */
export async function parallaxLayers(
	container: HTMLElement,
	layers: { selector: string; speed: number }[]
) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !container) return;
	
	layers.forEach(({ selector, speed }) => {
		const elements = container.querySelectorAll(selector);
		elements.forEach(el => {
			gsap.to(el, {
				y: () => speed * 200,
				ease: 'none',
				scrollTrigger: {
					trigger: container,
					start: 'top bottom',
					end: 'bottom top',
					scrub: true
				}
			});
		});
	});
}

/**
 * Split text with wave animation
 */
export async function textWaveReveal(element: HTMLElement, delay = 0) {
	const { gsap } = await ensureGSAP();
	if (!gsap || !element) return;
	
	const text = element.textContent || '';
	
	// Preserve gradient styles by copying computed styles
	const computedStyle = window.getComputedStyle(element);
	const background = computedStyle.background;
	const backgroundImage = computedStyle.backgroundImage;
	const backgroundClip = computedStyle.webkitBackgroundClip || computedStyle.backgroundClip;
	const textFillColor = computedStyle.webkitTextFillColor;
	
	element.innerHTML = '';
	
	const chars: HTMLSpanElement[] = [];
	text.split('').forEach((char) => {
		const span = document.createElement('span');
		span.textContent = char === ' ' ? '\u00A0' : char;
		span.style.display = 'inline-block';
		
		// Apply gradient to each character
		if (backgroundImage && backgroundImage !== 'none') {
			span.style.backgroundImage = backgroundImage;
			span.style.webkitBackgroundClip = 'text';
			span.style.backgroundClip = 'text';
			span.style.webkitTextFillColor = 'transparent';
			span.style.color = 'transparent';
		}
		
		element.appendChild(span);
		chars.push(span);
	});
	
	gsap.fromTo(
		chars,
		{
			y: 100,
			opacity: 0
		},
		{
			y: 0,
			opacity: 1,
			duration: 0.6,
			stagger: {
				each: 0.03,
				from: 'start',
				ease: 'power2.out'
			},
			delay,
			ease: 'elastic.out(1, 0.5)'
		}
	);
}

/**
 * Image reveal with zoom + clip combined - EARLIER trigger
 */
export async function imageZoomClipReveal(element: HTMLElement) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !element) return;
	
	// Get or create image inside
	const img = element.querySelector('img') || element;
	
	gsap.fromTo(
		element,
		{
			clipPath: 'inset(100% 0 0 0)',
			scale: 1.2
		},
		{
			clipPath: 'inset(0% 0 0 0)',
			scale: 1,
			ease: 'none',
			scrollTrigger: {
				trigger: element,
				start: 'top 100%',
				end: 'top 50%',
				scrub: 1
			}
		}
	);
}

/**
 * Smooth scroll container (Lenis-like behavior)
 */
export function initSmoothScroll() {
	if (typeof window === 'undefined') return;
	
	// CSS-based smooth scroll with momentum
	document.documentElement.style.scrollBehavior = 'smooth';
	
	// Add will-change hints for performance
	const sections = document.querySelectorAll('section');
	sections.forEach(section => {
		section.style.willChange = 'transform';
	});
}

/**
 * Staggered reveal with rotation - EARLIER trigger
 */
export async function staggerRotateReveal(
	container: HTMLElement,
	selector: string,
	options: { stagger?: number; rotation?: number } = {}
) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !container) return;
	
	const { stagger = 0.08, rotation = 4 } = options;
	const elements = container.querySelectorAll(selector);
	
	gsap.fromTo(
		elements,
		{
			opacity: 0,
			y: 60,
			rotation: rotation,
			scale: 0.92,
			filter: 'blur(3px)'
		},
		{
			opacity: 1,
			y: 0,
			rotation: 0,
			scale: 1,
			filter: 'blur(0px)',
			stagger,
			ease: 'none',
			scrollTrigger: {
				trigger: container,
				start: 'top 100%',
				end: 'top 45%',
				scrub: 1
			}
		}
	);
}

/**
 * Counter with spring animation
 */
export async function springCounter(
	element: HTMLElement,
	endValue: number,
	suffix: string = ''
) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !element) return;
	
	const counter = { value: 0 };
	
	gsap.to(counter, {
		value: endValue,
		duration: 2.5,
		ease: 'elastic.out(1, 0.3)',
		scrollTrigger: {
			trigger: element,
			start: 'top 80%',
			toggleActions: 'play none none none'
		},
		onUpdate: () => {
			element.textContent = Math.round(counter.value) + suffix;
		}
	});
}

/**
 * Morph clip-path on scroll
 */
export async function morphClipPath(
	element: HTMLElement,
	fromPath: string,
	toPath: string
) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !element) return;
	
	gsap.fromTo(
		element,
		{ clipPath: fromPath },
		{
			clipPath: toPath,
			ease: 'none',
			scrollTrigger: {
				trigger: element,
				start: 'top 80%',
				end: 'top 20%',
				scrub: 1
			}
		}
	);
}

/**
 * Horizontal scroll section
 */
export async function horizontalScrollSection(
	container: HTMLElement,
	scrollWidth: number
) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !container) return;
	
	const inner = container.querySelector('[data-horizontal-scroll]') as HTMLElement;
	if (!inner) return;
	
	gsap.to(inner, {
		x: () => -(inner.scrollWidth - container.clientWidth),
		ease: 'none',
		scrollTrigger: {
			trigger: container,
			start: 'top top',
			end: () => `+=${scrollWidth}`,
			pin: true,
			scrub: 1,
			invalidateOnRefresh: true
		}
	});
}

/**
 * Text gradient animation on scroll
 */
export async function textGradientScroll(element: HTMLElement) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !element) return;
	
	gsap.fromTo(
		element,
		{
			backgroundPosition: '0% 50%'
		},
		{
			backgroundPosition: '100% 50%',
			ease: 'none',
			scrollTrigger: {
				trigger: element,
				start: 'top 80%',
				end: 'bottom 20%',
				scrub: 1
			}
		}
	);
}

/**
 * Entrance with perspective shift - EARLIER trigger
 */
export async function perspectiveEntrance(element: HTMLElement) {
	const { gsap, ScrollTrigger } = await ensureGSAP();
	if (!gsap || !element) return;
	
	gsap.fromTo(
		element,
		{
			opacity: 0,
			rotateX: 20,
			rotateY: -10,
			transformPerspective: 1000,
			y: 80,
			filter: 'blur(4px)'
		},
		{
			opacity: 1,
			rotateX: 0,
			rotateY: 0,
			y: 0,
			filter: 'blur(0px)',
			ease: 'none',
			scrollTrigger: {
				trigger: element,
				start: 'top 100%',
				end: 'top 55%',
				scrub: 1
			}
		}
	);
}

// ============================================
// LEGACY SUPPORT (for existing components)
// ============================================

export const fadeInUp = fadeOnScroll;
export const staggerFadeIn = staggerReveal;
export const scaleIn = scaleOnScroll;
export const slideInLeft = horizontalSlide;
export const parallax = parallaxDepth;

