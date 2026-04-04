import { useGameContext } from "../context/GameContext";
import boutiqueImage from "../assets/boutique.jpg";

export default function Shop() {
  const { shopUnlocked } = useGameContext();

  if (!shopUnlocked) return null; // Ne s'affiche pas tant que shopUnlocked = false

  return (
    <div className="shop">
      <img src={boutiqueImage} alt="Boutique" className="shop-image" />
      <button>Boutique</button>
    </div>
  );
}
