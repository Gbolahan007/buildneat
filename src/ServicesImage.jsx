function ServicesImage() {
  return (
    <div className="relative h-[600px] w-screen overflow-hidden">
      <img
        src="/finishing1.webp"
        className="h-full w-full object-cover"
        alt="About-Us"
      />

      <div className="absolute left-10 top-1/2 -translate-y-1/2 bg-primary bg-opacity-50 px-8 py-16 font-mono text-white lg:translate-x-10">
        <h1 className="text-5xl sm:text-7xl">Services</h1>
      </div>
    </div>
  );
}

export default ServicesImage;
