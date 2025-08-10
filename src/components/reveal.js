import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function reveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 85%',
    onEnter: (batch) =>
      gsap.fromTo(
        batch,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.08,
        }
      ),
  });
}
