import React from 'react';
import SearchItem from '../components/SearchItem';
import Navigation from '../components/Navigation';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
import Image from 'next/image';

const data = [
  {
    name: 'Tati',
    picture: 'https://randomuser.me/api/portraits/women/90.jpg',
  },
  {
    name: 'Andrea',
    picture: 'https://randomuser.me/api/portraits/women/91.jpg',
  },
  {
    name: 'Paulis',
    picture: 'https://randomuser.me/api/portraits/women/89.jpg',
  },
  {
    name: 'Daniela',
    picture: 'https://randomuser.me/api/portraits/women/80.jpg',
  },
  {
    name: 'Jazmine',
    picture: 'https://randomuser.me/api/portraits/women/81.jpg',
  },
  {
    name: 'Yuli',
    picture: 'https://randomuser.me/api/portraits/women/82.jpg',
  },
  {
    name: 'Juana',
    picture: 'https://randomuser.me/api/portraits/women/83.jpg',
  },
  {
    name: 'Amapola',
    picture: 'https://randomuser.me/api/portraits/women/84.jpg',
  },
  {
    name: 'Yesi',
    picture: 'https://randomuser.me/api/portraits/women/85.jpg',
  },
  {
    name: 'Karla',
    picture: 'https://randomuser.me/api/portraits/women/86.jpg',
  }
];

const Search = () => {
  return (
    <>
    <Navigation />
    <Container>
      <Row>
        {data.map((d) => (
          <Col md="4" xs="6">
            <SearchItem {...d} />
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
};

export default Search;
