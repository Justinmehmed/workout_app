import React from 'react'
import Categories from '../components/Categories'
import {Switch, Route} from 'react-router-dom'
import Exercises from './pages/Exercises'

const Main = () => {
    return (
        <div className="main">
         <div className="upperNav"> Sign In</div>
          <div className="mainContent">
            <Switch>
             
          <Route path="/" exact component={Categories}></Route>
          <Route path="/search">Search</Route>
          <Route path="/my_workouts">My Workouts</Route>
          <Route path="/create_workout"> Create Workouts </Route>
          <Route path="/workout/:id" component={Exercises}></Route>
          
            </Switch>
            
        
          </div>
        </div>
  
    )    
}

export default Main