import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
function About({ match }) {
  const { books } = useContext(BookContext);
  console.log("This is context", books);
  let book = books.find((item) => item.title == match.params.name);
  return (
    <div className="container">
      <div className="row">
        <h1>{book.title}</h1>
      </div>
      {book.authors.map((author, id) => (
        <h6 key={id}>{author}</h6>
      ))}
      <div className="row">
        <img
          src={book.thumbnailUrl}
          className="col-4"
          style={{ height: "300px" }}
        ></img>
        <div className="jumbotron col-6">{book.longDescription}</div>
      </div>
    </div>
  );
}

export default About;
