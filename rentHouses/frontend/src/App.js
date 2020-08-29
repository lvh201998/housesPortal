import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'

import  HousesList from './HousesList'
import './App.css';
import NavBar from './navbar'
import Footer from './footer'


class App extends Component {
  render() {
      return (
	      <div className="App">
	      <NavBar />
	      <BrowserRouter>
	       <Route path="/" exact component={HousesList} />


	    </BrowserRouter>

	    <Footer/>
	    </div>


    );
  }
}

export default App;
