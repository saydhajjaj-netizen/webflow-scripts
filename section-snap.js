// ======================================
// Import GSAP
// ======================================

import gsap from "https://cdn.skypack.dev/gsap";
import { ScrollToPlugin } from "https://cdn.skypack.dev/gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

// ======================================
// Get all fullscreen sections
// ======================================

const sections = gsap.utils.toArray(".snap-section");

// ======================================
// Settings
// ======================================

// Keeps track of which section we're on
let currentSection = 0;

// Prevents multiple animations at once
let isAnimating = false;

// ======================================
// Smoothly scroll to a section
// ======================================

function goToSection(index){

    // Stop if already animating
    if(isAnimating) return;

    // Keep index inside valid range
    index = Math.max(0, Math.min(index, sections.length - 1));

    // Don't animate to the same section
    if(index === currentSection) return;

    isAnimating = true;

    gsap.to(window,{

        scrollTo: sections[index],

        duration:1.2,

        ease:"expo.inOut",

        onComplete(){

            currentSection = index;

            isAnimating = false;

        }

    });

}

// ======================================
// Listen for mouse wheel
// ======================================

window.addEventListener("wheel",(e)=>{

    if(e.deltaY > 0){

        goToSection(currentSection + 1);

    }else{

        goToSection(currentSection - 1);

    }

},{passive:true});

console.log("Snap Engine Ready");
