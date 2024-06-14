import { PiecePositionsType } from '../ChessBoard/ChessPieces';

export const isValidPawnMove = (
  pieceType: string,
  startFile: string,
  startRank: string,
  endFile: string,
  endRank: string,
  piecePos: PiecePositionsType
): boolean => {
  const isPathBlocked = (file: string, rank: string) => {
    return piecePos[`${file}${rank}`] !== undefined;
  };

  const isOpponentPiece = (file: string, rank: string) => {
    const piece = piecePos[`${file}${rank}`];
    if (!piece) return false;
    if (pieceType.includes('w') && piece.type.includes('b')) return true;
    if (pieceType.includes('b') && piece.type.includes('w')) return true;
    return false;
  };

  const startRankNumber = Number(startRank);
  const endRankNumber = Number(endRank);

  if (pieceType === 'pawn_b') {
    if (startFile === endFile) {
      if (startRankNumber - 1 === endRankNumber && !isPathBlocked(endFile, endRank)) {
        return true;
      } else if (startRankNumber - 2 === endRankNumber && startRankNumber === 7 && !isPathBlocked(endFile, endRank) && !isPathBlocked(startFile, String(startRankNumber - 1))) {
        return true;
      }
    } else if (Math.abs(startFile.charCodeAt(0) - endFile.charCodeAt(0)) === 1 && startRankNumber - 1 === endRankNumber && isOpponentPiece(endFile, endRank)) {
      return true;
    }
  }

  if (pieceType === 'pawn_w') {
    if (startFile === endFile) {
      if (startRankNumber + 1 === endRankNumber && !isPathBlocked(endFile, endRank)) {
        return true;
      } else if (startRankNumber + 2 === endRankNumber && startRankNumber === 2 && !isPathBlocked(endFile, endRank) && !isPathBlocked(startFile, String(startRankNumber + 1))) {
        return true;
      }
    } else if (Math.abs(startFile.charCodeAt(0) - endFile.charCodeAt(0)) === 1 && startRankNumber + 1 === endRankNumber && isOpponentPiece(endFile, endRank)) {
      return true;
    }
  }

  return false;
};
