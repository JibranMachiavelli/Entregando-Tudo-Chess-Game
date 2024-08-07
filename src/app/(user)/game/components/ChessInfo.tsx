'use client';

export default function ChessInfo() {
  return (
    <div className="hidden lg:flex items-center justify-center w-full lg:w-1/5 p-4">
      <div className="bg-white p-4 rounded-md shadow-lg w-full">
        <h3 className="text-lg font-bold mb-2">ChessGame</h3>
        <p className="mb-4">Timer 05:00</p>
        <ul className="list-disc list-inside">
          <li>Tipo</li>
          <li>Player 1</li>
          <li>Points 480</li>
        </ul>
      </div>
    </div>
  );
}
