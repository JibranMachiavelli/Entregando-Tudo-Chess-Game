import { PiecePositionsType, Piece } from '../ChessBoard/ChessPieces';

export const isValidRookMove = (
  startFile: string,
  startRank: string,
  endFile: string,
  endRank: string,
  piecePos: PiecePositionsType
): boolean => {
  const isPathBlocked = (file: string, rank: string) => {
    return piecePos[`${file}${rank}`] !== undefined;
  };

  const isOpponentPiece = (file: string, rank: string, color: string) => {
    const piece = piecePos[`${file}${rank}`];
    return piece !== undefined && piece.color !== color;
  };

  const startPiece = piecePos[`${startFile}${startRank}`] as Piece;
  const endPiece = piecePos[`${endFile}${endRank}`] as Piece | undefined;

  // Movimento na mesma coluna (vertical)
  if (startFile === endFile) {
    let rank = Number(startRank);

    // Verifica se não há peças bloqueando o caminho verticalmente
    if (startRank < endRank) {
      while (rank < Number(endRank)) {
        rank++;
        if (rank !== Number(endRank) && isPathBlocked(startFile, String(rank))) return false; // Peça bloqueando o caminho
      }
    } else {
      while (rank > Number(endRank)) {
        rank--;
        if (rank !== Number(endRank) && isPathBlocked(startFile, String(rank))) return false; // Peça bloqueando o caminho
      }
    }

    // Verifica se há peça adversária na posição final (captura)
    if (endPiece) {
      if (endPiece.color !== startPiece.color) {
        return true; // Movimento válido para captura
      } else {
        return false; // Movimento inválido, peça no destino é da mesma cor
      }
    }

    return true; // Movimento válido se não houver peça no destino
  }

  // Movimento na mesma linha (horizontal)
  if (startRank === endRank) {
    let fileCharCode = startFile.charCodeAt(0);

    // Verifica se não há peças bloqueando o caminho horizontalmente
    if (startFile < endFile) {
      while (fileCharCode < endFile.charCodeAt(0)) {
        fileCharCode++;
        const file = String.fromCharCode(fileCharCode);
        if (file !== endFile && isPathBlocked(file, startRank)) return false; // Peça bloqueando o caminho
      }
    } else {
      while (fileCharCode > endFile.charCodeAt(0)) {
        fileCharCode--;
        const file = String.fromCharCode(fileCharCode);
        if (file !== endFile && isPathBlocked(file, startRank)) return false; // Peça bloqueando o caminho
      }
    }

    // Verifica se há peça adversária na posição final (captura)
    if (endPiece) {
      if (endPiece.color !== startPiece.color) {
        return true; // Movimento válido para captura
      } else {
        return false; // Movimento inválido, peça no destino é da mesma cor
      }
    }

    return true; // Movimento válido se não houver peça no destino
  }

  return false; // Movimento inválido se não for nem na mesma coluna nem na mesma linha
};
