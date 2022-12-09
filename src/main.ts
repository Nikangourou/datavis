import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin)

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app')
  if (!app) throw new Error("app wasn't found in dom")

  const sections = gsap.utils.toArray('section')
  const ground = window.innerHeight - 100
  const width = window.innerWidth
  const height = window.innerHeight

  gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '#app',
      pin: true,
      scrub: 1,
      // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      // snap: 1 / (sections.length - 1),
      // base vertical scrolling on how wide the container is so it feels more natural.
      end: '+=3500',
    },
  })

  // sec3 add parallax

  gsap.to('.rer', {
    scrollTrigger: {
      trigger: '.sec1',
      start: '400px top',
      
      scrub: 0.5,
    },
    x: width * 0.3,
    ease: 'none',
  })

  // gsap.to('.rer-info', {
  //   scrollTrigger: {
  //     trigger: '.sec1',
  //     start: 'top top',
  //     scrub: 0.5,
  //   },
  //   x: -width * 0.1,
  //   ease: 'none',
  // })

  gsap.to('.illu6', {
    scrollTrigger: {
      // trigger: '.sec1',
      start: height * 0.7,
      end: height + 200,
      scrub: 0.5,
    },
    x: -15,
    ease: 'none',
  })

  gsap.to('.transilien', {
    scrollTrigger: {
      trigger: '.sec1',
      start: 'top top',
      scrub: 0.5,
    },
    x: width * 0.2,
    ease: 'none',
  })

  gsap.to('.illu2', {
    scrollTrigger: {
      // trigger: '.sec1',
      start: height * 0.8,
      end: height + 250,
      scrub: 0.5,
    },
    x: -100,
    ease: 'none',
  })

  gsap.to('.metro', {
    scrollTrigger: {
      trigger: '.sec1',
      start: 'top top',
      scrub: 0.5,
    },
    x: width * 0.4,
    ease: 'none',
  })

  gsap.to('.illu4', {
    scrollTrigger: {
      // trigger: '.sec1',
      start: height * 0.7,
      end: height + 200,
      scrub: 0.5,
    },
    x: -150,
    ease: 'none',
  })

  gsap.to('.bus', {
    scrollTrigger: {
      start: height * 1.4,
      end: height * 1.5 + 200,
      scrub: 0.5,
    },
    x: width * 0.2 + 70,
    ease: 'none',
  })

  gsap.to('.illu10', {
    scrollTrigger: {
      start: height * 1.3,
      end: height * 1.5 + 200,
      scrub: 0.5,
    },
    x: - 200,
    ease: 'none',
  })

  gsap.to('.voiture', {
    scrollTrigger: {
      start: height * 1.5+ 400,
      end: height * 1.6 + 800,
      scrub: 0.5,
    },
    x: width * 0.2 + 70,
    ease: 'none',
  })

  gsap.to('.illu7', {
    scrollTrigger: {
      start: height * 1.5+ 500,
      end: height * 1.6 + 800,
      scrub: 0.5,
    },
    x: - 250,
    ease: 'none',
  })

  gsap.to('.tramway', {
    scrollTrigger: {
      start: height * 2.3,
      end: height * 2.7,
      scrub: 0.5,
    },
    x: width * 0.6,
    ease: 'none',
  })

  gsap.to('.illu11', {
    scrollTrigger: {
      start: height * 2.3,
      end: height * 3,
      scrub: 0.5,
    },
    x: -100,
    ease: 'none',
  })

  gsap.to('.velo', {
    scrollTrigger: {
      start: height * 3,
      end: height * 3.5,
      scrub: 0.5,
    },
    x: 400,
    ease: 'none',
  })

  gsap.to('.illu14', {
    scrollTrigger: {
      start: height * 3,
      end: height * 3.5,
      scrub: 0.5,
    },
    x: -100,
    ease: 'none',
  })

  gsap.to('.velo', {
    scrollTrigger: {
      start: height * 3,
      end: height * 3.5,
      scrub: 0.5,
    },
    x: 400,
    ease: 'none',
  })

  gsap.to('.marche', {
    scrollTrigger: {
      start: height * 3.3,
      end: height * 3.8,
      scrub: 0.5,
    },
    x: 150,
    ease: 'none',
  })

  gsap.to('.illu15', {
    scrollTrigger: {
      start: height * 3.3,
      end: height * 3.8,
      scrub: 0.5,
    },
    x: -100,
    ease: 'none',
  })

  gsap.to('.illu16', {
    scrollTrigger: {
      start: height * 3.3,
      end: height * 3.8,
      scrub: 0.5,
    },
    x: -400,
    ease: 'none',
  })

  gsap.to('.t11', {
    scrollTrigger: {
      start: height * 3.3,
      end: height * 3.8,
      scrub: 0.5,
    },
    x: 400,
    ease: 'none',
  })
  gsap.to('.b11', {
    scrollTrigger: {
      start: height * 3.3,
      end: height * 3.8,
      scrub: 0.5,
    },
    x: 800,
    ease: 'none',
  })
})
