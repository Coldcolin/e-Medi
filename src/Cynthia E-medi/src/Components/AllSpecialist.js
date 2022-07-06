import React, { useState } from 'react'
import axios from "axios"

const AllSpecialist = () => {
  const [data, setData]= useState([]);

  const getDrugs = async()=>{
    try{
      const res = await axios.get("localhost:4400/api/pharm/allVendors?Location=")
      setData(res.data.data)
      console.log(res)
    }catch(error){
      console.log(error.message)
    }
  }

  useState(()=>{
    getDrugs()
  }, [])
  return (
    <div>
    {
      data.map((props)=>(
        <div key={props._id}>
          <p>{props.name}</p>
          <p>{props.description}</p>
          <p>{props.price}</p>
        </div>
      ))
    }
    </div>
  )
}

export default AllSpecialist