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

class addUser extends Component {
    state ={
        id:Date.now(),
        name:"",
        age:"",
        email:"",
        phone:"",
    };

    addUser = (e)=>{
        //console.log("adduser state",this.state)
        this.reset();
        this.props.addUs(this.state);
        //e.preventDefault();
    }

    changehandler = (e)=> {
        this.setState({[e.target.name]:e.target.value});
    }


    reset = (e)=>{
        this.setState({id:"" ,name:"", age:"", email:"", phone:""})
    }
    
    render() {
        return (
            <div style={{margin:"5px"}}>
                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
                  add new user
                </button>
                <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel">Add User</h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <label htmlFor="inputname" className="col-sm-2 control-label">name:</label>
                                    <div className="col-sm-10">
                                        <input type="text" value={this.state.name} name="name" onChange={this.changehandler} className="form-control" id="inputname" placeholder="name"/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputage" className="col-sm-2 control-label">age:</label>
                                        <div className="col-sm-10">
                                            <input type="text" name="age" onChange={this.changehandler} value={this.state.age} className="form-control" id="inputage" placeholder="age"/>
                                        </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputemail" className="col-sm-2 control-label">email:</label>
                                        <div className="col-sm-10">
                                            <input type="email" name="email" onChange={this.changehandler} value={this.state.email} className="form-control" id="inputemail" placeholder="email"/>
                                        </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputphone" className="col-sm-2 control-label">Phone:</label>
                                    <div className="col-sm-10">
                                        <input type="text" name="phone" onChange={this.changehandler} value={this.state.phone} className="form-control" id="inputphone" placeholder="Phone"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.reset}>Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.addUser}>Save changes</button>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(addUser);