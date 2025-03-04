import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function ProjectItem({ project }) {
  const navigate = useNavigate();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      onClick={() => navigate('/projects')}
      className="relative h-64 w-full cursor-pointer overflow-hidden rounded-xl shadow-lg sm:h-72 md:h-80"
      whileHover={{ scale: 1.05 }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Image */}
      <img
        src={project.src}
        className="h-full w-full rounded-xl object-cover"
        alt={project.title}
      />

      <motion.div
        className="absolute bottom-0 flex w-full items-center justify-center bg-black bg-opacity-60 p-3"
        initial={{ y: '100%' }}
        animate={{ y: isHovering ? 0 : '100%' }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
        }}
      >
        <h1 className="text-center font-mono text-lg text-white">
          {project.title}
        </h1>
      </motion.div>
    </motion.div>
  );
}

export default ProjectItem;
