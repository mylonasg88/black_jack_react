import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonListHeader,
} from "@ionic/react";
import React, { useState, useEffect } from "react";

import "./Home.css";
import { Card } from "../components/Card";
import ResetButton from "../components/ResetButton";
import { createDeck, shuffleDeck, CardType } from "../utils/utils";
import PlayerCardsList from "../components/PlayerCardsList";
import List from "./List";

const Home: React.FC = () => {
  const [player, setPlayer] = useState(1);
  const [playerCards, setPlayerCards] = useState<CardType[] | []>([]);
  const [playerPoints, setPlayerPoints] = useState(0);
  const [dealerPoints, setDealerPoints] = useState(0);
  const [deck, setDeck] = useState<CardType[]>(shuffleDeck(createDeck()));
  const [dealerCards, setDealerCards] = useState<CardType[] | []>([]);

  const drawCard = () => {
    let card = deck.pop();
    // this if statement is required by TypeScript as deck.pop() might return 'undefined'
    if (typeof card !== "undefined") {
      if (player) {
        setPlayerCards([...playerCards, card]);
        setPlayerPoints(playerPoints + card.points);
      } else {
        setDealerCards([...dealerCards, card]);
        setDealerPoints(dealerPoints + card.points);
      }
    }
  };

  const initPlayer = () => {
    let card = deck.pop();
    let card2 = deck.pop();
    if (typeof card !== "undefined" && typeof card2 !== "undefined") {
      setPlayerCards([...playerCards, card, card2]);
      setPlayerPoints(playerPoints + card.points + card2.points);
    }
  };

  useEffect(() => {
    // we trigger player to change (be more than 1) when user wins (21) before Dealer plays.
    if (player > 0) initPlayer();

    // Only when (dealer is playing) and (dealer hasn't finished) the game
    if (!player && dealerPoints < 22 && dealerPoints <= playerPoints)
      drawCard();
  }, [player, dealerPoints]);

  const resetGame = () => {
    setPlayerPoints(0);
    setPlayerCards([]);
    setDealerPoints(0);
    setDealerCards([]);
    setPlayer(player + 1);
    setDeck(shuffleDeck(createDeck()));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size='large'>Black Jack</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {playerPoints > 21 && (
          <IonToolbar color='secondary'>
            <IonTitle>Dealer won</IonTitle>
          </IonToolbar>
        )}

        {playerPoints === 21 && (
          <IonToolbar color='secondary'>
            <IonTitle>You won</IonTitle>
          </IonToolbar>
        )}

        {!player && playerPoints < 21 && (
          <React.Fragment>
            {dealerPoints < 22 && dealerPoints > playerPoints ? (
              <IonToolbar color='secondary'>
                <IonTitle>Dealer won</IonTitle>
              </IonToolbar>
            ) : (
              <IonToolbar color='secondary'>
                <IonTitle>You won</IonTitle>
              </IonToolbar>
            )}
          </React.Fragment>
        )}

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard style={{ minHeight: "200px" }}>
                <IonCardContent>
                  <Card {...playerCards[playerCards.length - 1]} />
                </IonCardContent>
              </IonCard>
              {player ? (
                <React.Fragment>
                  {playerPoints < 21 ? (
                    <React.Fragment>
                      <IonButton expand='block' onClick={drawCard}>
                        Hit
                      </IonButton>
                      <IonButton
                        expand='block'
                        color='warning'
                        onClick={() => {
                          setPlayer(0);
                        }}
                      >
                        Stick
                      </IonButton>
                    </React.Fragment>
                  ) : (
                    <ResetButton
                      resetGame={() => {
                        resetGame();
                      }}
                    />
                  )}
                </React.Fragment>
              ) : (
                <ResetButton
                  resetGame={() => {
                    resetGame();
                  }}
                />
              )}
            </IonCol>

            <IonCol>
              <IonCard>
                <IonList>
                  <IonListHeader lines='full'>
                    <IonTitle color='white'>
                      Player points: {playerPoints}
                    </IonTitle>
                  </IonListHeader>
                  <PlayerCardsList cards={playerCards} />
                </IonList>
              </IonCard>
              <IonCard>
                <IonList>
                  <IonListHeader lines='full'>
                    <IonTitle color='white'>
                      Dealer points: {dealerPoints}
                    </IonTitle>
                  </IonListHeader>
                  <PlayerCardsList cards={dealerCards} />
                </IonList>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
