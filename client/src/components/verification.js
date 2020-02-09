import React, { Component } from 'react'
import Axios from 'axios';

class verification extends Component {
    constructor(props) {
        super(props)
        this.state={
            code:null
        }
   
    }

    


   handleForm=(e)=>{
    e.preventDefault();
       alert(this.state.code)
       Axios.post('/verification/',this.state.code,
       { headers: { token:localStorage.getItem('token'),code:this.state.code } }
       )
       .then(res=>
        
         {
           try{
          localStorage.setItem('profile', res.data.user.username)
       
        
        setTimeout(function (){
         window.location='/interest'
          
          
        
        }, 2000)}catch(c){
          window.location='/verification'
        }
      
      }
       )
   }
   onChangecode=(e)=> {
    this.setState({
      code: e.target.value
    })
  }
    render() {
        return (
            <div className="container">
                <div style={{textAlign:"center"}}>
                <p > Enter verification code. </p>
                <form >
       
      <div className="form-group" style={{width:"50%",margin:"0 auto",padding:"30"}}>
      
      <input 
      value={this.state.code}
      onChange={this.onChangecode}
       type="text" maxLength="5" className="form-control" id="exampleInputPassword1"/>
         </div>
      <button style={{margin:"20px"}} type="submit" onClick={this.handleForm} className="btn btn-primary">Submit</button>
    </form> 
                </div>
               
            </div>
        )
    }
}

export default verification;
