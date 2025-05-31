import React from "react";
import { createRoot } from "react-dom/client";

// CSS

import "./index.css";

// function Greeting() {
//   return (
//     <>
//       <Person />
//       <Message />
//     </>
//   );
// }

// const Person = () => {
//   return <h2>John Doe</h2>;
// };

// const Message = () => {
//   return <p>This is a para</p>;
// };

type authorObj = {
  id: number;
  authorName: string;
  authorLink: string;
};

type bookObj = {
  id: number;
  imgSrc: string;
  title: string;
  authors: authorObj[];
};

const firstAuthor: authorObj = {
  id: 1,
  authorName: "Mel Robbins",
  authorLink:
    "https://www.amazon.com/Mel-Robbins/e/B004SWIOHW/ref=dp_byline_cont_book_1",
};

const secondAuthor: authorObj = {
  id: 2,
  authorName: "Sawyer Robbins",
  authorLink:
    "https://www.amazon.com/Sawyer-Robbins/e/B0F74NKRTW/ref=dp_byline_cont_book_2",
};

const thirdAuthor: authorObj = {
  id: 3,
  authorName: "Dr. Suess",
  authorLink: "https://www.amazon.com/Dr-Seuss/e/B000AP8MY6?ref=bsf_qv_ov_prnt_ap_rw"
}

let books: bookObj[] = [
  {
    id: 1,
    imgSrc:
      "https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL381_SR381,381_.jpg",
    title: `The Let Them Theory: A Life-Changing Tool That Millions of People Can't Stop Talking About`,
    authors: [firstAuthor, secondAuthor],
  },

  {
    id: 2,
    imgSrc:
      "https://images-na.ssl-images-amazon.com/images/I/7186aAI6FFL._AC_UL381_SR381,381_.jpg",
    title: `Oh, the Places You'll Go`,
    authors: [thirdAuthor],
  },
];

const Booklist = () => {
  return (
    <>
      <section className="book-grid">
        {books.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </section>
    </>
  );
};

const Book = (props: bookObj) => {
  const { imgSrc, title, authors } = props;
  return (
    <article className="book">
      <div className="book_info-image">
        <img className="book-image" src={imgSrc} alt="" />
      </div>
      <div className="book_info">
        <p className="book-title">{title}</p>
        <div className="book_authors">
          {authors.map((author) => (
            <a
              className="book_author-name"
              key={author.id}
              href={author.authorLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {author.authorName}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);

// const GreetingTwo = ()=>{
//   return React.createElement("h2", {}, "New component");
// }

root.render(<Booklist />);
