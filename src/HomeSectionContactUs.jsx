function HomeSectionContactUs() {
  const phoneNumber = '2349160006285';
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <div className="mx-4 my-8 flex flex-col items-center justify-between rounded-lg bg-yellow-300 bg-opacity-90 px-6 py-6 text-gray-900 transition-colors duration-300 sm:py-14 md:flex-row">
      {/* Text Section */}
      <div className="mb-6 w-full text-center md:mb-0 md:w-2/3 md:text-left">
        <h1 className="mb-2 text-2xl font-bold">
          Ready to Build Your Project?
        </h1>
        <p>
          Whether you have a specific project in mind or need assistance in
          planning and execution, we invite you to contact us today for a
          consultation. Together, we can build a brighter future for generations
          to come.
        </p>
      </div>

      {/* Button Section */}
      <div className="flex w-full justify-center md:w-1/3 md:justify-end">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="inline-block rounded bg-white px-6 py-3 font-medium text-gray-900 transition-colors duration-300 hover:bg-yellow-300 hover:text-gray-900"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default HomeSectionContactUs;
