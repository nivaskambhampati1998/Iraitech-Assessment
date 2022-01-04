import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
          users : []
        };
      }

    componentDidMount(){
        if(localStorage.getItem('username')){

        axios.get("http://127.0.0.1:8000/api/users/" + localStorage.getItem('username'))
        .then(res=>this.setState({users:res.data[0]}))
        .catch(err => console.log(err));
        console.log(this.state.users)
        }
        else{
            window.location.href='http://localhost:3000/login'
        }
    }
    render(){
        return (
            <React.Fragment>
               <div className="card p-3">
                   {
                        <>
                        <h4>Username: {this.state.users.username}</h4>
                        <h4>Name: {this.state.users.name}</h4>
                        <h4>Email: {this.state.users.email}</h4>
                        <h4>Address: {this.state.users.address}</h4>
                        <h4>Mobile: {this.state.users.mobile}</h4><br/>
                        
                        </>
                       
                
                   }
               </div>
            </React.Fragment>
        );
    }
}

export default Home;