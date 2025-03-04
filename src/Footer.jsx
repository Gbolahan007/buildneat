import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { TfiEmail } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="mt-24 flex flex-col justify-around gap-4 bg-slate-100 py-16 text-center text-gray-900 sm:flex-row sm:text-left">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-4 text-2xl">Menu</h1>
        <ul className="flex w-fit flex-col gap-3">
          <li className="hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:underline">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="hover:underline">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:underline">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-4 text-2xl">Follow Us</h1>
        <div className="flex items-center gap-3">
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineInstagram
              size={30}
              className="transition-colors hover:text-red-500"
            />
          </a>

          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter
              size={24}
              className="transition-colors hover:text-blue-400"
            />
          </a>

          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp
              size={24}
              className="transition-colors hover:text-green-500"
            />
          </a>

          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook
              size={24}
              className="transition-colors hover:text-blue-600"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <a
          href="mailto:buildneatnigltd@gmail.com"
          className="flex items-center gap-3 hover:underline"
        >
          <TfiEmail
            className="transition-colors hover:text-red-600"
            size={30}
          />
          <h1 className="text-lg">buildneatnigltd@gmail.com</h1>
        </a>
      </div>
    </div>
  );
}

export default Footer;
