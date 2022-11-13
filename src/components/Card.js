//formatacao de card
function Card(props) {
  return (
    <div className="card" style={{ width: "10rem" }}>
      {props.children}
    </div>
  );
}

export default Card;
