'use client';

import ChessChat from './components/ChessChat';
import ChessBoard from './components/ChessBoard/ChessBoard';
import ChessInfo from './components/ChessInfo';
import { useEffect } from 'react';

interface GameProps {
  selectedType: string | null;
  selectedTimer: string | null;
  selectedPlayer: string | null;
}

export default function Game({
  selectedType,
  selectedTimer,
  selectedPlayer,
}: GameProps) {
  useEffect(() => {
    if (selectedType && selectedTimer && selectedPlayer) {
      console.log('Iniciando partida com as informações:', {
        type: selectedType,
        timer: selectedTimer,
        player: selectedPlayer,
      });
    }
  }, [selectedType, selectedTimer, selectedPlayer]);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-r from-[#014040] via-[#02735E] to-[#03A678] ">
      <ChessChat />
      <ChessBoard />
      <ChessInfo
        selectedType={selectedType}
        selectedTimer={selectedTimer}
        selectedPlayer={selectedPlayer}
      />
    </div>
  );
}
