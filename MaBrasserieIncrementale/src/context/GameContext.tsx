import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type GameContextType = {
  score: number; // score actuel
  multiplier: number; // multiplicateur de clic
  increment: () => void; // fonction pour récolter du malte
  shopUnlocked: boolean; // si la boutique est débloquée
  jobName: string; // nom du travail
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: ReactNode }) {
  const [score, setScore] = useState(() => {
    const saved = localStorage.getItem("score");
    return saved ? Number(saved) : 0;
  });
  // @ts-ignore
  const [multiplier, setMultiplier] = useState(1);
  const [shopUnlocked, setShopUnlocked] = useState(false);
  // @ts-ignore
  const [jobName, setJobName] = useState("Employé agricole");
  const increment = () => setScore((prev) => prev + multiplier);

  useEffect(() => {
    localStorage.setItem("score", String(score));
  }, [score]);

  useEffect(() => {
    if (score >= 10 && !shopUnlocked) setShopUnlocked(true);
  }, [score, shopUnlocked]);

  return (
    <GameContext.Provider
      value={{ score, multiplier, increment, shopUnlocked, jobName }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext() {
  const context = useContext(GameContext);
  if (!context)
    throw new Error("useGameContext must be used within a GameProvider");
  return context;
}
