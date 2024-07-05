'use client';

import { useState } from 'react';
import Image from 'next/image';
import ModalStart from './components/ModalStart';
import iconHorsePixel from '../../public/assets/icon-horse-pixel-01.png';
import Button from '../../components/general/Button';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleToggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#014040] via-[#02735E] to-[#03A678]">
      <div className="flex flex-col items-center text-center justify-center h-screen gap-16">
        <div className="pb-16">
          <h1 className="text-4xl sm:text-6xl text-white font-bold ">
            Bem vindo ao Jogo!
          </h1>
          <p className="text-2xl hover:text-white hover:opacity-70 opacity-0 transition-all scale-98 pt-8">
            Isso não é apenas um jogo
          </p>
        </div>
        <button
          className="active:scale-98 transition-all rounded-md hover:-translate-y-px mt-20 w-60 h-16 font-bold text-2xl hover:bg-gray-700 text-white bg-gray-900 shadow-sm shadow-gray-700 hover:shadow-gray-900"
          onClick={handleToggleModal}
        >
          Jogar
        </button>
      </div>
      {isModalOpen && <ModalStart onClose={handleToggleModal} />}
    </div>
  );
}
