
import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const AnimatedSection = ({ 
  children, 
  delay = 0, 
  className = "",
  direction = "up" 
}: AnimatedSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const getAnimationProps = () => {
    const baseProps = {
      initial: { opacity: 0 },
      animate: isInView ? { opacity: 1 } : { opacity: 0 },
      transition: { duration: 0.6, delay },
    };

    switch (direction) {
      case "up":
        return {
          ...baseProps,
          initial: { ...baseProps.initial, y: 50 },
          animate: isInView ? { ...baseProps.animate, y: 0 } : { ...baseProps.initial },
        };
      case "down":
        return {
          ...baseProps,
          initial: { ...baseProps.initial, y: -50 },
          animate: isInView ? { ...baseProps.animate, y: 0 } : { ...baseProps.initial },
        };
      case "left":
        return {
          ...baseProps,
          initial: { ...baseProps.initial, x: 50 },
          animate: isInView ? { ...baseProps.animate, x: 0 } : { ...baseProps.initial },
        };
      case "right":
        return {
          ...baseProps,
          initial: { ...baseProps.initial, x: -50 },
          animate: isInView ? { ...baseProps.animate, x: 0 } : { ...baseProps.initial },
        };
      default:
        return baseProps;
    }
  };

  return (
    <motion.div ref={ref} {...getAnimationProps()} className={className}>
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
