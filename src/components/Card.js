import { CardType, smallScale, cardHeight, cardWidth } from "./utils/constants";
import { cardFront, cardBack, cardPlaceholder } from "./utils/assetPaths";
import { CardKeyword } from "../data/cards";
import { useState, useEffect } from "react";

const Card = ({
  cardType = CardType.placeholder,
  cardId,
  cardIndex,
  playerId = "0",
  handleCardClick = () => {},
  scale = smallScale,
  card = null,
  shouldAnimate = false,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const frontImg = cardFront(cardId);
  const backImg = cardBack(playerId);
  const placeholderImg = cardPlaceholder(playerId);

  const height = cardHeight * scale;
  const width = cardWidth * scale;

  // 监听shouldAnimate属性变化
  useEffect(() => {
    if (shouldAnimate && card) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 1500); // 增加动画时间到1.5秒
      return () => clearTimeout(timer);
    }
  }, [shouldAnimate, card]);

  const getEffectClassName = () => {
    if (!card || !card.keywords) return "";

    const classes = ["card-hover"];

    if (isAnimating) {
      if (card.keywords.includes(CardKeyword.damage)) {
        classes.push("damage-effect");
      }
      if (card.keywords.includes(CardKeyword.heal)) {
        classes.push("heal-effect");
      }
      if (card.effects) {
        card.effects.forEach((effect) => {
          if (effect.type === "buffAtk" || effect.type === "buffDef") {
            classes.push("buff-effect");
          }
          if (effect.type === "debuffAtk" || effect.type === "debuffDef") {
            classes.push("debuff-effect");
          }
          if (effect.type === "freeze") {
            classes.push("freeze-effect");
          }
          if (effect.type === "preventDmg") {
            classes.push("shield-effect");
          }
          if (effect.type === "resurrect") {
            classes.push("resurrect-effect");
          }
        });
      }
    }

    return classes.join(" ");
  };

  const handleClick = () => {
    handleCardClick(cardIndex);
  };

  const cardContent = {
    [CardType.front]: (
      <div className={getEffectClassName()}>
        <img
          src={frontImg}
          alt="card front"
          height={height}
          width={width}
          onClick={handleClick}
        />
        <div className="particles-container"></div>
      </div>
    ),

    [CardType.back]: (
      <div className="card-hover">
        <img src={backImg} alt="card back" height={height} width={width} />
      </div>
    ),

    [CardType.preview]: (
      <div className={getEffectClassName()}>
        <img src={frontImg} alt="card preview" height={height} width={width} />
        <div className="particles-container"></div>
      </div>
    ),

    [CardType.placeholder]: (
      <div className="card-hover">
        <img
          src={placeholderImg}
          alt="card placeholder"
          height={height}
          width={width}
        />
      </div>
    ),
  };

  return cardContent[cardType];
};

export default Card;
