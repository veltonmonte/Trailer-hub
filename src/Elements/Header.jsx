import { Link } from "react-router-dom";
import User from "./Fragments/User";
import Card_Genero from "./Fragments/Cards/Card_Genero";
import { useState } from "react";

function Header() {
  const [showCard, setShowCard] = useState(false);

  return (
    <>
      <header className="header">
        <Link to="/" className="logo">
          <div className="header_logo">
            <img src="Imgs/logotrailerhub.png" alt="logo" />
          </div>
        </Link>

        <nav>
          <ul className="menu">
            <li
              className="generos-wrapper"
              onMouseEnter={() => setShowCard(true)}
              onMouseLeave={() => setShowCard(false)}
            >
              <div className="header_item_menu">Gêneros</div>

              {showCard && <Card_Genero />}
            </li>

            <li>
              <div className="header_item_menu">Contatos</div>
            </li>
            <li>
              <div className="header_item_menu">Pesquisar</div>
            </li>
          </ul>
        </nav>

        <User />
      </header>
    </>
  );
}

export default Header;
