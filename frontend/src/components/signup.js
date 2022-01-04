import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SignUp extends Component {
    constructor(props){
      super(props);
      this.state = {
        username: "",
        name: "",
        email: "",
        password: "",
        address: "",
        mobile:""
      };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };

    

    signup = (event) => {
        const data = this.state;
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/signup/', data).then(
          res => {
            console.log(res)
            window.location.href="http://localhost:3000/login";
          }).catch(
            err => {console.log(err)})}

    render() {
        return (
            <form onSubmit={this.signup}> 
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>User name</label>
                    <input onChange={this.onChange} value={this.state.username} id= "username"  type="text" className="form-control" placeholder="User Name" /><br/>
                </div>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" onChange={this.onChange} value={this.state.name} id = "name" className="form-control" placeholder="Name" /><br/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" onChange = {this.onChange} value = {this.state.email} id="email" className="form-control" placeholder="Enter email" /><br/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input onChange={this.onChange} value= {this.state.password} id = "password" type="password" className="form-control" placeholder="Enter password" /><br/>
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input onChange={this.onChange}  value = {this.state.address} id = "address" type="address" className="form-control" placeholder="Enter your Address" /><br/>
                </div>

                <div className="form-group">
                    <label>Mobile</label>
                    <input onChange={this.onChange}  value = {this.state.mobile} id = "mobile" type="mobile" className="form-control" placeholder="Enter your Number" /><br/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                
            </form>
        );
    }
}

export default SignUp;