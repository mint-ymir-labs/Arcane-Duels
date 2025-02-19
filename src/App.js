import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Client } from "boardgame.io/react";
import { ArcaneDuels } from "./game/game";
import MainMenu from "./components/MainMenu";
import ArcaneDuelsBoard from "./components/ArcaneDuelsBoard";

const ArcaneDuelsClient = Client({
  game: ArcaneDuels,
  board: ArcaneDuelsBoard,
  // Set to false for enabling debug panel
  debug: { collapseOnLoad: true, hideToggleButton: true },
});

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/game" element={<ArcaneDuelsClient />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
