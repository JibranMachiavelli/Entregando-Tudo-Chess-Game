'use client';

import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';
import { TbSwords } from 'react-icons/tb';
import iconHorsePixel from '../../../public/assets/icon-horse-pixel-01.png';
import { useState, useContext } from 'react';
import { useRouter } from 'next/navigation';
import { ChessContext } from '../../../context/globalContext';
import ModalStartType from './ModalStartType';
import ModalStartTimer from './ModalStartTimer';
import ModalStartPlayer from './ModalStartPlayer';
import Game from '../../game/page';

export default function ModalStart({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [modalContent, setModalContent] = useState<string>('start');
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedTimer, setSelectedTimer] = useState<string | null>(null);
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);
  const { setType, setTime, setPlayer } = useContext(ChessContext);

  const handleSubmit = () => {
    if (selectedType && selectedTimer && selectedPlayer) {
      console.log('Iniciando partida com as informações:', {
        type: selectedType,
        timer: selectedTimer,
        player: selectedPlayer,
      });

      router.push('./game');
    } else {
      console.log('Faltam informações para iniciar a partida.');
      setModalContent('start');
    }
  };
  const flag = false;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="relative dark:bg-gray-700 rounded-lg w-[60vh] h-fit">
        <div className="flex flex-col items-center justify-center m-4 h-full gap-4">
          <IoMdClose
            className="absolute top-2 right-2 cursor-pointer transition-all hover:scale-95 hover:dark:bg-gray-500 rounded-md text-4xl text-gray-400"
            onClick={onClose}
          />
          <div className="flex items-center space-x-4">
            <Image
              src={iconHorsePixel}
              alt="Icon Inicial"
              objectFit="cover"
              className="rounded-full border h-24 w-24 text-center z-0"
            />
            <TbSwords className="text-white h-16 w-16" />
            <Image
              src={iconHorsePixel}
              alt="Icon Inicial"
              objectFit="cover"
              className="rounded-full border h-24 w-24 text-center z-0"
            />
          </div>
          {modalContent === 'start' && (
            <>
              <p className="text-gray-500 dark:text-gray-400 select-none">
                Selecione o tipo de partida:
              </p>
              <button
                onClick={() => setModalContent('type')}
                className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
              >
                <div className="block">
                  <div className="text-left w-full text-lg font-semibold select-none">
                    Type
                  </div>
                  <div className="w-full text-gray-500 dark:text-gray-400 select-none">
                    Selecione o tipo de jogo
                  </div>
                </div>
              </button>
              <button
                onClick={() => setModalContent('timer')}
                className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
              >
                <div className="block">
                  <div className="text-left w-full text-lg font-semibold select-none">
                    Timer
                  </div>
                  <div className="w-full text-gray-500 dark:text-gray-400 select-none">
                    Selecione o tempo que deseja
                  </div>
                </div>
              </button>
              <button
                onClick={() => setModalContent('players')}
                className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
              >
                <div className="block">
                  <div className="text-left w-full text-lg font-semibold select-none">
                    Players
                  </div>
                  <div className="w-full text-gray-500 dark:text-gray-400 select-none">
                    Selecione os jogadores
                  </div>
                </div>
              </button>
              <button
                className={`w-full h-20 text-2xl border-b-4 font-extrabold text-white rounded-lg transition-all focus:scale-98 shadow-md ${
                  selectedType && selectedTimer && selectedPlayer
                    ? 'border-green-700 bg-green-600'
                    : 'border-red-700 bg-red-600'
                }`}
                onClick={handleSubmit}
                disabled={!selectedType || !selectedTimer || !selectedPlayer}
              >
                Começar Partida
              </button>
            </>
          )}
          {modalContent === 'type' && (
            <ModalStartType
              onClick={() => setModalContent('start')}
              onSelect={(type) => {
                setSelectedType(type);
                setType(type);
              }}
            />
          )}
          {modalContent === 'timer' && (
            <ModalStartTimer
              onClick={() => setModalContent('start')}
              onSelect={(timer) => {
                setSelectedTimer(timer);
                setTime(timer);
              }}
            />
          )}
          {modalContent === 'players' && (
            <ModalStartPlayer
              onClick={() => setModalContent('start')}
              onSelect={(player) => {
                setSelectedPlayer(player);
                setPlayer(player);
              }}
            />
          )}
          {/* Passando para o Game */}
          {flag  &&
            selectedType !== null &&
            selectedTimer !== null &&
            selectedPlayer !== null && (
              <Game
                selectedType={selectedType}
                selectedTimer={selectedTimer}
                selectedPlayer={selectedPlayer}
              />
            )}
        </div>
      </div>
    </div>
  );
}
