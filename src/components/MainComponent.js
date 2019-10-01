import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import SearchBarComponent from './SearchBarComponent';
import CardComponent from './CardComponent';
import breakpoint from 'styled-components-breakpoint'
import axios from 'axios';
import data from 'country-data';

const slide = keyframes`
  0% {
    -webkit-transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
            transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
    -webkit-transform-origin: 0% 50%;
            transform-origin: 0% 50%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) scaleY(1) scaleX(1);
            transform: translateX(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }

`;

const Slide = styled.span`
  div {
      -webkit-animation: ${slide} 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: ${slide} 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const CardDeck = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${breakpoint("tablet")`
    flex-direction: row;
    flex-wrap: wrap;
  `}
  justify-content: center;
`;

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: ``,
      countries: [],
      probability: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    const value = this.input.current.value;
    event.preventDefault();
    if(value.length > 0) {
        const endpoint = `https://api.nationalize.io/?name=${value}`;
        axios.get(endpoint).then(res => {
        const countries = res.data.country.map(x => x.country_id);
        const probability = res.data.country.map(x => x.probability.toFixed(4));
        this.setState({
            firstName: value,
            countries,
            probability
        });
        });
        document.getElementById("searchbar").blur();
        return
    }
    document.getElementById("searchbar").blur();
    this.setState({firstName: ``})
  }

  render() {
    const fullCountryNames = this.state.countries.map(x => {
      return data.countries[x].name;
    });
    const card = [];
    if(this.state.firstName.length > 0) {
        fullCountryNames.map((x, index) => {
          return card.push(
            <CardComponent
              country={x}
              name={this.state.firstName}
              probability={this.state.probability[index]}
              key={index}
            />
          );
        });
    }
    

    return (
      <Wrapper>
        <SearchBarComponent
          handleSubmit={this.handleSubmit}
          input={this.input}
          {...this.state}
        />
        <Slide>
          <CardDeck>{card}</CardDeck>
        </Slide>
      </Wrapper>
    );
  }
}

export default MainComponent