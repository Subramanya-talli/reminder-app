import React from 'react'
import { Link } from 'react-router-dom'
import { GrPrevious } from "react-icons/gr";


const BackButton = ({destination = '/'}) => {
  return (
    <Link to={destination} className='shadow-md p-2 bg-blue-500 rounded-sm text-white text-l'>
      <GrPrevious />
    </Link>
  )
}

export default BackButton;