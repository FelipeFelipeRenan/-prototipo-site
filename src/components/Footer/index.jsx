import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-div">
      <p id="thanks">
        Copyright &copy; 2021 Desenvolvido com muito &#128151; pela Calang.io
      </p>
      <div id="iconsFooter">
        <a href="https://www.linkedin.com/in/calang-io-empresa-jr-007926212" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
      </div>
      </div>
    </footer>
  );
};
export default Footer;
