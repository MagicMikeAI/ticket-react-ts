// import React, { useEffect } from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Image from 'react-bootstrap/Image';
// import Badge from 'react-bootstrap/Badge';
// import { useParams } from 'react-router-dom';


// function NavbarTop() {

//     let userFirstName = "Mihai"
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//       <Container>
//         <Navbar.Brand >ticket  </Navbar.Brand>
//         <Badge bg="secondary" style={{ padding: "10px", marginRight: "20px", fontSize: "18px"}}
//           >{
//             "Location1"
//           }
//           </Badge>

//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">

//             <Nav.Link href="#features">Features</Nav.Link>
//             <Nav.Link href="#Roadmap">Roadmap</Nav.Link>



//           </Nav>
//           <Nav>

//             <Nav.Link eventKey={2} >
//               <Image style={{ margin: "6px", width: "40px", height: "40px"}} src="https://www.shareicon.net/data/2016/08/05/806962_user_512x512.png" roundedCircle />
//               Hi {userFirstName} !
//             </Nav.Link>

//           </Nav>
//           <Nav style={{margin: "4px", marginBottom: "9px"}}>
//           <NavDropdown title="Settingss"//{siteLocation ? siteLocation : "Settings"}
//                         id="collasible-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">{userFirstName}</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//             </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavbarTop;
import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';


function CollapsibleExample() {
  let location = Cookies.get("location");
  let username = Cookies.get("username");

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ marginTop: "-24px" }}>
      <Container>
        <Navbar.Brand href="#home">Fast-Ticket</Navbar.Brand>
        <Badge bg="secondary" style={{ padding: "10px", marginRight: "20px", fontSize: "18px" }}
        >{
            location ? location : "Location1"
          }
        </Badge>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>

            <Nav.Link eventKey={2}>
              <Image style={{ margin: "6px", width: "40px", height: "40px" }} src="https://www.shareicon.net/data/2016/08/05/806962_user_512x512.png" roundedCircle />
              Hi {username} !

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

