import React, { Component } from 'react';
import { connect } from 'react-redux';
import { stat } from 'fs';
import {UserListActionCreators} from "../store/actions/UserListActions";
import store from "../store/index";
import Row from "./Row";
import { messagea } from 'antd';
import AddUser from "./addUser";

function mapStateToProps(state) {
    return {
        users: state.UserList

    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadUserList: ()=>{
            dispatch(UserListActionCreators.LoadUserListAsyn());
        },
        editUserList: (user)=>{
            dispatch(UserListActionCreators.EditUserListAsyn(user));
        },
        addUserList:(user)=>{
            dispatch(UserListActionCreators.AddUserListAsyn(user));
        },
        deleteUserList:(user)=>{
            dispatch(UserListActionCreators.DeleteUserListAsyn(user));
        }
    };
}

class NewUserList extends Component {
    constructor(props,context){
        super(props,context);
        this.props.loadUserList();
    }
    render() {
        //this.props.loadUserList();
        console.log("state.userlist",this.props.users);
        return (
            <div>
                <AddUser addUs={this.props.addUserList}></AddUser>
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>age</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map(
                            (item, index)=>{
                                return (<Row key={index} userindex={index} user={item} edilist={this.props.editUserList} dellist={this.props.deleteUserList}> </Row>)
                            }
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewUserList);