export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const fadeUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const fadeUpDelay = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const slowFadeUp = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const intro = {
  initial: {},
  animate: {},
};

export const introDelay = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      ease: "easeInOut",
    },
  },
};

export const delaySlowFadeUp = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const fadeLeftHeading = {
  initial: {
    opacity: 0,
    x: -60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const fadeLeft = {
  initial: {
    opacity: 0,
    x: -60,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const fadeRight = {
  initial: {
    opacity: 0,
    x: 60,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const stagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

export const cardsStagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

export const routeAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.1,
      ease: "easeInOut",
    },
  },
};
