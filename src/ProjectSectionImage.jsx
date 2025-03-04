import ProjectSectionListImage from './ProjectSectionListImage';

const projects = [
  '/public/project/construction.webp',
  '/public/project/construction2.webp',
  '/public/project/construction3.webp',
  '/public/project/construction4.webp',
  '/public/project/construction5.webp',
  '/public/project/construction6.webp',
  '/public/project/construction1 (3).webp',
  '/public/project/pop1.webp',
  '/public/project/pop2.webp',
  '/public/project/pop3.webp',
  '/public/project/blockworkNew.webp',
  '/public/project/bnn.webp',
  '/public/project/stairs1.webp',
  '/public/project/popNew.webp',
  '/public/project/cabinetNew.webp',
  '/public/project/construction7.webp',
  '/public/project/construction8.webp',
  '/public/project/constructionNew.webp',
  '/public/project/finishing1.webp',
  '/public/project/finishing2.webp',
  '/public/project/finishing3.webp',
  '/public/project/finishing4.webp',
  '/public/project/finishing5.webp',
  '/public/project/finishing6.webp',
  '/public/project/doorNew2.webp',
  '/public/project/doornew.webp',
  '/public/project/finishing9.webp',
  '/public/project/floor and wall tiles.webp',
  '/public/project/finishing.webp',
  '/public/project/construction9.webp',
  '/public/project/construction10.webp',
  '/public/project/constructionNew1.webp',
  '/public/project/constructionNew2.webp',
  '/public/project/constructionNew3.webp',
  '/public/project/constructionNew4.webp',
  '/public/project/constructionNew5.webp',
  '/public/project/constructionNew6.webp',
  '/public/project/renovation.webp',
  '/public/project/renovation1.webp',
  '/public/project/renovation2.webp',
  '/public/project/paintingNew.webp',
  '/public/project/formwork.webp',
  '/public/project/foundation.webp',
  '/public/project/foundationnew.webp',
  '/public/project/frontal tiling.webp',
  '/public/project/paintingNew.webp',
  '/public/project/popNew1.webp',
  '/public/project/roofNew.webp',
  '/public/project/stairsNew.webp',
  '/public/project/swimming pool construction.webp',
  '/public/project/tiles.webp',
  '/public/project/tiles7.webp',
  '/public/project/tilesNew.webp',
  '/public/project/wall tiles.webp',
  '/public/project/wall tiles2.webp',
  '/public/project/windowNew (1).webp',
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
