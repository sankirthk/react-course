import React from "react";
import { createRoot } from "react-dom/client";
import { Books, bookObj } from "./book";
import { authorObj } from "./author";

// CSS
import "./index.css";

const Booklist = () => {
  return (
    <>
      <section className="book-grid">
        {Books.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </section>
    </>
  );
};

const Book = (props: bookObj) => {
  const { imgSrc, title, authors } = props;

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    alert("Hello World");
  };

  const complexHandler = (author: authorObj[]) => {
    console.log(author);
  };

  return (
    <article className="book" onMouseOver={() => console.log(title)}>
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
      <button onClick={clickHandler}>click handler button</button>
      <button onClick={() => complexHandler(authors)}>
        complex click handler
      </button>
    </article>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);

// const GreetingTwo = ()=>{
//   return React.createElement("h2", {}, "New component");
// }

root.render(<Booklist />);
