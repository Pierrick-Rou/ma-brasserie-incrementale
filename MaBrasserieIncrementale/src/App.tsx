import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game";
import ShopButton from "./components/Shop"; // ton composant actuel
import ShopPage from "./pages/ShopPage.tsx";
import { GameProvider } from "./context/GameContext";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <GameProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          {/* Page principale */}
          <Route
            path="/"
            element={
              <div className="app-container">
                <div>
                  <Game />
                </div>

                <div className="right">
                  <ShopButton />
                </div>
              </div>
            }
          />

          {/* Page boutique */}
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </BrowserRouter>
    </GameProvider>
  );
}

export default App;
