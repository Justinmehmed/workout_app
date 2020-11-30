import React from 'react'
import { Link } from 'react-router-dom'

const Workouts = (props) => {
     const dataWorkouts = [
        {
        id: 101,
        category_id: 1,
        name: 'HIIT Training',
        img: "https://images.unsplash.com/photo-1579046758287-7b35f5791790?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGtldHRsZWJlbGx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
        description: 'Full Body Circuit',
        },
        {
         id: 102,
        category_id: 2,
        name: 'Strength Training ',
        img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80",
        description: 'Increase your pull-up strength',
        },

        {
         id: 103,
         category_id: 3,
         name: 'Yoga',
         img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=731&q=80",
         description: 'Beginners Yoga Lesson ',
         },

         {
         id: 104,   
         category_id: 1,
         name: 'Tabata',
         img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80",
         description: ' 4 Round upper body tabata',
         },
    ]

    const matchedWorkouts = dataWorkouts.filter(
        (workout) => workout.category_id === props.category_id
        )

    return (
        <div className="cardsWrapInner">
            { matchedWorkouts.map((workout, id) => (

            <Link to={`/workout/` + workout.id}>
            
                <div className="card" key ={id}>
                    <div className="cardImage">
                        <img 
                            src={workout.img} alt="Pic 2"/>
                    </div>
                     <div className="cardContent" >
                        <h3>{workout.name}</h3>
                            <span>
                            {workout.description}  
                            </span>
                    </div> 
                </div> 
            </Link>
          ))} 
        </div>         
        
     )
}


export default Workouts