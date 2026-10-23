import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function Header() {
  const user = useContext(UserContext);

  return (
    <header>
      <h1>წიგნების კატალოგი</h1>
      <p>მომხმარებელი: {user}</p>

      <nav>
        <Link to="/">მთავარი</Link>
        {" | "}
        <Link to="/books">წიგნები</Link>
        {" | "}
        <Link to="/contact">კონტაქტი</Link>
      </nav>
    </header>
  );
}
