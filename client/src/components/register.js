import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


class register extends Component {
  constructor(props) {
    super(props)


    this.onSubmit=this.onSubmit.bind(this)
    this.state = {
      email: '',
      password: '',
      username: null,
      location:''
    }
    
  }
  componentDidMount(){
    axios('/profile').then(
      data=>{
        console.log(data)
      }
    )
  }


  onChangeusername=(e) =>{
    this.setState({
      username: e.target.value
    })
  }

  onChangelocation=(e)=> {
    this.setState({
      location: e.target.value
    })
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

  componentDidMount(){
    if(localStorage.getItem('token')!==null&&localStorage.getItem('profile')!==null){
      window.location='/profile'
  }
}
  onSubmit=(e)=> {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      location: this.state.location
    }

    alert(exercise.username);

    axios.post('/register/', exercise)
      .then(res => localStorage.setItem('token', res.data.token),
      setTimeout(function (){
        
        window.location='/verification'
      
      }, 2000)
            
      );
    
      
    
   
  }


  render() {
    return (
     
  <div style={{width: "50%",margin:" 0 auto"}} className="container">
     <p>Sign in</p>
       <form    onSubmit={this.onSubmit}>
       <div className="form-group">
     
       <input required
       placeholder="Email"
        type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
       handleInput
       value={this.state.email}
       onChange={this.onChangeemail}
       />
      
       </div>
      <div className="form-group">
    
      <input 
      placeholder="Password"
      value={this.state.password}
      onChange={this.onChangepassword}
  type="password"  className="form-control" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters"  required/>
         </div>
    <label className="sr-only" for="inlineFormInputName2">Name</label>
  <input type="text" className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="Full Name"
    value={this.state.username}
    onChange={this.onChangeusername} 
    required/>

     <div className="form-group">
    
    <input  value={this.state.location}
      onChange={this.onChangelocation}
    type="text" required className="form-control" id="inputAddress" placeholder="Current Location"/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" required className="form-check-input" id="exampleCheck1"
     />
    <label className="form-check-label" htmlFor="exampleCheck1">I agree to all Terms & conditions</label>
      </div>
     
      <button type="submit"  className="btn btn-primary">Submit</button>
      <div className="row">
      <p>Already a member? </p> 
      <Link to="/" className="nav-link">Log in</Link>
      </div>
      
      
    </form>   
                   
</div>

    )
  }
}

export default register;
