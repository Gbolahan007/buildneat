function ProjectVideoSection() {
  return (
    <div className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold">Project Videos</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* First Video: POP Work */}
          <div className="overflow-hidden rounded-lg bg-white shadow-lg">
            <video
              className="h-64 w-full object-cover"
              controls
              preload="metadata"
            >
              <source src="/buildneat.mp4" type="video/mp4" />
              <source src="/buildneat.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">
                POP Installation Work
              </h3>
              <p className="text-gray-600">
                Footage showing ongoing POP ceiling installation, highlighting
                the precision, material handling, and finishing process on site.
              </p>
            </div>
          </div>

          {/* Second Video: General Construction */}
          <div className="overflow-hidden rounded-lg bg-white shadow-lg">
            <video
              className="h-64 w-full object-cover"
              controls
              preload="metadata"
            >
              <source src="/buildneat-1.mp4" type="video/mp4" />
              <source src="/buildneat-1.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <div className="p-6">
              <h3 className="mb-2 text-xl font-semibold">
                On-Site Construction Progress
              </h3>
              <p className="text-gray-600">
                A live look at ongoing building construction, capturing the
                structural work, team coordination, and real-time execution of
                project phases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectVideoSection;
