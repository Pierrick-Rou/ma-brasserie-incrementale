import imgVendeurBiere from "../assets/vendeurBiere.png";
import imgFaucille from "../assets/faucille.jpg";
import imgTracteur from "../assets/tracteur.jpg";
import { useNavigate } from "react-router-dom";

export default function ShopPage() {
  const navigate = useNavigate();

  return (
    <div className="shop-page">
      <div className="shop-header">
        <div className="shop-left">
          <img src={imgVendeurBiere} alt="Vendeur de bière" />
        </div>
        <div className="shop-right">
          <h2>Bienvenue à la Boutique !</h2>
          <p>
            Ici, vous pouvez acheter des améliorations pour votre brasserie et
            bien d'autres choses héhéhé
          </p>
        </div>
        <button className="btn-retour" onClick={() => navigate("/")}>
          ← Retour à la brasserie
        </button>
      </div>

      <div className="shop-body">
        <p className="shop-section-title">Améliorations disponibles</p>
        <div className="shop-items">
          <div className="item">
            <p className="item-price">15 €</p>
            <img className="shop-image" src={imgFaucille} alt="Faucille" />
            <h3>Faucille</h3>
            <p>Augmente la production de malte de 1 kg par clic</p>
            <button className="btn-acheter">Acheter</button>
          </div>
          <div className="item">
            <p className="item-price">150 €</p>
            <img className="shop-image" src={imgTracteur} alt="Tracteur" />
            <h3>Tracteur</h3>
            <p>Augmente la production de malte de 8 kg par clic</p>
            <button className="btn-acheter">Acheter</button>
          </div>
        </div>
      </div>
    </div>
  );
}
