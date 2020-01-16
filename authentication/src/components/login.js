import React, { Component } from 'react';
import * as action from '../store/actions/action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class Login extends Component {
    constructor(props) 
    {
        super(props); 
        this.state={
            username:'',
            password:''
        }
    }
    render(){
        return(
        <div>
           UserName :<input type="text" onChange={(event)=>this.setState({username:event.target.value})}/>
            Password:<input type="text" onChange={(event)=>this.setState({password:event.target.value})}/>
            <button onClick={()=>this.props.onAuth(this.state.username,
                this.state.password)}>login</button>
                <Link to="/signup"><h6>create new account</h6></Link><input type="radio"/>
        </div>
        )
    }
}

const mapStateToProps=state=>{
    return{

        token:state.token,
        error:state.error
       
    }
}


const mapDispatchToProps=dispatch=>{
    return{
        onAuth:(username,password)=>dispatch(action.authLogin(username,password))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Login);