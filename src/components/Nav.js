import React from 'react'
import { ReactComponent as HomeIcon } from '../svgs/home.svg'
import { ReactComponent as SearchIcon } from '../svgs/loupe.svg'
import { ReactComponent as WeightIcon } from '../svgs/dumbbell.svg'
import { ReactComponent as PlusIcon } from '../svgs/plus.svg'
import { Link } from 'react-router-dom'


const Nav = () => {
    return (
    <div className="navbar">
      <div className="logo"> Workout Logo  </div>
            <ul>
                <Link to="/">
                    <li className="active">
                        <HomeIcon /> 
                        Home
                    </li>
                </Link>

                <Link to="/search">
                    <li>
                     <SearchIcon />
                        Search
                    </li>
                </Link>

                 <Link to="/my_workouts">
                     <li>
                      < WeightIcon /> 
                      My Workouts 
                     </li>
                 </Link>

                    <Link to="/create_workout">
                        <li>< PlusIcon /> 
                        Create Workout
                        </li>
                    </Link>
            </ul>
      </div>
    )

}

export default Nav 