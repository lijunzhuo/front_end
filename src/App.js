import React from 'react';
import {HashRouter as Router, Link, Route, Redirect, Switch} from "react-router-dom";
import logo from './logo.svg';
//import './App.css';
import './App.scss';
import Home from "./components/Home"
import Login from "./components/Login"
import Empty from "./components/Empty"
import Newuserlist from "./components/NewUserList"

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  checkLogIN(){
    if(sessionStorage.getItem("USER_LOG_IN_STATUS")){
      return true;
    }
    else{
      return false;
    }
  }

  render(){
    return(
      <div className="container">
        <Router>
          <Switch>
            <Route 
              path="/" 
              exact 
              render={()=><Redirect to="/app"/>}>
            </Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/newuserlist" component={Newuserlist}></Route>
            <Route 
              path="/app" 
              render={(props)=>{
                if(this.checkLogIN()){
                 return <Home {...props}></Home>
                }else{
                  sessionStorage.setItem("PRE_HIS_URL", JSON.stringify(props.location))
                  return <Login {...props}/>
                }
            }}></Route>
            <Route component={Empty}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
