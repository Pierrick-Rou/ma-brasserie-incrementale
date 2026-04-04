import Game from "./components/Game";
import Shop from "./components/Shop";
import { GameProvider } from "./context/GameContext";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <GameProvider>
      <Header />
      <div className="app-container">
        <div>
          <Game />
        </div>

        <div className="right">
          <Shop />
        </div>
      </div>
    </GameProvider>
  );
}

export default App;
