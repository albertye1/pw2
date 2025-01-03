import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Col, Nav, Navbar, Row, Image } from 'react-bootstrap';

function greet() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return "morning";
  } else if (hour >= 12 && hour < 18) {
    return "afternoon";
  } else {
    return "evening";
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/"><b>Albert Ye</b></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">home</Nav.Link>
              <Nav.Link href="/">projects</Nav.Link>
              <Nav.Link href="/">resume</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      </header>
      <Container>
        <Row>
          <Col xs = {9}>
            <h2>About Me</h2>
            <p>
              Good {greet()}! I'm Albert. I'm currently studying CS @ Berkeley. I also interned at Amazon and was on course staff for two upper-divison Berkeley classes:
              CS 164 (compilers) and CS 170 (algorithms).
              <br/>
              <br/>
              At Berkeley, I've been involved in the <a href="https://ocf.io">Open Computing Facility</a> and have developed problems 
              for <a href="https://calico.cs.berkeley.edu">CALICO</a> and <a href="https://berkeley.mt">BMT</a>.
            </p>
          </Col>
          <Col><Image src="eevee.jpg" roundedCircle fluid/></Col>
        </Row>
        <Row>
          <h2>Featured Projects</h2>
          <p>
            Here are some of the coding projects I've done:
            <br/>
            <br/>
            <a href = "https://suika.aly.sh">Physics Engine</a>: Developed a clone of Suika game with a custom physics engine in Rust using the Bevy framework, ported to the web via wasm.
          </p>
        </Row>
      </Container>
    </div>
  );
}

export default App;
