import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//modal de edicao
function CardapioModal(props) {
  return (
    <Modal size="xl" show={props.show} onHide={props.onHide}>
      <div className="container-fluid">
        <Modal.Header closeButton>
          <Modal.Title>Buscar Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClick}>
            Close
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default CardapioModal;
