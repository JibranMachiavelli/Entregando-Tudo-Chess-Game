'use client'

import rook_w from '../../../../public/assets/pieces/rook_w (1).png';
import rook_b from '../../../../public/assets/pieces/rook_b (1).png';
import knight_w from '../../../../public/assets/pieces/knight_w (1).png';
import knight_b from '../../../../public/assets/pieces/knight_b (1).png';
import bishop_w from '../../../../public/assets/pieces/bishop_w (1).png';
import bishop_b from '../../../../public/assets/pieces/bishop_b (1).png';
import queen_w from '../../../../public/assets/pieces/queen_w (1).png';
import queen_b from '../../../../public/assets/pieces/queen_b (1).png';
import king_w from '../../../../public/assets/pieces/king_w (1).png';
import king_b from '../../../../public/assets/pieces/king_b (1).png';
import pawn_w from '../../../../public/assets/pieces/pawn_w (1).png';
import pawn_b from '../../../../public/assets/pieces/pawn_b (1).png';

export type PieceType = typeof rook_w | typeof knight_w | typeof bishop_w | typeof queen_w | typeof king_w | typeof pawn_w;
export type PiecePositionsType = Record<string, PieceType>;

const piecePositions: PiecePositionsType = {
  'a1': rook_w, 'b1': knight_w, 'c1': bishop_w, 'd1': queen_w, 'e1': king_w, 'f1': bishop_w, 'g1': knight_w, 'h1': rook_w,
  'a2': pawn_w, 'b2': pawn_w, 'c2': pawn_w, 'd2': pawn_w, 'e2': pawn_w, 'f2': pawn_w, 'g2': pawn_w, 'h2': pawn_w,
  'a7': pawn_b, 'b7': pawn_b, 'c7': pawn_b, 'd7': pawn_b, 'e7': pawn_b, 'f7': pawn_b, 'g7': pawn_b, 'h7': pawn_b,
  'a8': rook_b, 'b8': knight_b, 'c8': bishop_b, 'd8': queen_b, 'e8': king_b, 'f8': bishop_b, 'g8': knight_b, 'h8': rook_b,
};

export default piecePositions;

