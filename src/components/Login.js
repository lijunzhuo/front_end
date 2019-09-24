import React, { Component } from 'react'
import {Redirect} from "react-router-dom";
import "./login.css"

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            loginName:"",
            loginPassword:"",
            showWarning: false,
        }
    }

    loginHander = (e)=>{
        if(this.state.loginName == "leo"&& this.state.loginPassword=="123"){
            sessionStorage.setItem("USER_LOG_IN_STATUS", JSON.stringify({name:"leo", password:"123"}))
            let lastLocation = JSON.parse(sessionStorage.getItem("PRE_HIS_URL"))
            if(lastLocation){
                sessionStorage.removeItem("PRE_HIS_URL")
                this.props.history.push(lastLocation);
            }else{
                this.props.history.push("/app");
            }
        }else{
            this.setState({showWarning:true});
        }
    }

    changeHandler = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    }

    render() {
        return (
            <div className="container_login">
                {/* <button onClick={this.loginHander}>log in</button> */}
                <form className="box_login">
                    {/* <h1>Login</h1> */}
                    <input onChange={this.changeHandler} value={this.state.loginName} className="text_login" type="text" name="loginName" placeholder="Username"/>
                    <input onChange={this.changeHandler} value={this.state.loginPassword} className="password_login" type="password" name="loginPassword" placeholder="Password"/>
                    <input onClick={this.loginHander} className="submit_login" type="submit" name="" value="Login"/>
                    {this.state.showWarning? <p style={{color:"red"}}> Username or Password is not correct</p>:null}
                </form>
            </div>
        )
    }
}
