import { useState, useEffect, useContext } from 'react';
import { ChessContext } from '../../../context/globalContext';
import Image from 'next/image';
import iconHorsePixel from '../../../public/assets/icon-horse-pixel-01.png';

export default function ModalStartPlayer({ onClick, onSelect }: { onClick: () => void; onSelect: (player: string) => void }) {
  const { player, setPlayer } = useContext(ChessContext);
  const [selectedPlayer, setSelectedPlayer] = useState<string | null>(null);

  useEffect(() => {
    console.log('Jogador selecionado:', selectedPlayer);
  }, [selectedPlayer]);

  const handlePlayerClick = (playerName: string) => {
    setSelectedPlayer(playerName);
    console.log(playerName);
  };

  const handleSelectClick = () => {
    if (selectedPlayer) {
      setPlayer(selectedPlayer);
      onSelect(selectedPlayer);
      onClick();
    }
  };

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
    <>
      <p className="text-gray-500 dark:text-gray-400 select-none">
        Selecione o jogador:
      </p>

      <div className="overflow-auto h-[320.8px] space-y-4 bg-scroll scrollbar-thin scrollbar-webkit">
        {players.map((player) => (
          <button
            key={player}
            className={`inline-flex items-center justify-between w-full h-[93.6px] px-5 border rounded-lg cursor-pointer transition-all ${
              selectedPlayer === player
                ? 'border-b-4 border-blue-700 bg-blue-500 text-white'
                : 'text-gray-900 bg-white border-gray-200 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-gray-300 dark:border-gray-500 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500'
            }`}
            onClick={() => handlePlayerClick(player)}
          >
            <Image
              src={iconHorsePixel}
              alt="Icon Inicial"
              objectFit="cover"
              className="rounded-full border h-12 w-12 text-center z-0 overflow"
            />
            <div className={`text-left w-full pl-2 select-none ${
              selectedPlayer === player ? 'text-white' : 'text-gray-500 dark:text-gray-400'
            }`}>
              {player}
            </div>
          </button>
        ))}
      </div>

      <button
        className={`w-full h-20 text-2xl border-b-4 font-extrabold text-white rounded-lg transition-all focus:scale-98 shadow-md ${
          selectedPlayer ? 'border-green-700 bg-green-600' : 'border-red-700 bg-red-600'
        }`}
        onClick={handleSelectClick}
        disabled={!selectedPlayer}
      >
        Selecionar Jogador
      </button>
    </>
  );
}
