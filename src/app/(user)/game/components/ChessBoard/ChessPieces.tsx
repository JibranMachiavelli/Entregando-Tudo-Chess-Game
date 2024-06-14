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
import { StaticImageData } from 'next/image';

export type Piece = {
  [x: string]: any;
  type: string;
  image: StaticImageData;
};

export type PiecePositionsType = Record<string, Piece>;

const piecePositions: PiecePositionsType = {
  'a1': { type: 'rook_w', image: rook_w }, 'b1': { type: 'knight_w', image: knight_w },
  'c1': { type: 'bishop_w', image: bishop_w }, 'd1': { type: 'queen_w', image: queen_w },
  'e1': { type: 'king_w', image: king_w }, 'f1': { type: 'bishop_w', image: bishop_w },
  'g1': { type: 'knight_w', image: knight_w }, 'h1': { type: 'rook_w', image: rook_w },
  'a2': { type: 'pawn_w', image: pawn_w }, 'b2': { type: 'pawn_w', image: pawn_w },
  'c2': { type: 'pawn_w', image: pawn_w }, 'd2': { type: 'pawn_w', image: pawn_w },
  'e2': { type: 'pawn_w', image: pawn_w }, 'f2': { type: 'pawn_w', image: pawn_w },
  'g2': { type: 'pawn_w', image: pawn_w }, 'h2': { type: 'pawn_w', image: pawn_w },
  'a7': { type: 'pawn_b', image: pawn_b }, 'b7': { type: 'pawn_b', image: pawn_b },
  'c7': { type: 'pawn_b', image: pawn_b }, 'd7': { type: 'pawn_b', image: pawn_b },
  'e7': { type: 'pawn_b', image: pawn_b }, 'f7': { type: 'pawn_b', image: pawn_b },
  'g7': { type: 'pawn_b', image: pawn_b }, 'h7': { type: 'pawn_b', image: pawn_b },
  'a8': { type: 'rook_b', image: rook_b }, 'b8': { type: 'knight_b', image: knight_b },
  'c8': { type: 'bishop_b', image: bishop_b }, 'd8': { type: 'queen_b', image: queen_b },
  'e8': { type: 'king_b', image: king_b }, 'f8': { type: 'bishop_b', image: bishop_b },
  'g8': { type: 'knight_b', image: knight_b }, 'h8': { type: 'rook_b', image: rook_b },
};

export default piecePositions;
