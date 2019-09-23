import React, { Component } from 'react'
import { objectExpression } from '@babel/types';


export default class addlist extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            age:"",
            email:"",
            phone:"",
        }
    }


    addUser = (e)=>{
        //console.log(this.state)
        this.props.addUs(this.state);
        e.preventDefault();
    }

    changehandler = (e)=> {
        this.setState({[e.target.name]:e.target.value});
    }


    reset = (e)=>{
        this.setState({name:"", age:"", email:"", phone:""})
    }

    render() {
        return (
            <div>
                 <form className="form-horizontal" onSubmit={this.addUser}>
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
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default">submit</button>
                            <button onClick={this.reset} type="reset" className="btn btn-default">reset</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
