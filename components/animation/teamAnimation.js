export const fadeSpring = {
  hidden: { x: 100, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', mass: 1.2 },
  },
};

export const titleFade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 2.2, ease: 'easeOut' },
  },
};
