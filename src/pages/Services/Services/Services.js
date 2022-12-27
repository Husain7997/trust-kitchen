import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../service/Service';

const Services = () => {
   const [Services, setServices]=useState([]);
console.log(Services)
   useEffect(()=>{
    fetch(`http://localhost:5000/services`)
    .then(res=>res.json())
    .then (data=> setServices(data))
   },[])
  
    return (
      <>
       <h2 className='text-center text-3xl font-bold '><u>All Services</u></h2>
       <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ' >
    
       {
        
        Services.map(service=><Service key={service._id}  service={service}></Service>)
       }
      
       
       </div>
      </>
    );
};

export default Services;