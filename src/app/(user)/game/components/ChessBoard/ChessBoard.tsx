import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import piecePositions, { Piece, PiecePositionsType } from './ChessPieces';
import { isValidPawnMove } from '../Rules/Pawn';
import { isValidRookMove } from '../Rules/Rook';

const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

type PositionType = {
  x: number;
  y: number;
};

const shufflePositions = (
  positions: PiecePositionsType
): PiecePositionsType => {
  const shuffledPositions: PiecePositionsType = {};
  const keys = Object.keys(positions);
  keys.sort(() => Math.random() - 0.5); // Embaralha as chaves
  keys.forEach((key) => {
    shuffledPositions[key] = positions[key];
  });
  return shuffledPositions;
};

export default function ChessBoard() {
  const [selectedPiece, setSelectedPiece] = useState<string | null>(null);
  const [dragging, setDragging] = useState<boolean>(false);
  const [draggedPiecePosition, setDraggedPiecePosition] =
    useState<PositionType>({ x: 0, y: 0 });
  const [piecePos, setPiecePos] = useState<PiecePositionsType>(
    shufflePositions(piecePositions)
  ); // Embaralha as posições iniciais
  const [initialPosition, setInitialPosition] = useState<string | null>(null);
  const [isWhiteTurn, setIsWhiteTurn] = useState<boolean>(true); // Controla de quem é a vez

  const handlePieceMouseDown = (
    position: string,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    setSelectedPiece(position);
    setInitialPosition(position);
    setDragging(true);
    setDraggedPiecePosition({ x: event.clientX, y: event.clientY });
  };

  const isValidMove = (start: string, end: string): boolean => {
    const piece = piecePos[start];
    if (!piece) return false;

    const startFile = start.charAt(0);
    const startRank = start.charAt(1);
    const endFile = end.charAt(0);
    const endRank = end.charAt(1);

    if (piece.type.includes('pawn')) {
      return isValidPawnMove(
        piece.type,
        startFile,
        startRank,
        endFile,
        endRank,
        piecePos
      );
    }

    if (piece.type.includes('rook')) {
      return isValidRookMove(startFile, startRank, endFile, endRank, piecePos);
    }
    // Implemente regras para outras peças conforme necessário

    return false;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleMouseUp = () => {
    if (dragging && selectedPiece && initialPosition) {
      const boardRect = document
        .querySelector('.grid')
        ?.getBoundingClientRect();
      if (boardRect) {
        const fileIndex = Math.floor(
          (draggedPiecePosition.x - boardRect.left) / (boardRect.width / 8)
        );
        const rankIndex =
          7 -
          Math.floor(
            (draggedPiecePosition.y - boardRect.top) / (boardRect.height / 8)
          );
        const endPosition = `${horizontalAxis[fileIndex]}${verticalAxis[rankIndex]}`;

        if (isValidMove(initialPosition, endPosition)) {
          setPiecePos((prevPositions) => {
            const newPositions = { ...prevPositions };
            newPositions[endPosition] = newPositions[initialPosition];
            delete newPositions[initialPosition];
            return newPositions;
          });

          setIsWhiteTurn(!isWhiteTurn); // Alterna a vez após um movimento válido
        }
      }

      setDragging(false);
      setSelectedPiece(null);
      setInitialPosition(null);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleMouseMove(event: MouseEvent) {
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
  }

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
  }, [dragging, handleMouseMove, handleMouseUp]);

  const renderBoard = () => {
    const board = [];
    for (let j = verticalAxis.length - 1; j >= 0; j--) {
      for (let i = 0; i < horizontalAxis.length; i++) {
        const position = `${horizontalAxis[i]}${verticalAxis[j]}`;
        const isGreen = (i + j) % 2 === 1;
        const piece = piecePos[position];

        const pieceImage = piece ? (
          <Image
            key={position}
            src={piece.image}
            alt={`${piece.type}`}
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

        const classes = [
          'w-full h-full flex items-center justify-center',
          isGreen ? 'bg-green-600' : 'bg-white',
          j === 0 && i === 0 && 'rounded-bl-xl',
          j === 0 && i === 7 && 'rounded-br-xl',
          j === 7 && i === 0 && 'rounded-tl-xl',
          j === 7 && i === 7 && 'rounded-tr-xl',
        ]
          .filter(Boolean)
          .join(' ');

        board.push(
          <div
            key={position}
            className={classes}
          >
            {pieceImage}
          </div>
        );
      }
    }
    return board;
  };

  return (
    <div className="flex items-center justify-center w-[75vw] h-screen">
      <div className="grid grid-cols-8 grid-rows-8 gap-0 w-[350px] h-[350px] sm:h-[450px] sm:w-[450px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[600px]">
        {renderBoard()}
      </div>
    </div>
  );
}
