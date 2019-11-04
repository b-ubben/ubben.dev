import { TimelineMax, TweenMax } from 'gsap';

// GSAP things for banner animation
const tl = new TimelineMax();

// elements
const header = document.querySelector('.header');
const terminal = document.querySelector('.header__figure');

// TL
tl.add( TweenMax.from(header, 1, { y: '-100%', opacity: 0, ease: Expo.easeOut }) )
  .add( TweenMax.from(terminal, .5, { x: '-100%', opacity: 0, ease: Expo.easeOut }) );

