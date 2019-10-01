import React from 'react';
import styled from 'styled-components';
import { Passport } from 'styled-icons/fa-solid/Passport';


const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  @import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap");
  font-family: "Montserrat", sans-serif;
`;

const YellowPassport = styled(Passport)`
    color: #FECE00;
    width: 3rem;
    height: 3rem;
    align-self: center;
`;


const Heading = styled.h1`
    color: white;
    font-size: 4rem;
    text-align: center;
    margin-bottom: 1.5rem;
`;

function Header() {
    return (
      <NavBar>
        <Heading>Nationality Predictor</Heading>
        <YellowPassport />
      </NavBar>
    );
}

export default Header;