import { HiOutlineXMark } from 'react-icons/hi2';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function HamburgerMenuModal({ isOpenModal, setIsOpenModal }) {
  const navigate = useNavigate();
  return (
    <div>
      {isOpenModal && (
        <>
          {/* Blurry Overlay */}
          <motion.div
            className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpenModal(false)}
          ></motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
            className="font-oswald text-custom-black fixed right-0 top-0 z-[1000] h-screen w-80 bg-white p-2 px-3"
          >
            {/* Close Button */}

            <div className="cursor-pointer px-2 pb-5">
              <HiOutlineXMark onClick={() => setIsOpenModal(false)} size={24} />
            </div>

            {/* Menu Items */}
            <ul className="flex flex-col gap-3 p-2 px-3">
              <li>
                <button
                  onClick={() => {
                    navigate('/about');
                    setIsOpenModal(false);
                  }}
                  className="pb-2 uppercase hover:underline"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate('/projects');
                    setIsOpenModal(false);
                  }}
                  className="pb-2 uppercase hover:underline"
                >
                  Project
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate('/services');
                    setIsOpenModal(false);
                  }}
                  className="pb-2 uppercase hover:underline"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate('/contact');
                    setIsOpenModal(false);
                  }}
                  className="pb-2 uppercase hover:underline"
                >
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>
        </>
      )}
    </div>
  );
}

export default HamburgerMenuModal;
