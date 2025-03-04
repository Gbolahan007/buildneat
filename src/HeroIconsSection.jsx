// IconsSection.js
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import { LuConstruction } from 'react-icons/lu';
import { MdOutlineRealEstateAgent } from 'react-icons/md';
import { TbBuildingFortress } from 'react-icons/tb';

const icons = [
  { icon: <HiOutlineHomeModern size={48} />, label: 'Renovation' },
  { icon: <TbBuildingFortress size={48} />, label: 'Material Procurement' },
  {
    icon: <LuConstruction size={48} />,
    label: 'Building Construction and finishes',
  },
  {
    icon: <MdOutlineRealEstateAgent size={48} />,
    label: 'Real Estate Developments',
  },
];

const IconsSection = () => {
  const iconsRef = useRef(null);
  const iconsInView = useInView(iconsRef, { once: true, threshold: 0.2 });

  return (
    <motion.div
      ref={iconsRef}
      initial={{ opacity: 0 }}
      animate={iconsInView ? { opacity: 1, transition: { duration: 5 } } : {}}
      className="my-3 mt-20 grid grid-cols-2 items-center justify-center gap-5 sm:mx-28 sm:grid-cols-4"
    >
      {icons.map((item, i) => (
        <div
          key={i}
          className="mx-auto flex w-fit flex-col items-center justify-center transition-transform duration-300 hover:scale-110"
        >
          <button className="mb-4 rounded-full bg-yellow-300 p-3 text-white">
            {item.icon}
          </button>
          <h1 className="text-center text-gray-900">{item.label}</h1>
        </div>
      ))}
    </motion.div>
  );
};

export default IconsSection;
