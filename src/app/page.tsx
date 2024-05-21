'use client';

import Image from 'next/image';
import Link from 'next/link';
import Text from './components/general/Text';
import iconHorsePixel from './public/assets/icon-horse-pixel-01.png';

export default function initialPage() {
  return (
    <>
      <div className="">
        <Link
          href="./login"
          className="cursor-default"
        >
          <div className="w-screen h-screen bg-gradient-to-r from-[#014040] via-[#02735E] to-[#03A678]">
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
            <div className="fixed top-[41.67vh] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex flex-col items-center justify-center z-0">
                <div className="relative text-center z-0">
                  <div className="absolute top-0 right-8 w-96 h-96 bg-[#02735E] mix-blend-multiply filter blur-xl opacity-70 rounded-full animate-blob z-10"></div>
                  <div className="absolute top-0 left-20 w-96 h-96 bg-[#03A678] mix-blend-multiply filter blur-xl opacity-70 rounded-full animate-blob animation-delay-2000 z-10"></div>
                  <div className="absolute bottom-8 left-22 w-96 h-96 bg-[#3abd2e] mix-blend-multiply filter blur-xl opacity-70 rounded-full animate-blob animation-delay-4000 z-10"></div>
                  <h1 className="relative text-8xl text-white font-bold z-20">
                    Chess
                  </h1>
                  <h2 className="relative text-6xl text-white font-medium z-20">
                    Legends
                  </h2>
                </div>
              </div>
            </div>

            <div className="fixed bottom-0 left-0 w-full flex justify-center mb-20">
              <p className="text-white font-light">Click to continue...</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
