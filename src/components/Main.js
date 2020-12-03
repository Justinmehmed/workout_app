import React from 'react'
import Categories from '../components/Categories'
import {Switch, Route} from 'react-router-dom'
import Exercises from './pages/Exercises'
import Create from './Create'
import { Link } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'





const Main = () => {
 

  const values = {
      loggedInStatus: "Please log in",
      user: {}

  }

  // values.handleSuccessfulAuth = values.handleSuccessfulAuth.(values)

  const handleSuccessfulAuth = (data) => {
    values.handleLogin(data);
    values.history.push("/");
  }
  

    return (
        <div className="main">
         <div className="upperNav"> 
         <h3 className='status'>Status: {values.loggedInStatus}</h3>
        <ul>

          <Link to="/sign_up">
            <li className="signUp"> 
                 Sign Up 
            </li>
           </Link>

         <Link to="/login">
          <li className="log">  
          Log in  
          </li>
         </Link>

         </ul>
        </div>
          <div className="mainContent">
            <Switch>
             
              <Route exact path={"/"} 
              render={props =>(
                <Categories {...props} loggedInStatus={values.loggedInStatus} />
              )}
              />
             
              <Route path="/search">Search</Route>
              <Route path="/my_workouts">My Workouts</Route>
              <Route path="/create_workout" component={Create}></Route>
              <Route path="/workout/:id" component={Exercises}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/sign_up" component={Signup}></Route>
          
            </Switch>
            
        
          </div>
        </div>
  
    )  
    
}

export default Main