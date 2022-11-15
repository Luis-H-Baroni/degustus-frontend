//formatacao de card
function Card(props) {
  return (
    <div className="card" style={{ width: "10rem" }}>
      <div class="row g-0">{props.children}</div>
    </div>
  );
}

export default Card;
