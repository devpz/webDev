import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
 {
    author: "Rebecca Yarros",
    title: "Fourth Wing",
    img: "/images/book-1.jpg",
  },
  
 {
    author: "Rebecca Yarros",
    title: "Iron Flame",
    img: "https://images-na.ssl-images-amazon.com/images/I/91ke43dIxkL._AC_UL900_SR900,600_.jpg",
  },

];

const names = ['john', 'peter', 'susan'];
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
  console.log(name);
})

const BookList = () => {
  return <section className="booklist">{newNames}</section>;
  
};



const Book1 = ({ img, title, author, children }) => {
  // rest of logic
};

const Book = (props) => {
  // const Book = ({ img, title, author }) => {
  console.log(props);
  const { img, title, author, job, number} = props;
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <h4>{author}</h4>
      <p>{job}</p>
      <p>{title}</p>
      <p>{number}</p>
      
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
