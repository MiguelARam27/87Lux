//Header
export const titleAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 2.5, ease: 'easeOut' },
  },
};

export const platformContainerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

export const image1Animation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, type: 'spring', bounce: 0.65 },
  },
};
export const image2Animation = {
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
export const image3Animation = {
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
export const image4Animation = {
  hidden: {
    x: 100,
    opacity: 0,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, type: 'spring', bounce: 0.65 },
  },
};

//Jumb
