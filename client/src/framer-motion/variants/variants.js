// Framer-motion
export const opacityVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

export const leftVariants = {
  hidden: { opacity: 0, x: "-100%" },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 2,
    },
  },
};

export const rightVariants = {
  hidden: { opacity: 0, x: "100%" },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 2,
    },
  },
};

export const fadeUpVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 2,
    },
  },
};
export const fadeDownVariants = {
  hidden: { opacity: 0, y: "-100%" },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 2,
    },
  },
};
