function AboutUsImageSection() {
  return (
    <div className="relative">
      <div className="sticky top-4">
        <h1 className="py-4 text-2xl font-bold uppercase text-gray-800 sm:text-3xl md:text-4xl">
          We Build Your Comfort
        </h1>
        <div className="h-[300px] w-full overflow-hidden rounded-lg shadow-md md:h-[400px]">
          <img
            className="h-full w-full object-cover"
            src="/renovation6.webp"
            alt="BuildNeatNigLtd Construction"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUsImageSection;
