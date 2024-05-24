'use client';

import Image from 'next/image';
import iconHorsePixel from '../../../public/assets/icon-horse-pixel-01.png';

export default function ModalStartPlayer({
  setModalContent,
}: {
  setModalContent: any;
}) {
  return (
    <>
      <p className="text-gray-500 dark:text-gray-400 select-none">
        Selecione o jogador:
      </p>
      <button className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
        <Image
          src={iconHorsePixel}
          alt="Icon Inicial"
          objectFit="cover"
          className="rounded-full border h-12 w-12 text-center z-0"
        />
        <div className="text-left w-full text-gray-500 dark:text-gray-400 pl-2 select-none">
          Leonardo
        </div>
      </button>

      <button className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
        <Image
          src={iconHorsePixel}
          alt="Icon Inicial"
          objectFit="cover"
          className="rounded-full border h-12 w-12 text-center z-0"
        />
        <div className="text-left w-full text-gray-500 dark:text-gray-400 pl-2 select-none">
          Manuela
        </div>
      </button>

      <button className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
        <Image
          src={iconHorsePixel}
          alt="Icon Inicial"
          objectFit="cover"
          className="rounded-full border h-12 w-12 text-center z-0"
        />
        <div className="text-left w-full text-gray-500 dark:text-gray-400 pl-2 select-none">
          RRR
        </div>
      </button>

      <button
        className="w-full h-20 text-2xl border-b-4 border-red-700 bg-red-600 font-extrabold text-white rounded-lg transition-all focus:scale-98 shadow-md hover:scale-98 hover:shadow-red-900"
        onClick={() => setModalContent('start')}
      >
        Selecionar
      </button>
    </>
  );
}
