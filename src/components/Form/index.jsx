import "./index.scss";
import InputMask from 'react-input-mask';

const Form = () => {
  return (
    <>
      <div className="map-form-container">
        <div className="form-contact">
          <a name="form-contact"></a>

          <form>
            <h2>Fale conosco</h2>
            <div className="form-nomes">
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="Sobrenome" />
            </div>
            <div className="form-informacoes">
             <InputMask mask="(99)99999-9999" className="tel"></InputMask>

              <input
                type="text"
                placeholder="Descrição"
                className="descricao"
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="title-and-map">
          <div className="map">
            <a
              href="https://www.google.com.br/maps/@-7.2574966,-39.3043456,1172m/data=!3m1!1e3"
              target="_blank"
              rel="noreferrer"
            >
             <h1 id="localize">Clique para nos achar!</h1>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
