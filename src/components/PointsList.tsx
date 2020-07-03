import * as React from "react";
import { IonCard, IonList, IonListHeader, IonTitle } from "@ionic/react";
import PlayerCardsList from "./PlayerCardsList";
import { CardType } from "../utils/utils";

interface IAppProps {
  title: string;
  playerCards: Array<CardType>;
}

const PointsList: React.FunctionComponent<IAppProps> = (props) => {
  const { title, playerCards } = props;

  return (
    <IonCard>
      <IonList>
        <IonListHeader lines='full'>
          <IonTitle color='white' size='small' style={{ padding: 0 }}>
            {title}
          </IonTitle>
        </IonListHeader>
        <PlayerCardsList cards={playerCards} />
      </IonList>
    </IonCard>
  );
};

export default PointsList;
