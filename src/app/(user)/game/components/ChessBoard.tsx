'use client';

import React from 'react';

const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8];
const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

export default function ChessBoard() {
  return (
    <div className="flex items-center justify-center w-screen h-screen sm:h-full sm:w-full lg:w-3/5 bg-blue-500">
      <div className="w-4/5 h-2/5 sm:h-3/5 sm:w-4/5 lg:h-3/5 lg:w-4/5 xl:h-3/5 xl:w-[70%] 2xl:h-4/5 2xl:w-[70%] rounded-md bg-green-500">
        a
      </div>
    </div>
  );
}
