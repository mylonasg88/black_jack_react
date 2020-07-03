import React from "react";
import { IonCardTitle, IonThumbnail, IonImg } from "@ionic/react";

import "./Card.css";
import { CardType } from "../utils/utils";

interface CardProps {
  card: CardType;
  style?: string;
}

export const Card: React.FC<CardProps> = ({ card, style }) => (
  <div className='card current'>
    <IonThumbnail slot='start' className='card-img'>
      <IonImg src={"/assets/cards/" + card.img + ".png"} />
    </IonThumbnail>
  </div>
);
