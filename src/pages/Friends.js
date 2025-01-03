import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import { Container, Col, Row, Image } from 'react-bootstrap';

function Friends() {
  return (
      <Container>
        <Row>
          <Col xs = {9}>
            <h2>Friends' Websites</h2>
            <p>
                <a className="App-link" href="https://michaellisano.com">Michael Lisano</a>, <a className="App-link" href="https://billmao.net">Bill Mao</a>, <a className="App-link" href="https://trinityjchung.com">Trinity Chung</a>, <a className="App-link" href="https://oliver.ni">Oliver Ni</a>, <a className="App-link" href="https://ethanwu.dev">Ethan Wu</a>, <a className="App-link" href="https://joewang.me">Joe Wang</a>
            </p>

            <h2>Socials</h2>
            <p>
              GitHub: <a href="https://github.com/albertye1" className="App-link">albertye1</a>
            </p>
            <p>
              LinkedIn: <a href="https://www.linkedin.com/in/albert-ye-587aa81a2/" className="App-link">Albert Ye</a>
            </p>
            <p>
              Spotify: <a href="https://open.spotify.com/user/ptyfxpqz6p33l4mtak1bn3s0p" className="App-link">aly</a>
            </p>
          </Col>
          <Col><Image src="sylveon.jpg" roundedCircle fluid/> <br/> <br/></Col>
        </Row>
      </Container>
  );
}

export default Friends;
