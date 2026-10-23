import { useDispatch } from "react-redux";
import { removeBook } from "../features/books/booksSlice";

export default function BookList({ books }) {
  const dispatch = useDispatch();
  if (books.length <= 0) {
    return (
      <>
        <p>წიგნები არ მოიძებნა</p>
      </>
    );
  }
  return (
    <>
      {books.map((book) => {
        return (
          <div key={book.id}>
            <p>
              წიგნის სახელია: <strong>{book.title}</strong> წიგნის ავტორია:
              <strong>{book.author}</strong>
            </p>
            <button onClick={() => dispatch(removeBook(book.id))}>წაშლა</button>
          </div>
        );
      })}
    </>
  );
}

// import { useDispatch } from "react-redux";
// import { removeBook } from "../features/books/booksSlice";

// export default function BookList({ books }) {
//   const dispatch = useDispatch();

//   if (books.length === 0) {
//     return <p>წიგნები არ მოიძებნა</p>;
//   }

//   return (
//     <>
//       {books.map((book) => (
//         <div key={book.id}>
//           <p>
//             წიგნის სახელია: <strong>{book.title}</strong>
//             {" | "}
//             წიგნის ავტორია: <strong>{book.author}</strong>
//           </p>

//           <button onClick={() => dispatch(removeBook(book.id))}>წაშლა</button>
//         </div>
//       ))}
//     </>
//   );
// }

