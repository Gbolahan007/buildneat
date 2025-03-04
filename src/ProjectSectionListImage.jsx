function ProjectSectionListImage({ path, index }) {
  return (
    <div className="group relative aspect-square overflow-hidden">
      <img
        src={path}
        alt={`Construction project ${index + 1}`}
        className="h-full w-full rounded-md transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20"></div>
    </div>
  );
}

export default ProjectSectionListImage;
