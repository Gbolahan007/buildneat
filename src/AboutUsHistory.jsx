import { FaBriefcase } from 'react-icons/fa';

function AboutUsHistory() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="mb-12 text-center text-4xl font-bold md:text-5xl">
        Our CEO
      </h1>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 rounded-lg border border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 p-6 px-4 shadow-md lg:grid-cols-[300px_1fr] lg:px-12">
        {/* CEO Image */}
        <div className="mx-auto w-[300px]">
          <img
            src="/public/project/CEO.webp"
            alt="CEO Adepoju Bankole"
            className="h-auto w-full rounded shadow-lg"
          />
        </div>

        {/* CEO Information */}
        <div className="mx-auto max-w-3xl">
          <div className="text-center sm:text-left">
            {/* CEO Name */}
            <h1 className="mb-3 inline-block border-b-2 border-amber-500 pb-2 text-3xl font-bold uppercase tracking-wider text-gray-800">
              Builder Adepoju Bankole
            </h1>

            {/* CEO Description */}
            <div className="mt-6 space-y-4 leading-relaxed text-gray-700">
              <p className="text-lg">
                Bldr. Adepoju Bankole is a highly skilled professional with
                extensive experience in construction and finishes, renovation,
                and real estate development.
              </p>

              <p>
                He has a deep understanding of structural integrity, modern
                finishing techniques, and high-quality craftsmanship, ensuring
                that every project meets the highest industry standards.
              </p>

              <p>
                As a member of the Nigerian Institute of Builders (NIOB), he
                upholds professionalism and best practices in the field.
              </p>

              <p>
                Over the years, he has worked with multinational companies such
                as Cappa & D&apos;Alberto, Masgar, and Julius Berger,
                contributing his expertise to large-scale and high-end projects.
              </p>

              <p className="font-medium">
                His commitment to excellence and attention to detail make him a
                trusted name in the industry.
              </p>
            </div>

            {/* NIOB Membership Badge */}
            <div className="mt-8 flex justify-center sm:justify-start">
              <span className="inline-flex items-center gap-3 rounded-md bg-amber-500 px-4 py-2 font-medium text-white">
                <FaBriefcase size={24} />
                NIOB Member
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsHistory;
