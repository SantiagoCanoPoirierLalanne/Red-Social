import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';


  

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    
    return (
      <div>
       <Header/>
       <Footer/>
        </div>
    )
  }
}


