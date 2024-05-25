'use client';

import { useState } from 'react';
import Navbar from '../../components/navigation/Navbar';
import ModalStart from './components/ModalStart';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);

  function handleToggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-r from-[#014040] via-[#02735E] to-[#03A678]">
        <Navbar />
        <div className="fixed w-screen h-[85vh] flex items-center justify-center text-6xl font-bold text-white select-none z-0">
          Chess
        </div>
        <div className="h-screen w-screen flex justify-center items-end pb-52">
          <div className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <button
              className="relative active:scale-98 inline-flex items-center justify-center w-60 h-14 text-2xl font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              onClick={handleToggleModal}
            >
              Jogar
            </button>
          </div>
        </div>
        {isModalOpen && <ModalStart onClose={handleToggleModal} />}
      </div>
    </>
  );
}
