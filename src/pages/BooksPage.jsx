import BookList from "../components/BookList";

export default function BooksPage({ books }) {
  return (
    <div>
      <h2>ჩვენი წიგნები</h2>

      <BookList books={books} />
    </div>
  );
}


