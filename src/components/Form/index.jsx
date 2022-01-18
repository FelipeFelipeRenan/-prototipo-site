import { Container } from "@material-ui/core";
import { TextField } from "@mui/material";
import { InputTel, useStyles } from "../Input";
import "./index.scss";

const Form = () => {
  const classes = useStyles();
  return (
    <>
      <div className="map-form-container">
        <div className="form-contact">
          <a name="form-contact"></a>

          <form autoComplete="off">
            <h2>Fale conosco</h2>
            <div className="form-nomes">
              <TextField
                className={classes.root}
                id="filled-basic"
                label="Nome"
                variant="filled"
                margin="normal"
              />
              <TextField
                className={classes.root}
                id="filled-basic"
                label="Sobrenome"
                variant="filled"
                margin="normal"
              />
            </div>
            <InputTel />
            <div className="form-informacoes">
              <TextField
                className={classes.root}
                id="outlined-multiline-static"
                label="Descrição"
                multiline
                rows={4}
                variant="filled"
                margin="normal"
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
