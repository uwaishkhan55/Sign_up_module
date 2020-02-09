import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import login from "./components/login"
import register from "./components/register"
import verification from './components/verification';
import profile from './components/profile';
import interest from './components/interest';


function App() {
 
  
  return (
    
    <Router>
      <div className="container">
     <Navbar/>
      <br/>
      <Route path="/" exact component={login} />
      <Route path="/register" component={register} />
      <Route path="/profile" component={profile} />
      <Route path="/verification" component={verification} /> 
      <Route path="/interest" component={interest} />
      </div>
    </Router>
  );
}

export default App;
