import React, { createFactory } from 'react'
import Workouts from '../components/Workouts'

const Categories = () => {
    // api request / state goes here 

    const dataCategories = [
        {
            // probably gonna move top trainers to its own catagory
            id: 1,
            name: 'Conditioning ',
            tagline: 'This weeks highest rated trainers'
        },
        {
            id: 2,
            name: 'Strength ',
            tagline: 'this weeks top workouts'
        },
        {
            id: 3,
            name: 'Yoga and Wellness ',
            tagline: 'this is a description'
        },
      
    ]
    return(
     <div>
         {dataCategories.map((category, id) => (
              <div className="cardsWrap" key ={id}>
                <h2>{category.name} </h2>
                    <span className="seeAll">
                     See All
                    </span>
                        <p className="subText"> This Weeks Top Workouts </p>
                             < Workouts category_id={category.id} />
           
              </div>

         ))}
      
     </div>
        
        

    ) 
}
export default Categories