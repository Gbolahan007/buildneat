import { HiOutlineBars4 } from 'react-icons/hi2';
import Logo from './Logo';
import HeaderNav from './HeaderNav';
import { useState } from 'react';
import HamburgerMenuModal from './HamburgerMenuModal';
import { AnimatePresence } from 'framer-motion';
function Header() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleModal() {
    setIsOpenModal(true);
  }
  return (
    <div className="flex items-center justify-between">
      <nav className="flex w-full items-center justify-between bg-white px-3 py-2 pt-4 shadow-2xl sm:justify-around">
        <Logo />
        <HeaderNav />
      </nav>

      <div className="cursor-pointer sm:hidden">
        <button
          onClick={handleModal}
          className="rounded-full p-2 transition-all duration-200 hover:bg-gray-100"
        >
          <HiOutlineBars4 size={27} />
        </button>
      </div>

      <AnimatePresence>
        {isOpenModal && (
          <HamburgerMenuModal
            isOpenModal={isOpenModal}
            setIsOpenModal={setIsOpenModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
