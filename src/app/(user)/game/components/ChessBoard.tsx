'use client';

import React from 'react';

const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

export default function ChessBoard() {
  return (
    <div className="flex items-center justify-center w-screen h-screen sm:h-full sm:w-full lg:w-3/5 bg-blue-500">
      <div className="w-[350px] h-[350px] sm:h-[450px] sm:w-[450px] lg:h-[450px] lg:w-[450px] xl:h-[500px] xl:w-[500px] 2xl:h-[600px] 2xl:w-[600px] rounded-md bg-green-500">
        a
      </div>
    </div>
  );
}
