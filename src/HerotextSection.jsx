import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';

const TextSection = () => {
  const textRef = useRef(null);
  const textInView = useInView(textRef, { once: true, threshold: 0.2 });

  return (
    <motion.div
      ref={textRef}
      initial={{ opacity: 0 }}
      animate={textInView ? { opacity: 1, transition: { duration: 3 } } : {}}
      className="mt-36 px-2 text-center font-serif text-lg tracking-wider sm:mx-20 sm:text-4xl"
    >
      Among the fastest growing and most{' '}
      <span className="text-yellow-300">dynamic construction and civil</span>{' '}
      engineering companies in Nigeria
    </motion.div>
  );
};

export default TextSection;
