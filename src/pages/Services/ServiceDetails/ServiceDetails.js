import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import  Review  from "../Review/Review";
const ServiceDetails = () => {
  const service= useLoaderData();
  console.log(service)
    const {_id, title, description, picture, prize}=service;
    return (
        
        <div className="">
        <figure><img src={picture} alt="service" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h2 >Prize: {prize} </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to='/review'><button  className="btn btn-primary">Review</button></Link>
          </div>
        </div>
        <Review></Review>
      </div>
      
    );
};

export default ServiceDetails;