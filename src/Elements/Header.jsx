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

            {/* AQUI É O QUE IMPORTA */}
            <li
              className="generos-wrapper"
              onMouseEnter={() => setShowCard(true)}
              onMouseLeave={() => setShowCard(false)}
            >
              <Link className="Header_link" id="Generos_header" to="/Genero">
                Gêneros
              </Link>

              {showCard && <Card_Genero />} 
            </li>

            <li>
              <Link className="Header_link" to="/Contatos">
                Contatos
              </Link>
            </li>
            <li>
              <Link className="Header_link" to="/Pesquisar">
                Pesquisar
              </Link>
            </li>
          </ul>
        </nav>

        <User />
      </header>
    </>
  );
}

export default Header;
