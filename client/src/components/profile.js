import React, { Component } from 'react'
import axios from 'axios';

class profile extends Component {
    constructor(props) {
        super(props)
        this.state={
            location:"NEW DELHI",
            username:localStorage.getItem('profile'),
           i3:false,
           i1:false

        }
        axios
        .get('/fetchProfile', { headers: { token:localStorage.getItem('token') } })
        .then(({ data })=> {
           console.log(this.state.userProfile)

          this.setState(  {
              location:data.user.location,
              i3:data.user.interest.i3,
              i2:data.user.interest.i2,
              i4:data.user.interest.i4,
              i5:data.user.interest.i5,
              i1:data.user.interest.i1

           });
        })
        .catch((err)=> {})


        if(localStorage.getItem('token')===null||localStorage.getItem('profile')===null){
            window.location='/login'
        }
   
    }

   

  
    
   onClick=()=>{
       alert("Do you Want to log oout ???")
       localStorage.clear();
       window.location="/"
   }

  
  
    render() {
        return (
           <div className="container" style={{textAlign:"center"}}>
           <p>Welcome {this.state.username}</p>
        <h3>Your location is {this.state.location}</h3>
           <h3>Your interests are:</h3>
           {this.state.i1? <button style={{margin:"10px"}} type="button" class="btn btn-primary">
                          interest <span class="badge badge-light">1</span>
                          </button>:""}
                          {this.state.i2? <button style={{margin:"10px"}}type="button" class="btn btn-primary">
                          interest <span class="badge badge-light">2</span>
                          </button>:""}
         {this.state.i3? <button type="button" style={{margin:"10px"}}class="btn btn-primary">
                          interest <span class="badge badge-light">3</span>
                          </button>:""}
                          {this.state.i4? <button style={{margin:"10px"}}type="button" class="btn btn-primary">
                          interest <span class="badge badge-light">4</span>
                          </button>:""}
                          {this.state.i5? <button style={{margin:"10px"}} type="button" class="btn btn-primary">
                          interest <span class="badge badge-light">5</span>
                          </button>:""}
           
           <button onClick={this.onClick} type="submit"  className="btn  btn-primary">LogOut</button>
           </div>
        )
    }
}

export default profile;
