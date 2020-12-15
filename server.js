const scrollbar = document.querySelector(".hero-scroll");
const container = document.querySelector(".app-container");
const animateSkill = document.querySelector(".animate-skill");
const animateIntro = document.querySelector(".animate-intro");
const herosvg = document.querySelector(".round-bg-svg");
const heroanimate = document.querySelectorAll(".hero-animate");
const projectbanner = document.querySelectorAll(".project-banner");
const projects = document.querySelector(".animate-project");
const project = document.querySelector(".intro-project-container");
const projectheader = document.querySelector(".animate-project-brief-header");
const animatecontact = document.querySelector(".animate-contact");
const projectparagraph = document.querySelector(
  ".animate-project-brief-paragraph"
);
const navbar = document.querySelector(".header");
const animatenav = document.querySelector(".animate-nav");
const testimonial = document.querySelector(".animate-testimonial");
const red = document.querySelector(".one");
gsap.registerPlugin(ScrollTrigger);

gsap.to(navbar, {
  scrollTrigger: {
    trigger: document.body,
    start: "top 5px",
    scrub: true,
  },
  css: {
    background: "#131313",
  },
});

const tl = gsap.timeline({
  // scrollTrigger: {
  //   trigger: animateIntro,
  //   start: "top center",
  //   end: "top 100px",
  //   scroller:project,
  //   pinSpacing: false,
  //   // end: "+=300",
  //   markers:true,
  //   scrub: 1,
  //   ease: "Power4.easeIn",
  // },
});
tl.from(animateIntro, {
  opacity: 0,
  duration: 1,
  xPercent: 30,
  // y: 50,
  stagger: 1,
}).from(animateSkill, {
  opacity: 0,
  duration: 1.5,
  xPercent: -30,
  stagger: 1,
});

ScrollTrigger.create({
  animation: tl,
  trigger: project,
  start:"top bottom",
  end:"top 100px",
  scrub: 1,
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
  })
  .from(
    herosvg,
    {
      opacity: 0,
      scale: 0.2,
      duration: 2,
      ease: Power3.easeIn,
      onComplete: () => {
        scrollbar.addEventListener("click", (e) => {
          startAnimation();
        });
      },
      y: -50,
      rotation: 360,
    },
    "-= 0.1"
  );

const startAnimation = () => {
  const display = new gsap.timeline();
  display.from(
    herosvg,
    {
      opacity: 0,
      scale: 0.2,
      duration: 3,
      ease: Power3.easeIn,
      y: -50,
      rotation: 360,
    },
    "-= .5"
  );
  display.restart();
};

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: projectheader,
    start: "-500 50%",
    pinSpacing: false,
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
    // x: 100,
    y: 100,
  });
let sections = gsap.utils.toArray(projectbanner);
gsap.from(sections, {
  scrollTrigger: {
    trigger: projects,
    start: "top center",
    end: "top 400px",
    scrub: 1,
    ease: "Power3.easeIn",
  },
  duration: 2,
  opacity: 0,
  yPercent: 50,
  stagger: {
    amount: 1,
  },
});

const tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: testimonial,
    start: "-100 100%",
    pinSpacing: false,
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

// const tl6 = gsap.timeline({
//   scrollTrigger: {
//     trigger: animatecontact,
//     start: "-100 100%",
//     end: "+=",
//     pinSpacing: false,
//     scrub: 1,
//     ease: Power4.easeIn,
//   },
// });
// tl6.from(animatecontact, {
//   duration: 1,
//   opacity: 0,
//   x: -100,
// });
