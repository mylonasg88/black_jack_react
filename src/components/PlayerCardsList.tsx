import React from "react";
import { CardType } from "../utils/utils";
import { IonItem, IonLabel } from "@ionic/react";

interface PropsType {
  cards: Array<CardType>;
}

const PlayerCardsList: React.FC<PropsType> = (props) => {
  const { cards } = props;
  const cardsList = cards.map((card: CardType, index: number) => (
    <React.Fragment>
      <IonItem key={index}>
        <IonLabel color='primary'>
          <h2>
            {card.card} {card.color}
          </h2>
        </IonLabel>
      </IonItem>
    </React.Fragment>
  ));

  return <React.Fragment>{cardsList}</React.Fragment>;
};

export default PlayerCardsList;
