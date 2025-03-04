function AboutUsMissionAndVision() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="mb-12 text-center text-4xl font-bold md:text-5xl">
        Vision & Mission
      </h1>

      <div className="mx-auto px-4">
        <div className="rounded-lg border border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100 p-8 shadow-md">
          {/* Vision Section */}
          <div className="mb-12 text-center">
            <h2 className="mb-6 inline-block border-b-2 border-amber-500 pb-2 text-2xl font-bold uppercase tracking-wider text-gray-800">
              Vision
            </h2>

            <div className="mt-6 space-y-4 leading-relaxed text-gray-700">
              <p className="text-lg">
                At BuildNeatNigLtd, our vision is to redefine excellence in
                construction and finishing by delivering innovative,
                high-quality, and sustainable solutions.
              </p>

              <p>
                We strive to set new industry standards through precision,
                craftsmanship, and customer satisfaction.
              </p>

              <p>
                Our commitment is to transform spaces with functional,
                aesthetic, and enduring designs, ensuring that every project
                enhances the lives of our clients and communities.
              </p>

              <p>
                By embracing cutting-edge techniques and superior management, we
                aim to be a trusted leader in the construction industry,
                building a legacy of excellence for generations to come.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <span className="inline-flex items-center rounded-md bg-amber-500 px-4 py-2 font-medium text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Quality & Excellence
              </span>
            </div>
          </div>

          {/* Mission Section */}
          <div className="border-t border-gray-200 pt-8 text-center">
            <h2 className="mb-6 inline-block border-b-2 border-amber-500 pb-2 text-2xl font-bold uppercase tracking-wider text-gray-800">
              Mission
            </h2>

            <div className="mt-6 space-y-4 leading-relaxed text-gray-700">
              <p className="text-lg">
                Our mission is to deliver professional, high-quality, and
                technologically advanced solutions, ensuring timely completion
                within budget.
              </p>

              <p>
                We are committed to exceeding client expectations by
                consistently upholding the highest standards of craftsmanship,
                efficiency, and innovation.
              </p>

              <p>
                Through continuous improvement and a customer-centric approach,
                we strive to set new benchmarks in excellence while fostering
                long-term relationships built on trust and reliability.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <span className="inline-flex items-center rounded-md bg-amber-500 px-4 py-2 font-medium text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Trust & Reliability
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsMissionAndVision;
