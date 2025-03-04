import { PiBuildingFill } from 'react-icons/pi';
import ServicesProjectItem from './ServicesProjectItem';

const projects = [
  {
    src: '/construction.webp',
    title: 'Building Construction & Concrete Works',
  },
  { src: '/pop2.webp', title: 'POP Ceiling & Decorative Finishes' },
  { src: '/project/stairs1.webp', title: 'Tiling & Flooring Solutions' },
  {
    src: '/construction2.webp',
    title: 'Renovation & Remodeling Services',
  },
  { src: '/finishing1.webp', title: 'Painting & Wall Finishes' },
  { src: '/finishing6.webp', title: 'Material Procurement' },
];

function ServicesSectionproject() {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-100 px-3 py-20">
      {/* Section Header */}
      <div className="mb-12 flex items-center gap-4 border-b border-gray-200 pb-4">
        <PiBuildingFill size={36} className="text-blue-600" />
        <h1 className="font-sans text-4xl font-bold tracking-tight text-gray-800">
          What We Do
        </h1>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {projects.map((project, index) => (
          <ServicesProjectItem key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ServicesSectionproject;
