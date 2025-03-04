import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <Link to="/home" className="flex items-center">
        <div className="h-12 w-auto">
          <img
            src="/logo1.PNG"
            className="h-full w-auto object-contain"
            alt="Logo"
          />
        </div>
        <div className="ml-2">
          <h1 className="text-lg font-bold leading-tight text-gray-800">
            Build Neat
          </h1>
          <p className="text-xs font-medium text-gray-600">Nig ltd</p>
        </div>
      </Link>
    </div>
  );
}

export default Logo;
