export type CardType = {
  card: string;
  color: string;
  points: number;
  img: string;
};

export const createDeck = (): Array<CardType> => {
  return [
    { card: "2", color: "spades", points: 2, img: "" },
    { card: "3", color: "spades", points: 3, img: "" },
    { card: "4", color: "spades", points: 4, img: "" },
    { card: "5", color: "spades", points: 5, img: "" },
    { card: "6", color: "spades", points: 6, img: "" },
    { card: "7", color: "spades", points: 7, img: "" },
    { card: "9", color: "spades", points: 9, img: "" },
    { card: "10", color: "spades", points: 10, img: "" },
    { card: "Valet", color: "spades", points: 10, img: "" },
    { card: "Dama", color: "spades", points: 10, img: "" },
    { card: "King", color: "spades", points: 10, img: "" },
    { card: "Ace", color: "spades", points: 11, img: "" },
    { card: "2", color: "hearts", points: 2, img: "" },
    { card: "3", color: "hearts", points: 3, img: "" },
    { card: "4", color: "hearts", points: 4, img: "" },
    { card: "5", color: "hearts", points: 5, img: "" },
    { card: "6", color: "hearts", points: 6, img: "" },
    { card: "7", color: "hearts", points: 7, img: "" },
    { card: "9", color: "hearts", points: 9, img: "" },
    { card: "10", color: "hearts", points: 10, img: "" },
    { card: "Valet", color: "hearts", points: 10, img: "" },
    { card: "Dama", color: "hearts", points: 10, img: "" },
    { card: "King", color: "hearts", points: 10, img: "" },
    { card: "Ace", color: "hearts", points: 11, img: "" },
    { card: "2", color: "diamonds", points: 2, img: "" },
    { card: "3", color: "diamonds", points: 3, img: "" },
    { card: "4", color: "diamonds", points: 4, img: "" },
    { card: "5", color: "diamonds", points: 5, img: "" },
    { card: "6", color: "diamonds", points: 6, img: "" },
    { card: "7", color: "diamonds", points: 7, img: "" },
    { card: "9", color: "diamonds", points: 9, img: "" },
    { card: "10", color: "diamonds", points: 10, img: "" },
    { card: "Valet", color: "diamonds", points: 10, img: "" },
    { card: "Dama", color: "diamonds", points: 10, img: "" },
    { card: "King", color: "diamonds", points: 10, img: "" },
    { card: "Ace", color: "diamonds", points: 11, img: "" },
    { card: "2", color: "clubs", points: 2, img: "" },
    { card: "3", color: "clubs", points: 3, img: "" },
    { card: "4", color: "clubs", points: 4, img: "" },
    { card: "5", color: "clubs", points: 5, img: "" },
    { card: "6", color: "clubs", points: 6, img: "" },
    { card: "7", color: "clubs", points: 7, img: "" },
    { card: "9", color: "clubs", points: 9, img: "" },
    { card: "10", color: "clubs", points: 10, img: "" },
    { card: "Valet", color: "clubs", points: 10, img: "" },
    { card: "Dama", color: "clubs", points: 10, img: "" },
    { card: "King", color: "clubs", points: 10, img: "" },
    { card: "Ace", color: "clubs", points: 11, img: "" },
  ];
};

export const shuffleDeck = (array: Array<CardType>): Array<CardType> => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // shuffle the deck array
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
