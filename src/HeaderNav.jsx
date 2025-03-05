import { NavLink } from 'react-router-dom';

function HeaderNav() {
  return (
    <nav className="hidden sm:block">
      <ul className="flex gap-10 text-lg font-bold uppercase tracking-wide">
        <li>
          <NavLink
            to="/about-construction-company"
            className={({ isActive }) =>
              isActive
                ? 'border-b-4 border-yellow-500 pb-1 text-yellow-500'
                : 'text-gray-700 transition-all duration-300 hover:text-yellow-500'
            }
            aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/our-construction-projects"
            className={({ isActive }) =>
              isActive
                ? 'border-b-4 border-yellow-500 pb-1 text-yellow-500'
                : 'text-gray-700 transition-all duration-300 hover:text-yellow-500'
            }
            aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/construction-services"
            className={({ isActive }) =>
              isActive
                ? 'border-b-4 border-yellow-500 pb-1 text-yellow-500'
                : 'text-gray-700 transition-all duration-300 hover:text-yellow-500'
            }
            aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact-construction-experts"
            className={({ isActive }) =>
              isActive
                ? 'border-b-4 border-yellow-500 pb-1 text-yellow-500'
                : 'text-gray-700 transition-all duration-300 hover:text-yellow-500'
            }
            aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
