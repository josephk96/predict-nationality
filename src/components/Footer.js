import React from 'react';
import styled from 'styled-components';
import { GithubSquare } from 'styled-icons/fa-brands/GithubSquare';
import { Linkedin } from 'styled-icons/fa-brands/Linkedin';

const FooterContainer = styled.footer`
    display: flex;
    font-family: "Roboto";
    font-size: 1.2rem;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    height: 20vh;
    margin-top: 2rem;
    margin-bottom: 5rem;
`;

const IconContainer = styled.div` 
  display: flex;
  flex-direction: row;
`
;

const WhiteGitHub = styled(GithubSquare)`
  color: #fff;
  width: 3.5rem;
  height: 3.5rem;
  padding-right: 2rem;
`;

const WhiteLinkedIn = styled(Linkedin)`
  color: #fff;
  width: 3.5rem;
  height: 3.5rem;
`;

function Footer() {
    return (
      <FooterContainer>
        <h4>Created in 2019 by Soo Hwan Kim</h4>
        <IconContainer>
          <a href="https://github.com/josephk96">
            <WhiteGitHub />
          </a>
          <a href="https://www.linkedin.com/in/soo-hwan-kim-39645898">
            <WhiteLinkedIn />
          </a>
        </IconContainer>
      </FooterContainer>
    );
}


export default Footer