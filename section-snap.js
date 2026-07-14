// ======================================
// Import GSAP and the plugins we'll use
// ======================================

import gsap from "https://cdn.skypack.dev/gsap";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";
import { ScrollToPlugin } from "https://cdn.skypack.dev/gsap/ScrollToPlugin";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ======================================
// Get all sections that should snap
// ======================================

const sections = gsap.utils.toArray(".snap-section");

// Check everything loaded correctly
console.log("Snap Sections:", sections);
