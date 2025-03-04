import { lazy, Suspense } from 'react';

const ServicesImage = lazy(() => import('./ServicesImage'));

const ServicesSectionproject = lazy(() => import('./ServicesSectionproject'));

function Services() {
  return (
    <div>
      <Suspense
        fallback={<div className="h-40 w-full animate-pulse bg-gray-200"></div>}
      >
        <ServicesImage />
      </Suspense>

      <Suspense
        fallback={<div className="h-40 w-full animate-pulse bg-gray-200"></div>}
      >
        <ServicesSectionproject />
      </Suspense>
    </div>
  );
}

export default Services;
