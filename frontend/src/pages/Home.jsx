import React, { useEffect, useState } from 'react'
import axios from "axios"
import Loading from '../components/Loading';


const Home = () => {
  const [loading, setloading] = useState(false);

  useEffect(()=>{
    setloading(true)
    axios
    .get('http://localhost:3050')
    .then((response)=>{
      setloading(false)
    })
    .catch((error)=>{
      console.error("Error fetching books:", error.response || error.message);
        setloading(false);
    })
  },[])
  return (
    <div>
      {
        loading ?  (
          <Loading/>
        ):
        <h1> Loaded </h1>
      }
    </div>
  )
    
}

export default Home;