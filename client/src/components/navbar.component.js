import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        

        <Link to="/" className="navbar-brand"><p>Sign up module</p></Link>
       
        
      </nav>
    );
  }
}