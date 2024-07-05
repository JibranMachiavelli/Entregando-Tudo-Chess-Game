import { ReactNode, createContext, useMemo, useState, Dispatch, SetStateAction } from 'react';

interface ChessContextType {
  type: string;
  setType: Dispatch<SetStateAction<string>>;
  time: string;
  setTime: Dispatch<SetStateAction<string>>;
  player: string;
  setPlayer: Dispatch<SetStateAction<string>>;
}

const defaultChessContext: ChessContextType = {
  type: "",
  setType: () => {},
  time: "",
  setTime: () => {},
  player: "",
  setPlayer: () => {},
};

export const ChessContext = createContext<ChessContextType>(defaultChessContext);

export default function GlobalContext({ children }: { children: ReactNode }) {
  const [type, setType] = useState("");
  const [time, setTime] = useState("");
  const [player, setPlayer] = useState("");

  const values = useMemo(() => ({
    type,
    setType,
    time,
    setTime,
    player,
    setPlayer,
  }), [type, time, player]);
  return (
    <ChessContext.Provider value={values}>
      {children}
    </ChessContext.Provider>
  );
}
