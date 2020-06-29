import React from "react";
import { IonCardTitle } from "@ionic/react";

import "./Card.css";
import { CardType } from "../utils/utils";

export const Card: React.FC<CardType> = (card) => (
  <div className='card'>
    <IonCardTitle color='black'>
      {card.card} {card.color}
    </IonCardTitle>
  </div>
);
