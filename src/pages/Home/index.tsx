import "./home.scss";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="home">
      <Link to="/user/12">
        Profil de <span>Karl</span>
      </Link>
      <Link to="/user/18">
        Profil de <span>Cécilia</span>
      </Link>
    </main>
  );
}
