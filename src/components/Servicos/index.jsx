import CardItem from "../CardItem";
import "./index.scss";

const ServicosCards = () => {
  return (
    <div className="container-external">
      <h1>Serviços</h1>
      <div className="container">
        <CardItem
          text={"Desenvolvimento de programas de computadores sob encomenda"}
        />

        <CardItem
          text={"Desenvolvimento de programas de computadores sob encomenda"}
        />

        <CardItem
          text={"Desenvolvimento de programas de computadores sob encomenda"}
        />
      </div>
    </div>
  );
};
export default ServicosCards;
