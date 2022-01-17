/* eslint-disable jsx-a11y/anchor-is-valid */
import "./index.scss";

const NavBar = () => {
  return (
    <header>
      <img src="logo2.svg" alt="logo Calang.io" />
      <div id="opt-container">
        <div id="opts">
          <a href="#">Início</a>
          <a href="#sobre-text">Sobre</a>
          <a href="#clientes">Clientes</a>
          <a href="#container-external">Serviços</a>
          <a href="#form-contact">Contato</a>
        </div>
        <div id="icons">
          <a href="https://www.linkedin.com/in/calang-io-empresa-jr-007926212">
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
