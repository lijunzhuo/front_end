import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

class Row extends Component {
    constructor(props,context){
        super(props,context);
        this.state = {
            id: "",
            name:"",
            age:"",
            email:"",
            phone:"",
        }
    }

    edithandler(item){
        this.setState(prestate=>{
            prestate.id = item.id;
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
        //console.log(this.state)
        return (
            <tr>
                <td>{this.props.user.id}</td>
                <td>{this.props.user.name}</td>
                <td>{this.props.user.age}</td>
                <td>{this.props.user.email}</td>
                <td>{this.props.user.phone}</td>
                <td>
                    <button onClick={this.edithandler.bind(this,this.props.user)} type="button" className="btn btn-success btn-lg" style={{margin:"5px"}} data-toggle="modal" data-target={"#myModal"+this.props.userindex}>Edit</button>
                    <button onClick={()=>this.props.dellist(this.props.user)} type="button" className="btn btn-info " style={{margin:"5px"}}>Delete</button>
                </td>
                <div className="modal fade" id={"myModal"+this.props.userindex} tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
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
                                        <input id="inputn" type="text" name="name" value= {this.state.name} onChange={this.editChangeHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputa">age:</label>
                                        <input id="inputa" type="text"  name="age" value= {this.state.age} onChange={this.editChangeHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inpute">email</label>
                                        <input id="inpute" type="email" name="eemail" value= {this.state.email} onChange={this.editChangeHandler}></input>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputp">phone</label>
                                        <input id="inputp" type="text"  name="phone" value= {this.state.phone} onChange={this.editChangeHandler}></input>
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
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Row);