import React from 'react';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Home from './components/home';
import SignUp from './components/signup';


class App extends React.Component {
  render() {
    return (
      
        <Router>
          {/* <SignUp/> */}
             <h4>Authentication:</h4>
            <Switch>
              <Route exact path='/'  component={Home}/>
              <Route path='/login'  component={Login}/>
              <Route path='/signup'  component={SignUp}/>

             
              {/* <Route path='/index'  component={Index}/> */}
            </Switch>
        </Router>
   
    );
  }
}

export default App;
