import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import { Container, Col, Row, Image } from 'react-bootstrap';

function Blog() {
  return (
      <Container>
        <Row>
          <Col>
          <h2>Unhinged Rambling Collection</h2>
          <br />
          <h3>hello</h3>
          <p>
            I should definitely try blogging again. 
            Will prolly want to set up a backend for this as well so I'm not just writing things on a literal webpage
          </p>
          </Col>
        </Row>
      </Container>
  );
}

export default Blog;
