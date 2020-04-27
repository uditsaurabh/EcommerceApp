import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookItem from "./Bookitem";

function BookList() {
  const { books } = useContext(BookContext);

  return (
    <div className="row">
      {books.map((book) => {
        return <BookItem key={book.isbn} book={book}></BookItem>;
      })}
    </div>
  );
}

export default BookList;
