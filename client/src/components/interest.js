import React, { Component } from 'react'
import axios from 'axios';

class interest extends Component {
    constructor(props) {
        super(props)
        this.state={
            username:localStorage.getItem('profile'),
            i1:null,
            i2:null,
            i3:null,
            i4:null,
            i5:null

        }

   
    }

    i1=(e)=> {
        this.setState({
          i1: e.target.checked
        })
      }
      i2=(e)=> {
        this.setState({
          i2: e.target.checked
        })
      }
      i3=(e)=> {
        this.setState({
          i3: e.target.checked
        })
      }
      i4=(e)=> {
        this.setState({
          i4: e.target.checked
        })
      }
      i5=(e)=> {
        this.setState({
          i5: e.target.checked
        })
      }

      onClick=()=>{
             
        const interest={
            i1:this.state.i1,
            i2:this.state.i2,
            i3:this.state.i3,
            i4:this.state.i4,
            i5:this.state.i5,
        }
        
        console.log(interest)
        axios.post('/interest/', interest,
        { headers: { token:localStorage.getItem('token') } }
       
        )
        .then(res =>{
            if(res!=null){
               
                      window.location='/profile'
            }}
        );

      }

  
  
    render() {
        return (
<div className="container" style={{textAlign:"center",padding:"200px"}}>

             <h1 > Hi !{this.state.username}</h1>
            <h2>Select your interest</h2>
             <div className="form-check form-check-inline">
  <input 
  value={this.state.i1}
  onChange={this.i1}
  className="form-check-input" type="checkbox" id="inlineCheckbox1"/>
  <label className="form-check-label" for="inlineCheckbox1">Interest 1</label>
</div>
<div className="form-check form-check-inline">
  <input
  value={this.state.i2}
  onChange={this.i2} className="form-check-input" type="checkbox" id="inlineCheckbox2" />
  <label class="form-check-label" for="inlineCheckbox2">Interest 2</label>
</div>
<div className="form-check form-check-inline">
  <input
  value={this.state.i3}
  onChange={this.i3} className="form-check-input" type="checkbox" id="inlineCheckbox3" />
  <label classNamen="form-check-label" for="inlineCheckbox3">Interest 3</label>
  </div>
  <div className="form-check form-check-inline">
  <input
  value={this.state.i4}
  onChange={this.i4}
  className="form-check-input" type="checkbox" id="inlineCheckbox4" />
  <label class="form-check-label" for="inlineCheckbox2">Interest 4</label>
</div>
<div className="form-check form-check-inline">
  <input 
  value={this.state.i5}
  onChange={this.i5}
  className="form-check-input" type="checkbox" id="inlineCheckbox5"  />
  <label classNamen="form-check-label" for="inlineCheckbox3">Interest 5</label>
</div>
         
           <button onClick={this.onClick} type="submit"  className="btn  btn-primary">Strat Blogging</button>
 </div>
        )
    }
}

export default interest;
