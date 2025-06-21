import { lazy, Suspense } from 'react';

// Lazy load components
const AboutUsImage = lazy(() => import('./AboutUsImage'));
const AboutUsImageSection = lazy(() => import('./AboutUsImageSection'));
const AboutProjectSection = lazy(() => import('./AboutProjectSection'));
const AboutUsHistory = lazy(() => import('./AboutUsHistory'));
const AboutUsMissionAndVision = lazy(() => import('./AboutUsMissionAndVision'));
const AboutValues = lazy(() => import('./AboutValues'));

function About() {
  return (
    <div>
      <Suspense
        fallback={<div className="h-40 w-full animate-pulse bg-gray-200"></div>}
      >
        <AboutUsImage />
      </Suspense>

      <div className="mt-10 grid w-full gap-6 px-4 sm:gap-8 md:grid-cols-1 lg:grid-cols-2 lg:px-12">
        {/* Left Side: Sticky Image and Heading */}
        <Suspense
          fallback={<div className="h-80 animate-pulse bg-gray-200"></div>}
        >
          <AboutUsImageSection />
        </Suspense>

        {/* Right Side: Scrollable About Project Section */}
        <div className="max-h-[80vh] overflow-y-auto">
          <Suspense
            fallback={<div className="h-80 animate-pulse bg-gray-200"></div>}
          >
            <AboutProjectSection />
          </Suspense>
        </div>
      </div>

      <Suspense
        fallback={<div className="h-40 w-full animate-pulse bg-gray-200"></div>}
      >
        <AboutUsHistory />
      </Suspense>

      <Suspense
        fallback={<div className="h-40 w-full animate-pulse bg-gray-200"></div>}
      >
        <AboutValues />
      </Suspense>
      <Suspense
        fallback={<div className="h-40 w-full animate-pulse bg-gray-200"></div>}
      >
        <AboutUsMissionAndVision />
      </Suspense>
    </div>
  );
}

export default About;
