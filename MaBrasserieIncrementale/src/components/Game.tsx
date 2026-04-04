import { useGameContext } from "../context/GameContext";

export default function Game() {
  const { score, multiplier, increment, jobName } = useGameContext();

  return (
    <div id="center">
      <p>{jobName}</p>
      <div className="counter">Malte: {score}</div>
      <button onClick={increment}>Récolter +{multiplier}</button>
    </div>
  );
}
