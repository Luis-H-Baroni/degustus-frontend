import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

//modal de edicao
function OrdemModal(props) {
  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Nova Ordem</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onClick}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OrdemModal;
