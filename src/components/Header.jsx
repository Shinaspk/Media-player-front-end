import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'


function Header() {
  return (
    <div>

        
<Navbar className=" bg-dark">
        <Container>
          <Navbar.Brand href="#home">
          <Link to={'/'} style={{textDecoration:"none", fontSize:"30px", color:"white"}}><i class="fa-solid fa-video fa-beat text-warning me-3"></i>{' '}
            Vedio player</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header