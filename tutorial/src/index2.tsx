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
  authorName: string;
  authorLink: string;
};

type bookObj = {
  imgSrc: string;
  title: string;
  authors: authorObj[];
};

const firstAuthor: authorObj = {
  authorName: "Mel Robbins",
  authorLink:
    "https://www.amazon.com/Mel-Robbins/e/B004SWIOHW/ref=dp_byline_cont_book_1",
};

const secondAuthor: authorObj = {
  authorName: "Sawyer Robbins",
  authorLink:
    "https://www.amazon.com/Sawyer-Robbins/e/B0F74NKRTW/ref=dp_byline_cont_book_2",
};

const firstBook: bookObj = {
  imgSrc:
    "https://images-na.ssl-images-amazon.com/images/I/91ZVf3kNrcL._AC_UL381_SR381,381_.jpg",
  title: `The Let Them Theory: A Life-Changing Tool That Millions of People Can't Stop Talking About`,
  authors: [firstAuthor, secondAuthor],
};

const Booklist = () => {
  return (
    <>
      <section className="book-grid">
        <Book
          imgSrc={firstBook.imgSrc}
          title={firstBook.title}
          authors={firstBook.authors}
        />
        <Book
          imgSrc={firstBook.imgSrc}
          title={firstBook.title}
          authors={firstBook.authors}
        />
      </section>
    </>
  );
};

const Book = (props: bookObj) => {
  return (
    <article className="book">
      <div className="book_info-image">
        <img className="book-image" src={props.imgSrc} alt="" />
      </div>
      <div className="book_info">
        <p className="book-title">{props.title}</p>
        <div className="book_authors">
          {props.authors.map((author, index) => (
            <a className="book_author-name" key={index} href={author.authorLink} target="_blank" rel="noopener noreferrer">
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
