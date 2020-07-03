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
import PointsList from "../components/PointsList";

const Home: React.FC = () => {
  const [player, setPlayer] = useState(1);
  const [playerCards, setPlayerCards] = useState<CardType[] | []>([]);
  const [playerPoints, setPlayerPoints] = useState(0);
  const [dealerPoints, setDealerPoints] = useState(0);
  const [deck, setDeck] = useState<CardType[]>(shuffleDeck(createDeck()));
  const [dealerCards, setDealerCards] = useState<CardType[] | []>([]);
  const [gamesCount, setGamesCount] = useState([0, 0]);

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
    // player won
    if (playerPoints === 21 || (playerPoints < 21 && dealerPoints > 21)) {
      setGamesCount([gamesCount[0] + 1, gamesCount[1]]);
    } else {
      setGamesCount([gamesCount[0], gamesCount[1] + 1]);
    }

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
          <IonTitle size='large' className='app-title'>
            Black Jack - Score {gamesCount[0]} : {gamesCount[1]}
          </IonTitle>
        </IonToolbar>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonListHeader lines='full'>
                <IonTitle color='white' style={{ padding: "10px" }}>
                  Player: {playerPoints}
                </IonTitle>
              </IonListHeader>
            </IonCol>
            <IonCol>
              <IonListHeader lines='full'>
                <IonTitle color='white' style={{ padding: 0 }}>
                  Dealer: {dealerPoints}
                </IonTitle>
              </IonListHeader>
            </IonCol>
          </IonRow>
        </IonGrid>
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
              <IonCard>
                <IonCardContent>
                  {playerCards.length > 0 && (
                    <Card
                      {...{
                        card: playerCards[playerCards.length - 1],
                      }}
                    />
                  )}
                </IonCardContent>
              </IonCard>
              {player ? (
                <React.Fragment>
                  {playerPoints < 21 ? (
                    <React.Fragment>
                      <IonButton expand='block' onClick={drawCard}>
                        HIT
                      </IonButton>
                      <IonButton
                        expand='block'
                        color='warning'
                        onClick={() => {
                          setPlayer(0);
                        }}
                      >
                        STICK
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
          </IonRow>
          <IonRow>
            <IonCol size='6'>
              <PointsList
                title={`Player points ${playerPoints}`}
                playerCards={playerCards}
              />
            </IonCol>
            <IonCol size='6'>
              <PointsList
                title={`Dealer points ${dealerPoints}`}
                playerCards={dealerCards}
              />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
