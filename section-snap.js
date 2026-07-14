// ======================================
// Import GSAP
// ======================================

import gsap from "https://cdn.skypack.dev/gsap";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";
import { ScrollToPlugin } from "https://cdn.skypack.dev/gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ======================================
// Get all snap sections
// ======================================

const sections = gsap.utils.toArray(".snap-section");

// ======================================
// Create smooth snapping
// ======================================

ScrollTrigger.create({

    snap:{

        snapTo:sections.map(section=>section.offsetTop),

        duration:0.8,

        ease:"expo.inOut",

        inertia:true

    }

});

console.log("Snap Ready");
