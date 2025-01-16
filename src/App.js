import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Col, Nav, Navbar, NavbarBrand, Row, Image } from 'react-bootstrap';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Friends from './pages/Friends';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <Navbar>
            <Container>
              <NavbarBrand href="/"><b>Albert Ye</b></NavbarBrand>
                <Nav className="App-nav">
                  <Nav.Link href="/">home</Nav.Link>
                  <Nav.Link href="resume.pdf">resume</Nav.Link>
                  <Nav.Link href="/projects">projects</Nav.Link>
                  <Nav.Link href="/friends">friends</Nav.Link>
                  <Nav.Link href="/blog">yapping</Nav.Link>
                </Nav>
            </Container>
          </Navbar>
          <br/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
