//Header
export const titleAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 2.5, ease: 'easeOut' },
  },
};

export const linkContainerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const linkAnimation = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};
//Jumbo
