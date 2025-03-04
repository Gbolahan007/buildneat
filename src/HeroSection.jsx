// HeroSection.js
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const images = [
  {
    src: '/background2.webp',
    title: 'Building Visions',
    paragraph:
      'Turning your construction aspirations into reality, one project at a time.',
  },
  {
    src: '/background3.webp',
    title: 'Creating Future Structures',
    paragraph: 'Innovating the way we build for a better tomorrow.',
  },
  {
    src: '/background1.webp',
    title: 'Engineering Excellence',
    paragraph:
      'Building strong foundations and innovative designs for a lasting future.',
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [zooming, setZooming] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === images.length - 1) {
        setZooming(false);
        setIndex(0);
      } else {
        setIndex((prevIndex) => prevIndex + 1);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative h-[600px] w-screen overflow-hidden">
      <motion.img
        key={images[index].src}
        src={images[index].src}
        className="absolute h-full w-full"
        alt=""
        initial={{ scale: 1 }}
        animate={{ scale: zooming ? 1.3 : 1 }}
        transition={{ duration: 8, ease: 'linear' }}
      />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-primary bg-opacity-50 px-8 py-16 font-mono text-white lg:translate-x-10">
        <motion.div
          key={images[index].title}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <h1 className="pb-5 text-2xl sm:text-5xl lg:text-7xl">
            {images[index].title}
          </h1>
          <p className="text-lg uppercase lg:text-2xl">
            {images[index].paragraph}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
