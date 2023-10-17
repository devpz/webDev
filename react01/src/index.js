import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        job="developer"
        img={firstBook.img}
        >
          <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
        </p>
        <button>Click me</button> 
              </Book>
      
      <Book
        author={secondBook.author}
        title={secondBook.title}
        number={22}
        img={secondBook.img}
      />
      
    </section>
  );
};

const firstBook = {
  author: "Rebecca Yarros",
  title: "Fourth Wing",
  img: "/images/book-1.jpg",
};

const secondBook = {
  author: "Rebecca Yarros",
  title: "Iron Flame",
  img: "https://images-na.ssl-images-amazon.com/images/I/91ke43dIxkL._AC_UL900_SR900,600_.jpg",
};

const Book1 = ({ img, title, author, children }) => {
  // rest of logic
};

const Book = (props) => {
  // const Book = ({ img, title, author }) => {
  console.log(props);
  const { img, title, author, job, number, children} = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{author}</h4>
      <p>{job}</p>
      <p>{title}</p>
      <p>{number}</p>
      {children}
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
