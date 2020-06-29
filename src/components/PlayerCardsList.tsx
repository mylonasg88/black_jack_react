import React from "react";
import { CardType } from "../utils/utils";
import { IonItem, IonLabel } from "@ionic/react";

const PlayerCardsList: any = (props: { cards: Array<CardType> }) => {
  const { cards } = props;
  return cards.map((card: CardType, index: number) => {
    return (
      <IonItem key={index}>
        <IonLabel color='primary'>
          <h2>
            {card.card} {card.color}
          </h2>
        </IonLabel>
      </IonItem>
    );
  });
};

export default PlayerCardsList;
