import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  getPawnValidMoves,
  getRookValidMoves,
  getKnightValidMoves,
  getBishopValidMoves,
  getQueenValidMoves,
  getKingValidMoves,
} from './ChessMoves';
import piecePositions from './ChessPieces';

const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

export default function ChessBoard() {
  const [selectedPiece, setSelectedPiece] = useState<string | null>(null);
  const [dragging, setDragging] = useState<boolean>(false);
  const [draggedPiecePosition, setDraggedPiecePosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const handlePieceMouseDown = (
    position: string,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    setSelectedPiece(position);
    setDragging(true);
    setDraggedPiecePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (dragging && selectedPiece) {
      const boardRect = document
        .querySelector('.grid')
        ?.getBoundingClientRect();
      if (boardRect) {
        const minX = boardRect.left;
        const minY = boardRect.top;
        const maxX = boardRect.right;
        const maxY = boardRect.bottom;

        let newX = event.clientX;
        let newY = event.clientY;

        // Limita o movimento dentro das bordas do tabuleiro
        newX = Math.min(Math.max(newX, minX), maxX);
        newY = Math.min(Math.max(newY, minY), maxY);

        setDraggedPiecePosition({ x: newX, y: newY });
      }
    }
  };

  const handleMouseUp = () => {
    if (dragging) {
      setDragging(false);
      setSelectedPiece(null); // Limpa a peça selecionada após soltar o mouse
    }
  };

  useEffect(() => {
    if (dragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging]);

  let board = [];

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const position = `${horizontalAxis[i]}${verticalAxis[j]}`;
      const isGreen = (i + j) % 2 === 1;
      const classes = [
        'w-full h-full flex items-center justify-center',
        isGreen ? 'bg-green-600' : 'bg-white',
        j === 0 && i === 0 && 'rounded-bl-xl',
        j === 0 && i === 7 && 'rounded-br-xl',
        j === 7 && i === 0 && 'rounded-tl-xl',
        j === 7 && i === 7 && 'rounded-tr-xl',
      ].filter(Boolean);

      const piece = piecePositions[position];
      const pieceImage = piece ? (
        <Image
          key={position}
          src={piece}
          alt={`${piece}`}
          width={50}
          height={50}
          onMouseDown={(e) => handlePieceMouseDown(position, e)}
          style={{
            position: selectedPiece === position ? 'fixed' : 'relative',
            top:
              selectedPiece === position
                ? draggedPiecePosition.y - 25
                : undefined,
            left:
              selectedPiece === position
                ? draggedPiecePosition.x - 25
                : undefined,
            zIndex: selectedPiece === position ? 100 : undefined,
            cursor: 'pointer',
          }}
        />
      ) : null;

      board.push(
        <div
          key={position}
          className={classes.join(' ')}
        >
          {pieceImage}
        </div>
      );
    }
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="grid grid-cols-8 grid-rows-8 gap-0 w-[350px] h-[350px] sm:h-[450px] sm:w-[450px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[600px]">
        {board}
      </div>
    </div>
  );
}
