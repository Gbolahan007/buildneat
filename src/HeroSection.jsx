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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px] w-screen overflow-hidden">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={false}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            scale: index === currentIndex ? 1.05 : 1,
          }}
          transition={{
            opacity: { duration: 1.5, ease: 'easeInOut' },
            scale: { duration: 8, ease: 'linear' },
          }}
        >
          <img
            src={image.src}
            alt={image.title}
            className="h-full w-full"
            style={{ transform: 'scale(1)' }}
          />
        </motion.div>
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

      <div className="absolute inset-0 flex items-center">
        <div className="ml-8 max-w-2xl lg:ml-16">
          <motion.div
            key={currentIndex}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white"
          >
            <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              {images[currentIndex].title}
            </h1>
            <p className="max-w-lg text-lg leading-relaxed lg:text-xl">
              {images[currentIndex].paragraph}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'scale-125 bg-white'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
