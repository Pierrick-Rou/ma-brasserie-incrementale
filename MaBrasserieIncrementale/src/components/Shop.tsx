import { useGameContext } from "../context/GameContext";
import boutiqueImage from "../assets/boutique.jpg";
import { useNavigate } from "react-router-dom";

export default function Shop() {
  const { shopUnlocked } = useGameContext();
  const navigate = useNavigate();

  if (!shopUnlocked) return null; // Ne s'affiche pas tant que shopUnlocked = false

  return (
    <div className="shop">
      <img src={boutiqueImage} alt="Boutique" className="shop-image" />
      <button onClick={() => navigate("/shop")}>Boutique</button>
    </div>
  );
}
