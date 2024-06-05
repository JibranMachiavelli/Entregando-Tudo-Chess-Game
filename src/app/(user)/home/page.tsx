'use client';

import { useState } from 'react';
import Image from 'next/image';
import ModalStart from './components/ModalStart';
import iconHorsePixel from '../../public/assets/icon-horse-pixel-01.png';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<Boolean>(false);

  function handleToggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  const players = [
    'Jibran',
    'RRR',
    'Chico',
    'Tarcnux',
    'Brian',
    'Guga',
    'Sérgio',
    'Alexandre',
    'Peri',
    'Rafa',
    'Charles',
    'Guilherme',
    'Rodrigo',
  ];

  return (
      <div className="w-screen h-screen bg-gradient-to-r from-[#014040] via-[#02735E] to-[#03A678] relative">
        <div className="flex items-center">
              <div className="border-b m-2 w-full z-20"></div>
              <div className="relative w-12 h-12 m-2">
                <Image
                  src={iconHorsePixel}
                  alt="Icon Inicial"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full z-20"
                />
              </div>
            </div>
        <div className="flex justify-center items-center h-[85vh]">
          <div className="relative text-9xl font-extrabold select-none animate-revealFromRight text-white px-4 pb-2 rounded-md mb-28">
            Chess
          </div>
        </div>
        <div className="z-20 absolute top-1/2 right-3/4 transform -translate-y-1/2 bg-white bg-opacity-20 rounded-xl p-4 text-white w-1/5">
          <h1 className="text-4xl text-white font-extrabold py-4 text-center mb-4">Ranking</h1>
          <div className="overflow-auto h-[320.8px] space-y-4 bg-scroll scrollbar-thin scrollbar-webkit">
            {players.map((player) => (
              <button
                key={player}
                className="inline-flex items-center justify-between w-full h-[93.6px] px-5 border rounded-lg"
              >
                <Image
                  src={iconHorsePixel}
                  alt="Icon Inicial"
                  objectFit="cover"
                  className="rounded-full border h-12 w-12 text-center z-0 overflow"
                />
                <div>{player}</div>
              </button>
            ))}
          </div>
        </div>
        <div className="absolute bottom-20 w-full flex justify-center">
          <div className="relative inline-flex group">
            <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
            <button
              className="relative text-4xl active:scale-98 inline-flex items-center justify-center w-72 h-20 font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              onClick={handleToggleModal}
            >
              Jogar
            </button>
          </div>
        </div>
        {isModalOpen && <ModalStart onClose={handleToggleModal} />}
      </div>
  );
}
