/* eslint-disable jsx-a11y/anchor-is-valid */
import "./index.scss";

const NavBar = () => {
  return (
    <header>
      <p id="futura-imagem"> Icone da pagina </p>
      <div id="opt-container">
        <div id="opts">
          <a href="#">Início</a>
          <a href="#">Sobre</a>
          <a href="#">Clientes</a>
          <a href="#">Serviços</a>
          <a href="#">Contato</a>
        </div>
        <div id="icons">
          <a href="#">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
      </div>
    </header>
  );
};
export default NavBar;
