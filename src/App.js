import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import MainComponent from './components/MainComponent'
import Footer from './components/Footer'


const GlobalStyle = createGlobalStyle`
    body {
        @import url('https://fonts.googleapis.com/css?family=Lobster|Luckiest+Guy|Roboto&display=swap');
        font-family: font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        font-size: 62.5%;
        background-color: #0375B4;
    }
`;

class App extends Component {
  render() {
    return(
      <>
        <GlobalStyle />
        <Header />
        <MainComponent />
        <Footer />
      </>
    )
  }

};

export default App;
