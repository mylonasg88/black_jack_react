import React from "react";
import { CardType } from "../utils/utils";
import { IonItem, IonLabel } from "@ionic/react";
import { Card } from "./Card";

interface PropsType {
  cards: Array<CardType>;
}

const PlayerCardsList: React.FC<PropsType> = (props) => {
  const { cards } = props;
  const cardsList = cards.map((card: CardType, index: number) => (
    <IonItem key={index}>
      <IonLabel color='primary'>{card.img && <Card card={card} />}</IonLabel>
    </IonItem>
  ));

  return <React.Fragment>{cardsList}</React.Fragment>;
};

export default PlayerCardsList;
