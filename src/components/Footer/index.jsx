import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p id="thanks">
        Copyright &copy; 2021 Desenvolvido com muito &#128151; pela Calang.io
      </p>
      <div id="iconsFooter">
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
    </footer>
  );
};
export default Footer;
