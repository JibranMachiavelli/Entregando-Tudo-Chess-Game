import { useState, useEffect, useContext } from 'react';
import { ChessContext } from '../../../context/globalContext';

export default function ModalStartTimer({ onClick, onSelect }: { onClick: () => void; onSelect: (timer: string) => void }) {
  const [selectedTimer, setSelectedTimer] = useState<string | null>(null);
  const { setTime } = useContext(ChessContext);

  const handleTimerClick = (timer: string) => {
    setSelectedTimer(timer);
  };

  const handleSelectClick = () => {
    if (selectedTimer) {
      setTime(selectedTimer);
      onSelect(selectedTimer);
      onClick();
    }
  };

  const timers = [
    { time: '3 min', description: 'Partida bullet' },
    { time: '5 min', description: 'Partida blitz' },
    { time: '10 min', description: 'Partida rápida' },
  ];

  return (
    <>
      <p className="text-gray-500 dark:text-gray-400 select-none">
        Selecione o tempo de jogo:
      </p>
      <div className="h-[320.8px] space-y-4 w-full">
        {timers.map(({ time, description }) => (
          <button
            key={time}
            className={`inline-flex items-center justify-between w-full p-5 border rounded-lg cursor-pointer transition-all ${
              selectedTimer === time
                ? 'border-b-4 border-blue-700 bg-blue-500 text-white'
                : 'text-gray-900 bg-white border-gray-200 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-gray-300 dark:border-gray-500 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500'
            }`}
            onClick={() => handleTimerClick(time)}
          >
            <div className="block">
              <div className="text-left w-full text-lg font-semibold select-none">{time}</div>
              <div className="w-full text-gray-500 dark:text-gray-400 select-none">{description}</div>
            </div>
          </button>
        ))}
      </div>
      <button
        className={`w-full h-20 text-2xl border-b-4 font-extrabold text-white rounded-lg transition-all focus:scale-98 shadow-md ${
          selectedTimer ? 'border-green-700 bg-green-600' : 'border-red-700 bg-red-600'
        }`}
        onClick={handleSelectClick}
        disabled={!selectedTimer}
      >
        Selecionar Tempo
      </button>
    </>
  );
}
