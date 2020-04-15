import React from 'react';


import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';


  

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    
    return (
      <div id="page-container">
        <div id="content-wrap">  <Header/>  </div>
        <footer id="footer"> <Footer/>  </footer>
      </div>
    )
  }
}


