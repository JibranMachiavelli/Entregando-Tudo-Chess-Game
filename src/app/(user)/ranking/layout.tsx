'use client';

import pawn_W from '../../public/assets/pieces/pawn_w (1).png';
import Image from 'next/image';
import '../../globals.css'; // Usando caminho relativo para importar o arquivo globals.css
import { CiMenuBurger } from 'react-icons/ci';
import { useState } from 'react';
import Link from 'next/link';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <html lang="pt-BR">
      <body className="fixed w-full">
        <nav className="bg-white border-gray-200 dark:bg-gray-900 opacity-95">
          <div className="flex items-center justify-between p-4 sm:mx-[15%]">
            <div className="flex items-center text-2xl font-semibold dark:text-white select-none">
              <Image
                src={pawn_W}
                alt="Peão NavBar"
                width={40}
                height={40}
              />
              ChessGame
            </div>
            <button
              className="sm:hidden items-center justify-center text-white text-2xl focus:bg-gray-700 focus:opacity-70 rounded-md p-2"
              onClick={handleToggleMenu}
            >
              <CiMenuBurger />
            </button>
            <div
              className={`hidden sm:flex sm:w-auto ${
                isMenuOpen ? 'block' : 'hidden'
              }`}
            >
              <ul className="flex items-center justify-center gap-8 text-white font-semibold">
                <li>
                  <Link href={'./home'}>
                    <p className=" cursor-pointer hover:text-blue-800">Home</p>
                  </Link>
                </li>
                <li>
                  <Link href={'./perfil'}>
                    <p className="cursor-pointer hover:text-blue-800">Perfil</p>
                  </Link>
                </li>
                <li>
                  <p className="cursor-pointer text-blue-600 hover:text-blue-800">
                    Ranking
                  </p>
                </li>
                <li>
                  <Link href={'../../login'}>
                    <p className="cursor-pointer hover:text-blue-800">Sair</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/*MOBILE*/}

          {isMenuOpen && (
            <div className="fixed right-0 sm:hidden bg-white rounded-lg shadow-lg text-center font-semibold">
              <ul>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <Link href={'./home'}>
                    <p className="block text-gray-800 hover:text-gray-900">
                      Home
                    </p>
                  </Link>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <Link href={'./perfil'}>
                    <p className="block text-gray-800 hover:text-gray-900">
                      Perfil
                    </p>
                  </Link>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <p className="block text-blue-800 hover:text-blue-900">
                    Ranking
                  </p>
                </li>
                <li className="py-2 px-4 hover:bg-gray-200">
                  <Link href={'../../login'}>
                    <p className="block text-gray-800 hover:text-gray-900">
                      Sair
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
        {children}
      </body>
    </html>
  );
}
