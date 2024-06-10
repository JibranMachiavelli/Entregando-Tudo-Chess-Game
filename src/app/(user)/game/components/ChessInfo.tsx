'use client';

import React from 'react';

export default function ChessInfo() {
  return (
    <div className="hidden lg:flex items-center justify-center w-full lg:w-1/5 p-4">
      <div className="bg-white p-4 rounded-md shadow-lg w-full">
        <h3 className="text-lg font-bold mb-2">Informação</h3>
        <p className="mb-4">Alguma coisa</p>
        <ul className="list-disc list-inside">
          <li>2</li>
          <li>2</li>
          <li>2</li>
        </ul>
      </div>
    </div>
  );
}
