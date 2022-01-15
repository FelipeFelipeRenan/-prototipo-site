import "./index.scss";

const Form = () => {
  return (
    <>
      <div className="form-contact">
        
      <form>
      <h2>Fale conosco</h2>
        <div className="form-nomes">
          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Sobrenome" />
        </div>
        <div className="form-informacoes" >
          <input type="tel" placeholder="Contato" className="telefone"/>
          <input type="text" placeholder="Descrição" className="descricao" />
        </div>
        <button type="submit">Enviar</button>
      </form>
      </div>
    </>
  );
};

export default Form