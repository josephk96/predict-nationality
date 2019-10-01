import React from 'react';
import styled from 'styled-components';
import breakpoint from "styled-components-breakpoint";


const StyledCard = styled.div`
  height: 25rem;
  background-color: white;
  flex: 0 0 1;
  max-width: 80%;
  ${breakpoint("tablet")`
    min-width: 30%;
  `}
  margin: 3rem;
  border-radius: 0.5rem;
  text-align: center;
  -webkit-box-shadow: 3px 5px 25px 8px rgba(0, 0, 0, 0.57);
  box-shadow: 3px 5px 25px 8px rgba(0, 0, 0, 0.57);
`;

const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Lobster", cursive;
  font-weight: 800;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  line-height: 1.5rem;
  margin-top: 2rem;
`;

const Break = styled.p`
  font-family: "Luckiest Guy", cursive;
  font-size: 1.5rem;
  padding-top: 1rem;
  color: #09aded;
`;

function CardComponent(props) {
    return (
        <StyledCard>
          <Paragraph>
            There is a<Break>{props.probability}</Break>
            Probability that
            <Break>{props.name}</Break>
            is from :<Break>{props.country}</Break>
            <Break>{props.flag}</Break>
          </Paragraph>
        </StyledCard>
   
    );
}

export default CardComponent