import { lazy, Suspense } from 'react';
import StickyButton from './StickyButton';

// Lazy load components
const HeroSection = lazy(() => import('./HeroSection'));
const HerotextSection = lazy(() => import('./HerotextSection'));
const HeroIconsSection = lazy(() => import('./HeroIconsSection'));
const HomeSectionProject = lazy(() => import('./HomeSectionProject'));
const HomeSectionContactUs = lazy(() => import('./HomeSectionContactUs'));

// Custom loading fallbacks
const HeroFallback = () => (
  <div className="flex h-screen w-full items-center justify-center bg-gradient-to-b from-gray-100 to-gray-200">
    <div className="animate-pulse text-gray-400">
      <svg
        className="mx-auto mb-3 h-12 w-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
      <p className="text-center font-medium">Loading...</p>
    </div>
  </div>
);

const SectionFallback = () => (
  <div className="w-full px-4 py-16">
    <div className="mx-auto max-w-7xl">
      <div className="mb-6 h-8 w-1/3 animate-pulse rounded bg-gray-200"></div>
      <div className="mb-3 h-4 w-2/3 animate-pulse rounded bg-gray-200"></div>
      <div className="mb-8 h-4 w-1/2 animate-pulse rounded bg-gray-200"></div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-40 animate-pulse rounded bg-gray-200"></div>
        ))}
      </div>
    </div>
  </div>
);

function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero section */}
      <Suspense fallback={<HeroFallback />}>
        <HeroSection />
      </Suspense>

      {/* Text section */}
      <Suspense fallback={<SectionFallback />}>
        <HerotextSection />
      </Suspense>

      {/* Icons section */}
      <Suspense fallback={<SectionFallback />}>
        <HeroIconsSection />
      </Suspense>

      {/* Project section */}
      <Suspense fallback={<SectionFallback />}>
        <HomeSectionProject />
      </Suspense>

      {/* Contact section */}
      <Suspense fallback={<SectionFallback />}>
        <HomeSectionContactUs />
      </Suspense>

      {/* Sticky Button */}
      <StickyButton />
    </div>
  );
}

export default Home;
