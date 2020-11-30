import React from 'react'
import { useParams } from 'react-router-dom'

const Exercises = () => {
  let {id} = useParams ()
   return (
      <div><span> individual workouts { id }</span></div>
  ) 
}

export default Exercises