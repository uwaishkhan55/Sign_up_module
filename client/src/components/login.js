import React, { Component } from 'react'
import axios from "axios";
import{Link} from "react-router-dom"

class login extends Component {
  constructor(props) {
    super(props)

    this.state = {
         email:"",
         password:""
    }
    if(localStorage.getItem('token')!==null&&localStorage.getItem('profile')!==null){
      window.location='/profile'
  }
    
  }
 

  onChangeemail=(e)=> {
    this.setState({
      email: e.target.value
    })
  }

  onChangepassword=(e)=> {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit=(e)=> {
    e.preventDefault();

    const exercise = {
      password: this.state.password,
      email: this.state.email,
    }

    axios.post('/login/', exercise)
    .then((res) => {

     try{
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('profile', res.data.user.username)
      setTimeout(function (){
      window.location='/profile' }, 2000)
     }catch(c){
            window.location="/"
     }}
          
    );
  
    
      
    
   
  }







  render() {
    return (
     
  <div style={{width: "50%",margin:" 0 auto"}} className="container">
     <p>Sign in</p>
       <form  onSubmit={this.onSubmit} >
       <div className="form-group">
       <input  
        placeholder="Email"
       value={this.state.email}
       onChange={this.onChangeemail}
       type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
       handleInput
       />
       </div>
      <div className="form-group">
      <input 
      placeholder="Password"
      value={this.state.password}
      onChange={this.onChangepassword}
  type="password"  className="form-control" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"  required/>
         </div>
     <div className="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" onClick={this.handleForm} className="btn btn-primary">Submit</button>
      <div className="row"> 
      <p>New to the site?</p> 
      <Link to="/register" className="nav-link"><p>Sign up</p></Link> 
      </div>
    </form>   

    
                   
</div>

    )
  }
}

export default login
