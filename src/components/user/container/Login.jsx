import React, { Component } from 'react'

const InitialAuthState={
    email:"",
    password:""
}
export default class Login extends Component {
    constructor(props){
        super(props);
        this.state=InitialAuthState;
    }
    render() {
        return (
            <div className="container">
                <h1> Login Form </h1>
                <form method="post">
  <fieldset>
      <legend>Legend</legend>
   
    
    <div className="form-group">
      <label 
      htmlFor="email">Email address</label>
      <input 
      type="email" 
      className="form-control" 
      id="email" 
      name="email"
      placeholder="Please enter your email!"/>
     
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input 
      type="password" 
      className="form-control" 
      id="password"
      name="password" 
      placeholder="Please Enter Your password!"/>
    </div>
    <button 
    type="submit" 
    className="btn btn-info"
    >Login</button>
  </fieldset>
</form>
                
            </div>
        )
    }
}
