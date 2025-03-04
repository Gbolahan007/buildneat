import { NavLink } from 'react-router-dom';

function HeaderNav() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex gap-10 text-lg font-bold uppercase tracking-wide">
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? 'border-b-4 border-yellow-500 pb-1 text-yellow-500'
                : 'text-gray-700 transition-all duration-300 hover:text-yellow-500'
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? 'border-b-4 border-yellow-500 pb-1 text-yellow-500'
                : 'text-gray-700 transition-all duration-300 hover:text-yellow-500'
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? 'border-b-4 border-yellow-500 pb-1 text-yellow-500'
                : 'text-gray-700 transition-all duration-300 hover:text-yellow-500'
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? 'border-b-4 border-yellow-500 pb-1 text-yellow-500'
                : 'text-gray-700 transition-all duration-300 hover:text-yellow-500'
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
