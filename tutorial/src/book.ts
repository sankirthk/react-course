
import { Authors, authorObj } from "./author";

export type bookObj = {
  id: number;
  imgSrc: string;
  title: string;
  authors: authorObj[];
};

export let Books: bookObj[] = [
  {
    id: 1,
    imgSrc:
      "https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL381_SR381,381_.jpg",
    title: `The Let Them Theory: A Life-Changing Tool That Millions of People Can't Stop Talking About`,
    authors: [Authors[0], Authors[1]],
  },

  {
    id: 2,
    imgSrc:
      "https://images-na.ssl-images-amazon.com/images/I/7186aAI6FFL._AC_UL381_SR381,381_.jpg",
    title: `Oh, the Places You'll Go`,
    authors: [Authors[2]],
  },
];

