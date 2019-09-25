import React from 'react';
//import './App.css';
import './Home.scss';
import List from "./list"
import Adduser from "./addlist";
import store from "../store/index"
import {UserListActionCreators} from "../store/actions/UserListActions"
import Axios from 'axios';
import {message} from "antd";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userList: store.getState().UserList,
      unsubscribe: store.subscribe(()=>{
        this.setState({userList:store.getState().UserList})
      })
    }
  }

  componentWillUnmount(){
    this.state.unsubscribe();
  }

  componentDidMount() {
    Axios.get("http://localhost:59999/users")
    .then(res=>{
      store.dispatch(UserListActionCreators.LoadUserListAction(res.data))
    })
    //store.dispatch(UserListActionCreators.LoadUserListAction(userList))
  }

  logoutHandler= ()=>{
    sessionStorage.removeItem("USER_LOG_IN_STATUS");
    this.props.history.push("/login");
  }

  addU = (user)=>{
    this.setState(prestate=>{
      //console.log(this.state.userList);
      //console.log()
      prestate.userList.push(user);
       return prestate;
    });
  }

  delUser = (user)=>{
    // let index = this.state.userList.findIndex((item)=>item.name==user.name);
    // this.setState(prestate=>{
    //   prestate.userList.splice(index,1);
    //   return prestate;
    // })
    Axios.delete("http://localhost:59999/users/"+user.id)
    .then(res=>{
      store.dispatch(UserListActionCreators.DeleteUserListAction(user));
      message.success('successfull delete '+user.name)
    })
    .catch(()=>{message.error("fail delete "+user.name)});
  }

  editUser = (user)=>{
    let index = this.state.userList.findIndex((item)=>item.name==user.name);
    this.setState(prestate=>{
      prestate.userList.splice(index,1,user);
      return prestate;
    })
  }

  render(){
    //console.log(this.state.userList, store.getState().UserList);
    return(
      <div className="container">
        <h1>view User list</h1>
        <div className="add-user">
          <h3>add user</h3>
          <Adduser addUs={this.addU}></Adduser>
        </div>
        <div className="view-user">
          <h3>view user</h3>
          <List ulist={this.state.userList} dellist={this.delUser} edilist={this.editUser}></List>
        </div>
        <div className="footer">
          <button className="button is-primary" onClick={this.logoutHandler}>Log out</button>
        </div>
      </div>
    )
  }
}

export default App
