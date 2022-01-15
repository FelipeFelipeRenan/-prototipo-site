import "./index.scss";

const CardItem = (props) => {
  return <div className="card">
    <i class="fas fa-tv"></i>
    {props.text}
    </div>;
};

export default CardItem;
