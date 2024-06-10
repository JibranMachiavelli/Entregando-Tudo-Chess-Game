import { PiecePositionsType } from './ChessPieces';

export function getPawnValidMoves(
  position: string,
  pieces: PiecePositionsType
): string[] {
  const validMoves: string[] = [];
  const [file, rank] = position.split('');
  const nextRank = parseInt(rank) + 1;
  const nextPosition = `${file}${nextRank}`;

  if (!pieces[nextPosition]) {
    validMoves.push(nextPosition);
  }

  return validMoves;
}

export function getRookValidMoves(
  position: string,
  pieces: PiecePositionsType
): string[] {
  const validMoves: string[] = [];
  const [file, rank] = position.split('');

  // Vertical moves
  for (let i = 1; i <= 8; i++) {
    const nextPosition = `${file}${i}`;
    if (nextPosition !== position) {
      validMoves.push(nextPosition);
    }
  }

  // Horizontal moves
  for (let i = 'a'.charCodeAt(0); i <= 'h'.charCodeAt(0); i++) {
    const nextPosition = `${String.fromCharCode(i)}${rank}`;
    if (nextPosition !== position) {
      validMoves.push(nextPosition);
    }
  }

  return validMoves;
}

export function getKnightValidMoves(
  position: string,
  pieces: PiecePositionsType
): string[] {
  const validMoves: string[] = [];
  const [file, rank] = position.split('');
  const moves = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];

  for (const [dx, dy] of moves) {
    const nextFile = String.fromCharCode(file.charCodeAt(0) + dx);
    const nextRank = parseInt(rank) + dy;
    const nextPosition = `${nextFile}${nextRank}`;
    if (nextFile >= 'a' && nextFile <= 'h' && nextRank >= 1 && nextRank <= 8) {
      validMoves.push(nextPosition);
    }
  }

  return validMoves;
}

export function getBishopValidMoves(
  position: string,
  pieces: PiecePositionsType
): string[] {
  const validMoves: string[] = [];
  const [file, rank] = position.split('');
  const directions = [
    [1, 1],
    [1, -1],
    [-1, 1],
    [-1, -1],
  ];

  for (const [dx, dy] of directions) {
    let [x, y] = [file.charCodeAt(0) + dx, parseInt(rank) + dy];
    while (x >= 97 && x <= 104 && y >= 1 && y <= 8) {
      const nextPosition = `${String.fromCharCode(x)}${y}`;
      validMoves.push(nextPosition);
      if (pieces[nextPosition]) {
        break;
      }
      x += dx;
      y += dy;
    }
  }

  return validMoves;
}

export function getQueenValidMoves(
  position: string,
  pieces: PiecePositionsType
): string[] {
  const validMoves: string[] = [];
  const rookMoves = getRookValidMoves(position, pieces);
  const bishopMoves = getBishopValidMoves(position, pieces);
  return [...rookMoves, ...bishopMoves];
}

export function getKingValidMoves(
  position: string,
  pieces: PiecePositionsType
): string[] {
  const validMoves: string[] = [];
  const [file, rank] = position.split('');
  const moves = [
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
    [-1, -1],
    [0, -1],
    [1, -1],
  ];

  for (const [dx, dy] of moves) {
    const nextFile = String.fromCharCode(file.charCodeAt(0) + dx);
    const nextRank = parseInt(rank) + dy;
    const nextPosition = `${nextFile}${nextRank}`;
    if (nextFile >= 'a' && nextFile <= 'h' && nextRank >= 1 && nextRank <= 8) {
      validMoves.push(nextPosition);
    }
  }

  return validMoves;
}
