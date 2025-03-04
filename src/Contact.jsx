import { lazy, Suspense } from 'react';

const ContactHeroImage = lazy(() => import('./ContactHeroImage'));
const ContactUs = lazy(() => import('./ContactUs'));

function Contact() {
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
  return (
    <div>
      <div className="min-h-screen bg-white">
        {/* Hero section */}
        <Suspense fallback={<HeroFallback />}>
          <ContactHeroImage />
        </Suspense>

        <Suspense fallback={<HeroFallback />}>
          <ContactUs />
        </Suspense>
      </div>
    </div>
  );
}

export default Contact;
