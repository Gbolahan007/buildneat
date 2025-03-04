import ProjectSectionListImage from './ProjectSectionListImage';

const projects = [
  '/construction.webp',
  '/construction2.webp',
  '/construction3.webp',
  '/construction4.webp',
  '/construction5.webp',
  '/construction6.webp',
  '/construction1 (3).webp',
  '/pop1.webp',
  '/pop2.webp',
  '/pop3.webp',
  '/blockworkNew.webp',
  '/bnn.webp',
  '/stairs1.webp',
  '/popNew.webp',
  '/cabinetNew.webp',
  '/construction7.webp',
  '/construction8.webp',
  '/constructionNew.webp',
  '/finishing1.webp',
  '/finishing2.webp',
  '/finishing3.webp',
  '/finishing4.webp',
  '/finishing5.webp',
  '/finishing6.webp',
  '/doorNew2.webp',
  '/doornew.webp',
  '/finishing9.webp',
  '/floor and wall tiles.webp',
  '/finishing.webp',
  '/construction9.webp',
  '/construction10.webp',
  '/constructionNew1.webp',
  '/constructionNew4.webp',
  '/constructionNew5.webp',
  '/constructionNew6.webp',
  '/renovation.webp',
  '/renovation1.webp',
  '/renovation2.webp',
  '/paintingNew.webp',
  '/formwork.webp',
  '/foundation.webp',
  '/foundationnew.webp',
  '/frontal tiling.webp',
  '/paintingNew.webp',
  '/popNew1.webp',
  '/roofNew.webp',
  '/stairsNew.webp',
  '/swimming pool construction.webp',
  '/tiles.webp',
  '/tiles7.webp',
  '/tilesNew.webp',
  '/wall tiles.webp',
  '/wall tiles2.webp',
  '/windowNew (1).webp',
];

function ProjectSectionImage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="mb-8 text-center text-3xl font-bold text-gray-800 md:text-4xl">
        Our Projects
      </h2>

      <div className="overflow-hidden rounded-lg border border-purple-300 bg-white shadow-lg">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {projects.map((path, index) => (
            <ProjectSectionListImage key={index} path={path} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectSectionImage;
