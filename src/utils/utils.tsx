export type CardType = {
  card: string;
  color: string;
  points: number;
  img: string;
};

export const createDeck = (): Array<CardType> => {
  return [
    { card: "2", color: "spades", points: 2, img: "2S" },
    { card: "3", color: "spades", points: 3, img: "3S" },
    { card: "4", color: "spades", points: 4, img: "4S" },
    { card: "5", color: "spades", points: 5, img: "5S" },
    { card: "6", color: "spades", points: 6, img: "6S" },
    { card: "7", color: "spades", points: 7, img: "7S" },
    { card: "8", color: "spades", points: 8, img: "8S" },
    { card: "9", color: "spades", points: 9, img: "9S" },
    { card: "10", color: "spades", points: 10, img: "10S" },
    { card: "Jack", color: "spades", points: 10, img: "JS" },
    { card: "Queen", color: "spades", points: 10, img: "QS" },
    { card: "King", color: "spades", points: 10, img: "KS" },
    { card: "Ace", color: "spades", points: 11, img: "AS" },
    { card: "2", color: "hearts", points: 2, img: "2H" },
    { card: "3", color: "hearts", points: 3, img: "3H" },
    { card: "4", color: "hearts", points: 4, img: "4H" },
    { card: "5", color: "hearts", points: 5, img: "5H" },
    { card: "6", color: "hearts", points: 6, img: "6H" },
    { card: "7", color: "hearts", points: 7, img: "7H" },
    { card: "8", color: "hearts", points: 8, img: "8H" },
    { card: "9", color: "hearts", points: 9, img: "9H" },
    { card: "10", color: "hearts", points: 10, img: "10H" },
    { card: "Jack", color: "hearts", points: 10, img: "JH" },
    { card: "Queen", color: "hearts", points: 10, img: "QH" },
    { card: "King", color: "hearts", points: 10, img: "KH" },
    { card: "Ace", color: "hearts", points: 11, img: "AH" },
    { card: "2", color: "diamonds", points: 2, img: "2D" },
    { card: "3", color: "diamonds", points: 3, img: "3D" },
    { card: "4", color: "diamonds", points: 4, img: "4D" },
    { card: "5", color: "diamonds", points: 5, img: "5D" },
    { card: "6", color: "diamonds", points: 6, img: "6D" },
    { card: "7", color: "diamonds", points: 7, img: "7D" },
    { card: "8", color: "diamonds", points: 8, img: "8D" },
    { card: "9", color: "diamonds", points: 9, img: "9D" },
    { card: "10", color: "diamonds", points: 10, img: "10D" },
    { card: "Jack", color: "diamonds", points: 10, img: "JD" },
    { card: "Queen", color: "diamonds", points: 10, img: "QD" },
    { card: "King", color: "diamonds", points: 10, img: "KD" },
    { card: "Ace", color: "diamonds", points: 11, img: "AD" },
    { card: "2", color: "clubs", points: 2, img: "2C" },
    { card: "3", color: "clubs", points: 3, img: "3C" },
    { card: "4", color: "clubs", points: 4, img: "4C" },
    { card: "5", color: "clubs", points: 5, img: "5C" },
    { card: "6", color: "clubs", points: 6, img: "6C" },
    { card: "7", color: "clubs", points: 7, img: "7C" },
    { card: "8", color: "clubs", points: 8, img: "8C" },
    { card: "9", color: "clubs", points: 9, img: "9C" },
    { card: "10", color: "clubs", points: 10, img: "10C" },
    { card: "Jack", color: "clubs", points: 10, img: "JC" },
    { card: "Queen", color: "clubs", points: 10, img: "QC" },
    { card: "King", color: "clubs", points: 10, img: "KC" },
    { card: "Ace", color: "clubs", points: 11, img: "AC" },
  ];
};

export const shuffleDeck = (array: Array<CardType>): Array<CardType> => {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

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
