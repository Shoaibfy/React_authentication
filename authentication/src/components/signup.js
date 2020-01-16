import React,{Component} from 'react';
import * as action  from '../store/actions/action';
// import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class SignUp extends Component{
    constructor(props){
        super(props);
       this.state={
            username:'',
        email:'',
        password1:'',
        password2:''
       }

    }

render(){
    return(
        
        <div>
           
           <div>  UserName:<input type="text"hange={(event)=>this.setState({username:event.target.value})}></input></div>
           <div>  Email:<input type="text"hange={(event)=>this.setState({email:event.target.value})}></input></div>
           <div>  password:<input type="password"hange={(event)=>this.setState({password1:event.target.value})}></input></div>
           <div>  confirm:<input type="password"hange={(event)=>this.setState({password2:event.target.value})}></input></div>
            <div> <button onClick={()=>this.props.onAuth(this.state.username,this.state.email,
                this.state.password1,this.state.password2)}>signup</button> </div>
            {/* <p><Link to='/index'>{this.props.token}</Link></p> */}
                    
                    
              
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
        onAuth:(username,email,password1,password2)=>dispatch(action.authSignUp(username,email,password1,password2))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp);