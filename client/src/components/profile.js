import React, { Component } from 'react'
import axios from 'axios';

class profile extends Component {
    constructor(props) {
        super(props)
        this.state={
            image:null,
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
              image:data.user.image,
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
            window.location='/'
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
      {(this.state.image)?<img src={this.state.image}  style={{ borderRadius:"20%" , width:"200px" , height:"250px"}} />:""}
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
              
              <button onClick={this.onClick} type="submit" style={{margin:"10px"}} className="btn  btn-primary">LogOut</button>
             <button type="button" style={{margin:"10px"}} className="btn btn-success">Start Blogging</button>
           </div>
        )
    }
}

export default profile;
