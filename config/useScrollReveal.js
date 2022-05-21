import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useScrollReveal = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    // root: null,
    // rootMargin: `${rootMargin}px 0px`,
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("animate");
    }
    if (!inView) {
      animation.start("initial");
    }
  }, [inView, animation]);

  return { ref, animation };
};

export default useScrollReveal;
