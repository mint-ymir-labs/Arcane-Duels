import { useState } from "react";
import useAudioPlayer from "./hooks/useAudioPlayer";
import usePreloadAssets from "./hooks/usePreloadAssets";
import { cardFronts, click, IMAGES, AUDIO, MUSIC } from "./utils/assetPaths";
import CardGalleryModal from "./modals/CardGalleryModal";
import HelpModal from "./modals/HelpModal";
import AboutModal from "./modals/AboutModal";

const MainMenu = () => {
  // Preload to use cache and reduce latency
  usePreloadAssets(IMAGES, AUDIO, MUSIC);

  const [showHelpModal, setShowHelpModal] = useState(false);
  const [showCardGallery, setShowCardGallery] = useState(false);
  const [showAboutModal, setShowAboutModal] = useState(false);

  const { playAudio } = useAudioPlayer();

  const loadGame = () => {
    // Use full page rerender to keep the game state clean
    window.location.href = "/game";
  };

  const handleHelpClick = () => {
    setShowHelpModal(true);
    playAudio(click);
  };

  const handleCardsClick = () => {
    setShowCardGallery(true);
    playAudio(click);
  };

  const handleAboutClick = () => {
    setShowAboutModal(true);
    playAudio(click);
  };

  return (
    <div className="d-flex flex-column bg-menu vh-100 justify-content-center align-items-center">
      <div className="d-flex align-items-baseline mb-5">
        <p className="font-cinzel-semibold menu-title-fs m-0">
          Arcane Duels: Mystic Clash
        </p>
        <span className="badge bg-secondary ms-2">v0.14</span>
      </div>

      {/* Without the beta tag
      <p className='font-cinzel-semibold menu-title-fs mb-5'>Arcane Duels: Mystic Clash</p> */}

      <div className="d-flex flex-column mt-5">
        <button
          className="btn btn-dark btn-lg btn-width mb-3"
          onClick={loadGame}
        >
          Play
        </button>
        <button
          className="btn btn-dark btn-lg btn-width mb-3"
          onClick={handleHelpClick}
        >
          Instructions
        </button>
        <button
          className="btn btn-dark btn-lg btn-width mb-3"
          onClick={handleCardsClick}
        >
          Cards
        </button>
        <button
          className="btn btn-dark btn-lg btn-width"
          onClick={handleAboutClick}
        >
          About
        </button>
      </div>

      {/* Components rendered on demand */}
      <HelpModal
        showHelpModal={showHelpModal}
        setShowHelpModal={setShowHelpModal}
        playAudio={playAudio}
      />
      <CardGalleryModal
        showCardGallery={showCardGallery}
        setShowCardGallery={setShowCardGallery}
        cardImages={cardFronts}
        playAudio={playAudio}
      />
      <AboutModal
        showAboutModal={showAboutModal}
        setShowAboutModal={setShowAboutModal}
        playAudio={playAudio}
      />
    </div>
  );
};

export default MainMenu;
