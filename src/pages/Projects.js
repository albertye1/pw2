import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import { Container, Col, Row } from 'react-bootstrap';

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

function Projects() {
  return (
      <Container>
        <Row>
          <h2>Projects</h2>
          <p>
            <a class="App-link" href = "https://suika.aly.sh">Physics Engine</a>: Developed a clone of Suika game with a custom physics engine 
            in Rust using the Bevy framework, ported to the web via wasm.
          </p>
          <p>
            <a class="App-link" href = "https://github.com/albertye1/pw2">This Website</a>: Written in React with JS. Hosted via Vercel (subject to change) and registered via 
            Porkbun. 
          </p>
          <p>
            <a class="App-link" href = "https://learn.theyei.org/">YEI Learning Portal</a>: Conceived the idea of and developed a training website to help students with
            AP Economics exams, National Economics Challenge, and other high school economics competitions. Written in React with TS, auth via Firebase.
            <br/>
            <br/>
          </p>
        </Row>
        <Row>
          <h2>Teaching</h2>
          <p>
            <a class="App-link" href="https://drive.google.com/drive/folders/1Pke-MW66kA5MJYI8Oodb5JE2yli_K0aQ?usp=sharing">CS 164</a>: This past fall, I was a TA for Berkeley's
            Programming Languages and Compilers class. The materials I've prepared are linked.
          </p> 
          <p>
            <a class="App-link" href="https://decal.ocf.io">Linux Sysadmin Class</a>: Since Spring 2024, I've helped teach the Open Computing Facility's Linux Sysadmin DeCal.
            I lectured topics such as shell scripting, networking, and the Puppet config manager.
          </p>
          <p>
            <a class="App-link" href="https://x-camp.academy">X-Camp</a>: Since Summer 2022, I've been working with X-Camp to teach middle and high school students competitive
            programming. 
            <br/>
            <br/>
          </p>
        </Row>
      </Container>
  );
}

export default Projects;
