import Header from "./components/Header";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import Counter from "./components/Counter";
import Welcome from "./components/Welcome";
import RegistrationForm from "./components/RegistrationForm";

import UserContext from "./context/UserContext";
import { Routes, Route } from "react-router-dom";
import "./index.css";

import { useSelector, useDispatch } from "react-redux";
import { addBook, clearBooks } from "./features/books/booksSlice";

// const books = [
//   { id: 1, title: "ვეფხისტყაოსანი", author: "შოთა რუსთაველი" },
//   { id: 2, title: "დათა თუთაშხია", author: "ჭაბუა ამირეჯიბი" },
//   { id: 3, title: "მე, ბებია, ილიკო და ილარიონი", author: "ნოდარ დუმბაძე" },
// ];

function HomePage() {
  return (
    <>
      <h2>მოგესალმებით წიგნების კატალოგში!</h2>
      <Counter />
      <br />
      <Welcome />
    </>
  );
}

function BooksPage() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const handleAddBook = () => {
    dispatch(
      addBook({
        title: "ალუდა ქეთელაური",
        author: "ვაჟა-ფშაველა",
      }),
    );
  };

  return (
    <>
      <h2>ჩვენი წიგნები</h2>
      <button onClick={handleAddBook}>ახალი წიგნის დამატება</button>
      <button
        onClick={() => dispatch(clearBooks())}
        disabled={books.length === 0}>
        სიის გასუფთავება
      </button>
      <BookList books={books} />
    </>
  );
}

function ContactPage() {
  return (
    <>
      <h2>კონტაქტი</h2>
      <p>კეთილი იყოს თქვენი მობრძანება ჩვენს ბიბლიოთეკაში!</p>
      <RegistrationForm />
    </>
  );
}

export default function App() {
  return (
    <UserContext.Provider value="მკითხველი">
      <div className="app">
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route path="/register" element={<RegistrationForm />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </UserContext.Provider>
  );
}
