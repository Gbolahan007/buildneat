import { lazy, Suspense } from 'react';

const ProjectHeroSectionImage = lazy(() => import('./ProjectHeroSectionImage'));

const ProjectSectionImage = lazy(() => import('./ProjectSectionImage'));

function Projects() {
  return (
    <div>
      <Suspense
        fallback={<div className="h-40 w-full animate-pulse bg-gray-200"></div>}
      >
        <ProjectHeroSectionImage />
      </Suspense>

      <Suspense
        fallback={<div className="h-40 w-full animate-pulse bg-gray-200"></div>}
      >
        <ProjectSectionImage />
      </Suspense>
    </div>
  );
}

export default Projects;
