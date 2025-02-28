import React from "react";
import ReactMarkdown from "react-markdown";

const AboutModal = ({ showAboutModal, setShowAboutModal, playAudio }) => {
  const handleClose = () => {
    setShowAboutModal(false);
    playAudio();
  };

  const aboutContent = `# Arcane Duels: Mystic Clash

A turn-based card game where players engage in magical duels using a variety of spells and effects.

## Game Overview

Arcane Duels is a strategic card game that combines deck building, resource management, and tactical decision-making. Players take turns playing cards with various effects to defeat their opponent.

## Core Mechanics

### Turn Structure

- Each turn consists of drawing a card (except for the first turn) and playing one card
- Players can hold up to 5 cards in their hand
- When the deck runs out, it is automatically reshuffled

### Card Types

- **Damage Cards**: Deal direct damage to opponents
- **Healing Cards**: Restore player's HP
- **Buff Cards**: Enhance player's attack or defense
- **Debuff Cards**: Weaken opponent's attack or defense
- **Effect Cards**: Apply special effects like freeze, shield, or resurrection

### Combat Stats

- **HP**: Health points - reach 0 and you lose
- **ATK**: Attack power - increases damage dealt
- **DEF**: Defense power - reduces damage taken

### Special Effects

- **Freeze**: Invalidates opponent's next card
- **Shield**: Prevents the next instance of damage
- **Double Damage**: Doubles the damage of your next attack
- **Resurrection**: Prevents death once and restores HP to 15
- **Aura**: Triggers additional effects at the end of your turn

### Visual Feedback

The game features various visual effects to enhance the gameplay experience:

- Damage animations
- Healing glows
- Buff/debuff indicators
- Freeze effects
- Shield animations
- Resurrection effects

## Development

Arcane Duels is built using React and boardgame.io, featuring:

- Responsive design
- Modern UI/UX
- Turn-based gameplay mechanics
- AI opponent
- Multiple game levels
- Battle log system
- Sound effects and background music

## Future Plans

### AI-Powered Expansion

We're planning to integrate advanced AI (ELIZA) to create more engaging and personalized gameplay experiences:

#### Dynamic Opponents

- AI-generated opponents with unique personalities and play styles
- Each AI duelist will have their own backstory and strategic preferences
- City-states with distinct cultures and card themes, shaped by AI

#### Custom Cards

- AI will design and generate unique cards with balanced mechanics
- Special cards will be available through:
  - Defeating specific AI opponents
  - Purchasing from AI-managed shops
  - Limited-time events

#### NFT Integration

- AI-generated cards can become special NFTs
- Each NFT will have its own unique artwork and lore
- Collectible cards that prove your victories against specific AI opponents

This expansion aims to create an ever-evolving game world where each player's journey is unique, and every AI opponent presents a fresh challenge with their own personality and custom cards.

## Version

Current version: v0.14`;

  return (
    <div
      className={`modal fade ${showAboutModal ? "show" : ""}`}
      style={{ display: showAboutModal ? "block" : "none" }}
      tabIndex="-1"
      aria-hidden={!showAboutModal}
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
        <div className="modal-content bg-modal">
          <div className="modal-header">
            <h5 className="modal-title font-cinzel-semibold">About</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <ReactMarkdown>{aboutContent}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
