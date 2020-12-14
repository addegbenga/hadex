const scrollbar = document.querySelector(".hero-scroll");
const container = document.querySelector(".app-container");
const animateSkill = document.querySelector(".animate-skill");
const animateIntro = document.querySelector(".animate-intro");
const herosvg = document.querySelector(".round-bg-svg");
const heroanimate = document.querySelectorAll(".hero-animate");
const animateproject = document.querySelectorAll(".animate-project");
const projects = document.querySelector(".animate-project");
const project = document.querySelector(".project-container");
const projectheader = document.querySelector(".animate-project-brief-header");
const animatecontact = document.querySelector(".animate-contact");
const projectparagraph = document.querySelector(
  ".animate-project-brief-paragraph"
);
const testimonial = document.querySelector(".animate-testimonial");
const red = document.querySelector(".one");
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: animateSkill,
    start: "-200 100%",
    end: "+=300",
    scrub: 1,
    ease: "Power4.easeIn",
    // markers: true,
  },
});

// tl.from(
//   herosvg,
//   {
//     duration: 0.5,
//     rotation: 360,
//     ease: "Power3.easeOut",
//   },
//   "-= 0.5"
// );
const tl2 = gsap.timeline();
tl2
  
  .from(heroanimate, {
    opacity: 0,
    duration: 3,
    ease: Power4.easeOut,
    y: -50,
    stagger: {
      amount: 1,
    },
  });
// const display = new gsap.timeline();
// display.from(herosvg, {
//   opacity: 0,
//   scale:0.2,
//   duration: 1,
//   y: -50,
//   rotation: 360,
// });
// scrollbar.addEventListener("click", () => {
//     display.restart()
// });

tl.from(animateIntro, {
  opacity: 0,
  duration: 1,
  x: 50,
  stagger: 1,
}).from(animateSkill, {
  opacity: 0,
  duration: 1,
  y: 100,
  stagger: 1,
});

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: projectheader,
    start: "-200 100%",
    end: "+=300",
    scrub: 1,
    ease: "Power4.easeIn",
    // markers: true,
  },
});
tl3
  .from(projectheader, {
    opacity: 0,
    duration: 1,
    y: 100,
    stagger: 1,
  })
  .from(projectparagraph, {
    duration: 1,
    opacity: 0,
    x: 100,
  });

const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: projects,
    start: "-100 100%",
    end: "+=300",
    scrub: 1,
    ease: "Power4.easeIn",
    // markers: true,
  },
});

tl4.from(projects, {
  duration: 3,
  opacity: 0,
  y: 90,
  stagger: 1,
});
const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: testimonial,
    start: "-100 100%",
    end: "+=",
    scrub: 1,
    ease: Power4.easeIN,
  },
});
tl5.from(testimonial, {
  duration: 2,
  opacity: 0,
  y: 100,
});

const tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: animatecontact,
    start: "-100 100%",
    end: "+=",
    scrub: 1,
    ease: Power4.easeIn,
  },
});
tl6.from(animatecontact, {
  duration: 1,
  opacity: 0,
  x: -100,
});
