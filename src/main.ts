import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin)

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app')
  if (!app) throw new Error("app wasn't found in dom")

  const sections = gsap.utils.toArray('section')

  const width = window.innerWidth
  const height = window.innerHeight

  const play = document.querySelector('.arrow')

  // on click on play scroll to the end of the page, after go to the end, stop the scroll
  play?.addEventListener('click', () => {
    gsap.to(window, {
      scrollTo: height * 4,
      duration: 50,
      ease: 'none',
    })
  })

 

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

  gsap.to('.bg', {
    scrollTrigger: {
      start: "top top",
      end: height * 5,
      scrub: .5,
    },
    x: - width * 6,
    ease: 'none',
  })

  gsap.to('.rer', {
    scrollTrigger: {
      start: height * 0.1,
      end: height * 0.1 + 400,
      scrub: 0.5,
    },
    x: width * 0.3,
    ease: 'none',
  })

  gsap.to('.illu6', {
    scrollTrigger: {
      start: height * 0.1,
      end: height * 0.1 + 400,
      scrub: 0.5,
    },
    x: -15,
    ease: 'none',
  })

  gsap.to('.transilien', {
    scrollTrigger: {
      start: height * 0.2 + 100,
      end: height * 0.2 + 400,
      scrub: 0.5,
    },
    x: width * 0.3 - 55,
    ease: 'none',
  })

  gsap.to('.illu2', {
    scrollTrigger: {
      start: height * 0.2 + 100,
      end: height * 0.2 + 400,
      scrub: 0.5,
    },
    x: -100,
    ease: 'none',
  })

  gsap.to('.metro', {
    scrollTrigger: {
      start: height * 0.1,
      end: height * 0.2 + 450,
      scrub: 0.5,
    },
    x: width * 0.4,
    ease: 'none',
  })

  gsap.to('.illu4', {
    scrollTrigger: {
      start: height * 0.1,
      end: height * 0.2 + 450,
      scrub: 0.5,
    },
    x: -150,
    ease: 'none',
  })

  gsap.to('.bus', {
    scrollTrigger: {
      start: height * 1,
      end: height * 1.4,
      scrub: 0.5,
    },
    x: width * 0.2 + 170,
    ease: 'none',
  })

  gsap.to('.illu10', {
    scrollTrigger: {
      start: height * 1.2,
      end: height * 1.4,
      scrub: 0.5,
    },
    x: -200,
    ease: 'none',
  })

  gsap.to('.voiture', {
    scrollTrigger: {
      start: height * 1.4,
      end: height * 1.6,
      scrub: 0.5,
    },
    x: width * 0.2 + 70,
    ease: 'none',
  })

  gsap.to('.illu7', {
    scrollTrigger: {
      start: height * 1.4,
      end: height * 1.6,
      scrub: 0.5,
    },
    x: -250,
    ease: 'none',
  })

  gsap.to('.tramway', {
    scrollTrigger: {
      start: height * 1.5,
      end: height * 2,
      scrub: 0.5,
    },
    x: width * 0.6,
    ease: 'none',
  })

  gsap.to('.illu11', {
    scrollTrigger: {
      start: height * 1.5,
      end: height * 2,
      scrub: 0.5,
    },
    x: -100,
    ease: 'none',
  })

  gsap.to('.velo', {
    scrollTrigger: {
      start: height * 2,
      end: height * 2.2,
      scrub: 0.5,
    },
    x: 400,
    ease: 'none',
  })

  gsap.to('.illu14', {
    scrollTrigger: {
      start: height * 2,
      end: height * 2.2,
      scrub: 0.5,
    },
    x: -100,
    ease: 'none',
  })

  gsap.to('.marche', {
    scrollTrigger: {
      start: height * 2.2,
      end: height * 2.3,
      scrub: 0.5,
    },
    x: 150,
    ease: 'none',
  })

  gsap.to('.illu15', {
    scrollTrigger: {
      start: height * 2.2,
      end: height * 2.3,
      scrub: 0.5,
    },
    x: -100,
    ease: 'none',
  })

  gsap.to('.illu16', {
    scrollTrigger: {
      start: height * 2.2,
      end: height * 2.3,
      scrub: 0.5,
    },
    x: -300,
    ease: 'none',
  })

  gsap.to('.t11', {
    scrollTrigger: {
      start: height * 2.8,
      end: height * 3,
      scrub: 0.5,
    },
    x: 200,
    ease: 'none',
  })
  gsap.to('.b11', {
    scrollTrigger: {
      start: height * 2.8,
      end: height * 3,
      scrub: 0.5,
    },
    x: 400,
    ease: 'none',
  })

  gsap.to('.t12', {
    scrollTrigger: {
      start: height * 2.8,
      end: height * 3,
      scrub: 0.5,
    },
    x: 400,
    ease: 'none',
  })

  gsap.to('.midle-container', {
    scrollTrigger: {
      start: height * 2.3,
      end: height * 2.8,
      scrub: 0.5,
    },
    x: "20%",
    ease: 'none',
  })

  gsap.to('.b12', {
    scrollTrigger: {
      start: height * 2.8,
      end: height * 3,
      scrub: 0.5,
    },
    x: 800,
    ease: 'none',
  })

  gsap.to('.t23', {
    scrollTrigger: {
      start: height * 2.8,
      end: height * 3,
      scrub: 0.5,
    },
    x: 300,
    ease: 'none',
  })

  gsap.to('.illu19', {
    scrollTrigger: {
      start: height * 3.3,
      // end: height * 4,
      scrub: 0.5,
    },
    x: -100,
    ease: 'none',
  })

  gsap.to('.illu20', {
    scrollTrigger: {
      start: height * 3.3,
      // end: height * 4,
      scrub: 0.5,
    },
    x: -200,
    ease: 'none',
  })
})
