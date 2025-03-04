import { motion } from 'framer-motion';

function AboutProjectSection() {
  return (
    <section className="bg-gray-100 px-6 py-16 sm:px-12 md:px-20">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6 text-center font-serif text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl"
      >
        BuildNeatNigLtd: Excellence in Building Construction & Finishing
      </motion.h1>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-8 text-center text-lg text-gray-600 sm:text-xl"
      >
        <p>
          Established in 2006, BuildNeatNigLtd blends{' '}
          <strong>expert management</strong> with{' '}
          <strong>cutting-edge engineering and design</strong> to deliver
          top-quality{' '}
          <strong>building construction and finishing services</strong> across
          Nigeria, ensuring{' '}
          <strong>functionality, aesthetics, and durability</strong>.{' '}
        </p>
      </motion.div>

      {/* Core Services */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="mb-6 text-center font-serif text-2xl font-semibold text-gray-800 sm:text-3xl">
          Our Core Services
        </h2>
        <ul className="grid gap-4 sm:grid-cols-1 md:grid-cols-1 lg:px-12">
          <li className="rounded-lg bg-white p-4 shadow-md">
            <span className="text-green-500">✔</span>{' '}
            <strong className="text-gray-800">Renovation & Remodeling</strong>:
            Modernizing and improving spaces with innovative designs.
          </li>
          <li className="rounded-lg bg-white p-4 shadow-md">
            <span className="text-green-500">✔</span>{' '}
            <strong className="text-gray-800">Painting & Wall Finishing</strong>
            : High-quality interior and exterior finishes for lasting appeal.
          </li>
          <li className="rounded-lg bg-white p-4 shadow-md">
            <span className="text-green-500">✔</span>{' '}
            <strong className="text-gray-800">Building Construction</strong>:
            End-to-end construction with attention to strength and aesthetics.
          </li>
          <li className="rounded-lg bg-white p-4 shadow-md">
            <span className="text-green-500">✔</span>{' '}
            <strong className="text-gray-800">Tiling & Floor Finishing</strong>:
            Elegant, durable flooring solutions.
          </li>
          <li className="rounded-lg bg-white p-4 shadow-md">
            <span className="text-green-500">✔</span>{' '}
            <strong className="text-gray-800">POP & Decorative Finishes</strong>
            : Expert-crafted ceilings, moldings, and unique enhancements.
          </li>
          <li className="rounded-lg bg-white p-4 shadow-md">
            <span className="text-green-500">✔</span>{' '}
            <strong className="text-gray-800">
              Project Management & Consultancy
            </strong>
            : Professional oversight and strategic execution.
          </li>
        </ul>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="flex flex-col items-center justify-center"
      >
        <h2 className="mb-6 text-center font-serif text-2xl font-semibold text-gray-800 sm:text-3xl">
          Why Choose Us?
        </h2>
        <div className="space-y-6 text-lg text-gray-600 sm:text-xl">
          <p>
            We leverage <strong>advanced machinery</strong> and skilled
            professionals to ensure efficiency, precision, and timely project
            delivery.
          </p>
          <p>
            Our <strong>strategic material sourcing</strong> allows us to
            maintain high standards while keeping costs competitive.
          </p>
          <p>
            With a commitment to{' '}
            <strong>quality, innovation, and client satisfaction</strong>, we
            create lasting impressions with every project.
          </p>
          <p className="text-center font-bold text-gray-800">
            At BuildNeatNigLtd, we don’t just construct buildings—we build
            excellence.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutProjectSection;
