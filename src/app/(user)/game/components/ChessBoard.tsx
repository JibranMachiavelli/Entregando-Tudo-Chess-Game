'use client';

import React from 'react';

const verticalAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

export default function ChessBoard() {
  let board = [];

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const isBlack = (i + j) % 2 === 1;
      const classes = [
        'w-full h-full flex items-center justify-center',
        isBlack ? 'bg-green-600' : 'bg-white',
      ];

      if (j === 0 && i === 0) classes.push('rounded-bl-xl');
      if (j === 0 && i === 7) classes.push('rounded-br-xl');
      if (j === 7 && i === 0) classes.push('rounded-tl-xl');
      if (j === 7 && i === 7) classes.push('rounded-tr-xl');

      board.push(
        <div
          key={`${horizontalAxis[i]}${verticalAxis[j]}`}
          className={classes.join(' ')}
        >
          {horizontalAxis[i]}{verticalAxis[j]}
        </div>
      );
    }
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-500">
      <div className="grid grid-cols-8 grid-rows-8 gap-0 w-[350px] h-[350px] sm:h-[450px] sm:w-[450px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[600px]">
        {board}
      </div>
    </div>
  );
}
