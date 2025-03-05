import { AiOutlineInstagram } from 'react-icons/ai';
import { BsFacebook, BsWhatsapp } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { TfiEmail } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="mt-24 bg-slate-100 py-16 text-gray-900">
      <div className="container mx-auto flex flex-col gap-8 text-center sm:flex-row sm:justify-between sm:text-left">
        {/* Menu Links */}
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="mb-4 text-2xl font-semibold">Quick Links</h2>
          <ul className="flex flex-col gap-3 text-lg">
            <li className="hover:underline">
              <Link to="/about-construction-company">About Us</Link>
            </li>
            <li className="hover:underline">
              <Link to="/our-construction-projects">Projects</Link>
            </li>
            <li className="hover:underline">
              <Link to="/construction-services">Services</Link>
            </li>
            <li className="hover:underline">
              <Link to="/contact-construction-experts">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center">
          <h2 className="mb-4 text-2xl font-semibold">Follow Us</h2>
          <div className="flex gap-4">
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
            >
              <AiOutlineInstagram
                size={32}
                className="transition hover:text-red-500"
              />
            </a>

            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Twitter"
            >
              <FiTwitter size={28} className="transition hover:text-blue-400" />
            </a>

            <a
              href="https://wa.me/yourphonenumber"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
            >
              <BsWhatsapp
                size={28}
                className="transition hover:text-green-500"
              />
            </a>

            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
            >
              <BsFacebook
                size={28}
                className="transition hover:text-blue-600"
              />
            </a>
          </div>
        </div>

        {/* Contact Email */}
        <div className="flex flex-col items-center sm:items-end">
          <h2 className="mb-4 text-2xl font-semibold">Get in Touch</h2>
          <a
            href="mailto:buildneatnigltd@gmail.com"
            className="flex items-center gap-3 text-lg hover:underline"
          >
            <TfiEmail className="transition hover:text-red-600" size={32} />
            <span className="break-all">buildneatnigltd@gmail.com</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
