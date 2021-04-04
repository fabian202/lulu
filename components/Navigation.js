import React from 'react';
import { Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const Navigation = () => {
  return (
    <Navbar>
    {/* <Navbar.Brand href="#home"> */}
      <Image
        src="/Lulu_400px.png"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
      {/* <Image src="/Lulu_400px.png" alt="Lulu!" width={30} height={30} className="d-inline-block align-top" /> */}
    {/* </Navbar.Brand> */}
  </Navbar>
  )
}

const Image = styled.img`
  width: 5.5rem;
  margin: 0 auto;
`;

export default Navigation
