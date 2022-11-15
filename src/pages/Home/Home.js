import { Link } from "react-router-dom";
import beer from '../../assets/degustus/beer_header.png';
import gourmet from '../../assets/degustus/gourmet_header.png';
import { Container, Divider } from "./style";
import { Card } from 'react-bootstrap';


function Home() {
  return (
    <>
      <Container>
        <h1 style={{color: '#000'}}>Rede Degustus</h1>
      </Container>
      <Divider>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={beer} />
          <Card.Body>
            <Card.Title>Display - Cozinha</Card.Title>
            <Card.Text>
              Clique e acesse a tela de pedidos que vão para a cozinha do Degustus Beer.
            </Card.Text>
            <Link to="/beer-cozinha">
              <button className="btn btn-outline-secondary me-2">Cozinha</button>
            </Link>
          </Card.Body>
        </Card>
        
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={beer} />
          <Card.Body>
            <Card.Title>Display - Bebidas</Card.Title>
            <Card.Text>
              Clique e acesse a tela de pedidos que vão para a bebidas do Degustus Beer.
            </Card.Text>
            <Link to="/beer-bebida">
              <button className="btn btn-outline-secondary me-2">Bebidas</button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={gourmet} />
          <Card.Body>
            <Card.Title>Display - Cozinha</Card.Title>
            <Card.Text>
              Clique e acesse a tela de pedidos que vão para a cozinha do Degustus Gourmet.
            </Card.Text>
            <Link to="/gourmet-cozinha">
              <button className="btn btn-outline-secondary me-2">Cozinha</button>
            </Link>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={gourmet} />
          <Card.Body>
            <Card.Title>Display - Bebidas</Card.Title>
            <Card.Text>
              Clique e acesse a tela de pedidos que vão para a bebidas do Degustus Gourmet.
            </Card.Text>
            <Link to="/gourmet-bebida">
              <button className="btn btn-outline-secondary me-2">Bebida</button>
            </Link>
          </Card.Body>
        </Card>
      </Divider>
    </>
  );
}

export default Home;