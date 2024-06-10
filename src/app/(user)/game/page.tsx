'use client';

import ChessChat from './components/ChessChat';
import ChessBoard from './components/ChessBoard/ChessBoard';
import ChessInfo from './components/ChessInfo';

export default function Game() {
  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-r from-[#014040] via-[#02735E] to-[#03A678] ">
        <ChessChat />
        <ChessBoard />
        <ChessInfo />
    </div>
  );
}
