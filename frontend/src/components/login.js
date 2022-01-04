import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import home from "./Home.js"

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
          email: "",
          password: ""
        };
      }

      onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
      };

    signin = (event) => {
        const data = this.state;
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/signin/', data).then(
          res => {
            console.log(res)
            localStorage.setItem('username',res.data.message.username)
            window.location.href = "http://localhost:3000/home/";
            

          }).catch(
            err => {console.log(err)})}

    render() {
        
        return (
             <React.Fragment>
            <form onSubmit={this.signin}>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" onChange = {this.onChange} value = {this.state.email} id="email" className="form-control" placeholder="Enter email" /><br/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={this.onChange} value= {this.state.password} id = "password" className="form-control" placeholder="Enter password" /><br/>
                </div>

             

                <button type="submit" className="btn btn-primary btn-block" >Submit</button>
                
            </form>
            </React.Fragment>
        );
    }
}

export default Login;