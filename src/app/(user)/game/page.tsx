'use client';

import ChessChat from './components/ChessChat';
import ChessBoard from './components/ChessBoard';
import ChessInfo from './components/ChessInfo';

export default function Game() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
        <ChessChat />
        <ChessBoard />
        <ChessInfo />
    </div>
  );
}
