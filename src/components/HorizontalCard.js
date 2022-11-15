//formatacao de card horizontal e com imagem
function HorizontalCard(props) {
  return (
    <div className="card me-3" style={{ width: "400px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={props.logo} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">{props.children}</div>
      </div>
    </div>
  );
}

export default HorizontalCard;
