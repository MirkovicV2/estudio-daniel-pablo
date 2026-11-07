const motion = matchMedia('(prefers-reduced-motion: reduce)');
const elements = Array.from(
  document.querySelectorAll<HTMLElement>('[data-reveal]'),
);
if (!motion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('will-reveal');
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.08 },
  );
  for (const element of elements) {
    if (element.getBoundingClientRect().top > window.innerHeight) {
      element.classList.add('will-reveal');
      observer.observe(element);
    }
  }
  motion.addEventListener('change', () => {
    if (motion.matches) {
      for (const element of elements) element.classList.remove('will-reveal');
      observer.disconnect();
    }
  });
}
const menu = document.querySelector<HTMLDetailsElement>('[data-mobile-menu]');
if (menu) {
  menu.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).closest('a')) menu.open = false;
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.open) {
      menu.open = false;
      menu.querySelector('summary')?.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (menu.open && !menu.contains(event.target as HTMLElement))
      menu.open = false;
  });
}
