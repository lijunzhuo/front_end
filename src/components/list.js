import React, { Component } from 'react'
import axios from "axios";

export default class list extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            age:"",
            email:"",
            phone:""
        }
    }

    // componentDidMount(){
    //     axios
    //         .get()
    //         .then()
    // }

    delhandler(item){
        if(window.confirm("Are you sure?")){
            this.props.dellist(item)
        }
    }

    edithandler(item){
        this.setState(prestate=>{
            prestate.name = item.name;
            prestate.age = item.age;
            prestate.email = item.email;
            prestate.phone = item.phone;
            return prestate
        })
        console.log(this.state)   
    }

    editChangeHandler =(e)=>{
        this.setState({[e.target.name]:e.target.value})
        console.log(this.state)
    }

    submitEdit = (e)=>{
        this.props.edilist(this.state);
    }

    render() {
        return (
            <div className="list">
                <table className="table table-bordered table-striped table-hover">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>age</th>
                            <th>emial</th>
                            <th>phone</th>
                            <th>options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.ulist.map((item,index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.age}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <button onClick={this.edithandler.bind(this,item)} type="button" className="btn btn-success btn-lg" style={{margin:"5px"}} data-toggle="modal" data-target={"#myModal"+index}>Edit</button>
                                            <button onClick={this.delhandler.bind(this,item)} type="button" className="btn btn-info " style={{margin:"5px"}}>Delete</button>
                                        </td>
                                        <div className="modal fade" id={"myModal"+index} tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-content">
                                                    <div className="modal-header">
                                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                        <h4 className="modal-title" id="myModalLabel"> Edit User Information</h4>
                                                    </div>
                                                <div className="modal-body">
                                                        <form className="form-horizontal">
                                                            <div className="form-group">
                                                                <label htmlFor="inputn">name:</label>
                                                                <input id="inputn" type="text" value={this.state.name} name="name" onChange={this.editChangeHandler}></input>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="inputa">age:</label>
                                                                <input id="inputa" type="text" value={this.state.age} name="age" onChange={this.editChangeHandler}></input>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="inpute">email</label>
                                                                <input id="inpute" type="email" value={this.state.email} name="eemail" onChange={this.editChangeHandler}></input>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="inputp">phone</label>
                                                                <input id="inputp" type="text" value={this.state.phone} name="phone" onChange={this.editChangeHandler}></input>
                                                                </div>
                                                        </form>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                    <button onClick={this.submitEdit} type="button" className="btn btn-primary" data-dismiss="modal">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </tr>
                                    
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
