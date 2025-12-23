// Components - Sections
export { default as Hero } from './components/sections/Hero.svelte';
export { default as BentoGrid } from './components/sections/BentoGrid.svelte';
export { default as Timeline } from './components/sections/Timeline.svelte';
export { default as About } from './components/sections/About.svelte';
export { default as TechStack } from './components/sections/TechStack.svelte';
export { default as Projects } from './components/sections/Projects.svelte';
export { default as Contact } from './components/sections/Contact.svelte';
export { default as Footer } from './components/sections/Footer.svelte';

// Components - UI
export { default as TiltCard } from './components/ui/TiltCard.svelte';
export { default as MagneticCursor } from './components/ui/MagneticCursor.svelte';
export { default as PerformanceLine } from './components/ui/PerformanceLine.svelte';

// Stores
export { mode, toggleMode, setMode } from './stores/mode';
export { theme } from './stores/theme';

// Utils
export { enduranceEvents, techStack, socialLinks, contactInfo } from './utils/constants';
