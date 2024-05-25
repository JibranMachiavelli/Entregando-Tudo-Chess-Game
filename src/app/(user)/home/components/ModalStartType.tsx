import { useState, useContext } from 'react';
import { ChessContext } from '../../../context/globalContext';

export default function ModalStartType({ onClick }: { onClick: () => void }) {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const { setType } = useContext(ChessContext); // Obter o método setType do contexto

  const handleTypeClick = (type: string) => {
    setSelectedType(type);
    console.log(type);
  };

  const handleSelectClick = () => {
    if (selectedType) {
      setType(selectedType); // Atualizar o tipo no contexto
      onClick();
    }
  };

  return (
    <>
      <p className="text-gray-500 dark:text-gray-400 select-none">
        Selecione o modo de jogo:
      </p>

      <button
        className={`inline-flex items-center justify-between w-full p-5 border rounded-lg cursor-pointer transition-all ${
          selectedType === 'Ranked'
            ? 'border-b-4 border-blue-700 bg-blue-500 text-white'
            : 'text-gray-900 bg-white border-gray-200 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-gray-300 dark:border-gray-500 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500'
        }`}
        onClick={() => handleTypeClick('Ranked')}
      >
        <div className="block">
          <div className="text-left w-full text-lg font-semibold select-none">
            Ranked
          </div>
          <div className={`w-full select-none ${
            selectedType === 'Ranked' ? 'text-white' : 'text-gray-500 dark:text-gray-400'
          }`}>
            Partidas que valem pontos.
          </div>
        </div>
      </button>

      <button
        className={`inline-flex items-center justify-between w-full p-5 border rounded-lg cursor-pointer transition-all ${
          selectedType === 'Normal'
            ? 'border-b-4 border-blue-700 bg-blue-500 text-white'
            : 'text-gray-900 bg-white border-gray-200 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-gray-300 dark:border-gray-500 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500'
        }`}
        onClick={() => handleTypeClick('Normal')}
      >
        <div className="block">
          <div className="text-left w-full text-lg font-semibold select-none">
            Normal
          </div>
          <div className={`w-full select-none ${
            selectedType === 'Normal' ? 'text-white' : 'text-gray-500 dark:text-gray-400'
          }`}>
            Partidas que não valem pontos.
          </div>
        </div>
      </button>

      <button
        className={`w-full mt-28 h-20 text-2xl border-b-4 font-extrabold text-white rounded-lg transition-all focus:scale-98 shadow-md ${
          selectedType
            ? 'border-green-700 bg-green-600 hover:scale-98 hover:shadow-green-900'
            : 'border-red-700 bg-red-600 hover:scale-98 hover:shadow-red-900 cursor-not-allowed'
        }`}
        onClick={handleSelectClick}
        disabled={!selectedType}
      >
        Selecionar
      </button>
    </>
  );
}
