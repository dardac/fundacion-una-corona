/**
 * Elegant scroll reveals via Intersection Observer.
 * Elements use [data-reveal], optional delay via --reveal-delay or data-reveal-delay.
 */
export function initScrollReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]');

  if (prefersReduced) {
    nodes.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.classList.add('is-revealed');
        observer.unobserve(el);
      }
    },
    {
      root: null,
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.12,
    },
  );

  nodes.forEach((el) => {
    const delay = el.dataset.revealDelay;
    if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`);
    observer.observe(el);
  });
}

export function initScrollProgress() {
  const bar = document.querySelector<HTMLElement>('[data-scroll-progress]');
  if (!bar) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    bar.style.width = '0%';
    return;
  }

  let ticking = false;

  const update = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const progress = max > 0 ? (doc.scrollTop / max) * 100 : 0;
    bar.style.width = `${progress}%`;
    ticking = false;
  };

  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    },
    { passive: true },
  );

  update();
}

initScrollReveal();
initScrollProgress();
