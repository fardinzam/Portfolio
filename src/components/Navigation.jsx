import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link';

function Navigation() {
  return (
    // <Navbar expand="lg" className="bg-body-tertiary">
    //   <Container>
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <div className="w-full min-h-[15%] flex items-center justify-between border-b-[1px] border-portfolio-alabaster">
      <div className="h-full pl-5 w-1/5 border-r-[1px] flex items-center">
        <p>fardin zaman</p>
      </div>
      <div className="flex justify-end mr-5">
        <a href="" className='mr-5'>works</a>
        <a href="">contact</a>
      </div>
    </div>

  );
}

export default Navigation;