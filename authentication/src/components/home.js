import React,{Component} from 'react';

import { Link } from 'react-router-dom';

class Home extends Component{
  

render(){
    return(
        
        <div>
           <ol> 
                   <li> <Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                   <li> <Link to="/signup">SingUp</Link></li>
            
            </ol>
        </div>
        
    )
}
}
export default Home;