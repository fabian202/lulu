import React from 'react';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';

const SearchItem = ({ name, picture }) => {
  return (
    <div className="p-1 m-1">
      <ProfilePic src={picture} roundedCircle fluid />
      <StyledName>{name}</StyledName>
    </div>
  );
};

const ProfilePic = styled(Image)`
  width: 100%;
`;

const StyledName = styled.div`
  text-align: center;
  /* background-color: red; */
`;

export default SearchItem;
