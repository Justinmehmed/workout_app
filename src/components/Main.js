import React from 'react'
import Categories from '../components/Categories'
import {Switch, Route} from 'react-router-dom'
import Exercises from './pages/Exercises'
import Create from './Create'
import { Link } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'




const Main = () => {
    return (
        <div className="main">
         <div className="upperNav"> 
        <ul>
        <li className="signUp"> 
            <Link to="/sign_up">
                Sign Up 
            </Link>
         </li>
         <li className="login"> 
            <Link to="/login">Log in 
            </Link>
         </li>

         </ul>
        </div>
          <div className="mainContent">
            <Switch>
             
              <Route path="/" exact component={Categories}></Route>
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