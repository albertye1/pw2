import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import { Container, Col, Row, Image } from 'react-bootstrap';

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

function Home() {
  return (
      <Container>
        <Row>
          <Col xs = {9}>
            <h2>About Me</h2>
            <p>
              Good {greet()}! I'm an undergraduate studying CS at Berkeley. I also interned at Amazon and was on course staff for two upper-divison Berkeley classes:
              CS 164 (compilers) and CS 170 (algorithms).
              <br/>
              <br/>
              At Berkeley, I'm involved in the <a class="App-link" href="https://ocf.io">Open Computing Facility</a> and write problems 
              for <a class="App-link" href="https://calico.cs.berkeley.edu">CALICO</a> and <a class="App-link" href="https://berkeley.mt">BMT</a>.
              <br/>
              <br/>
              Outside of class, I enjoy going on drives (while listening 
              to <a className="App-link" href="top_december_24.png"><i>any</i> genre</a> of music),
              eating good food, and playing Stellaris / Geometry Dash / osu.
              <br/>
              <br/>
            </p>
          </Col>
          <Col><Image src="eevee.jpg" roundedCircle fluid/> <br/> <br/></Col>
        </Row>
      </Container>
  );
}

export default Home;
