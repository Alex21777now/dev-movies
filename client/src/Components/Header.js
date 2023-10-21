import React, { Component } from "react";
import { useState } from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Form,
  Button,
  Modal
} from "react-bootstrap";
import logo from "./logo192.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

//export default class Header extends Component {
function Header(props) {  

  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = () => {
    setSelectedMovie();
  };

  const handleClose = () => {
    setSelectedMovie(null);
  };

  console.log(selectedMovie);
 // render() {
    return (
      <>
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              /> DEV MOVIES
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/about"> About us </Nav.Link>
                <Nav.Link href="/contacts"> Contacts </Nav.Link>
                <Nav.Link href="/blog"> Blog </Nav.Link>
              </Nav>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              <Form inline>
                {/*<FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />&emsp;
                <Button variant="outline-info mt-1">Search</Button>*/}
                <Button variant="secondary mt-1" onClick={() => handleCardClick()}>Register (SignUP)</Button>
                &emsp;
                <Button variant="success mt-1" onClick={() => handleCardClick()}>Login (SignIn)</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
           {/* <Routes>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contacts" component={Contacts} />
                <Route exact path="/blog" component={Blog} />
               </Routes> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="blog" element={<Blog />} />
            </Routes>
        </Router>
        <div className="App">
  

      <Modal show={selectedMovie !== null} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: '#023607', color: 'white' }} >
          {/*selectedMovie && */(
            <>
              <h2>НАЗВАНИЕ</h2>
              <img
     src={`https://media.istockphoto.com/id/1294339577/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%B0%D1%8F-%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D0%B0%D1%8F-%D0%B6%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0.jpg?s=612x612&w=0&k=20&c=XycaFhXyg26q3KmeOFzBtXon3W1emadZfblkqi6wRW4=`}
     alt="Movie Background"
     style={{
      margin: '2px 2px 2px 2px',
      width: '99%',    // Set the width of the image to 100% of the container
      height: '100%',   // Set the height of the image to 100% of the container
      objectFit: 'cover' // Use object-fit to cover the container
             }}
        />
              {/*<p>{selectedMovie.description}</p>*/}
              {/* Add more details here */}
              <div style={{ margin: '1px 10px 5px 10px'}}>дан1</div><br/>
              <p><strong>Original Release:        </strong>дан2</p>
              <p><strong>Vote Average:        </strong>дан3</p>
              <p><strong>Vote count:        </strong>дан4</p>
              <p><strong>Popularity:        </strong>дан5</p>
              <p><strong>Original Language:        </strong>дан6</p>

            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
     </>
     
    );
 // }
}
export default Header;