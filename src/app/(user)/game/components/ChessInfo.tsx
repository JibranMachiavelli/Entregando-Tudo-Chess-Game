import React from 'react';

interface ChessInfoProps {
  selectedType: string | null;
  selectedTimer: string | null;
  selectedPlayer: string | null;
}

const ChessInfo: React.FC<ChessInfoProps> = ({
  selectedType,
  selectedTimer,
  selectedPlayer,
}) => {
  return (
    <div className="hidden lg:flex items-center justify-center w-full lg:w-1/5 p-4">
      <div className="bg-white p-4 rounded-md shadow-lg w-full">
        <h3 className="text-lg font-bold mb-2">ChessGame</h3>
        <p className="mb-4">Timer: {selectedTimer}</p>
        <ul className="list-disc list-inside">
          <li>Tipo: {selectedType}</li>
          <li>Player: {selectedPlayer}</li>
          {/* Aqui você pode adicionar mais informações se necessário */}
        </ul>
      </div>
    </div>
  );
};

export default ChessInfo;
