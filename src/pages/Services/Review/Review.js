import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import AddReview from '../Review/AddReview';


const Review = ( ) => {
  // const {_id, title, description, picture, balance}=service;
// const [reviewData, setReviewData]=useState([]);
 const data = useLoaderData();
  
  // setReviewData(data)
   const {name,rating,service,textarea,imgURL}=data;
  const { user } = useContext(AuthContext)

  return (
    <div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full flex-nowrap">

          <thead>
            <tr className="flex flex-nowrap justify-evenly">

              <th >Name </th>
              <th>Review </th>
              <th>title of service</th>

            </tr>
          </thead>
          <tbody>
          <div>
             <tr className="flex-nowrap">
        
        <th>
          <button className="btn btn-ghost btn-xs">Delete</button>
        </th>
        <th>
          <button className="btn btn-ghost btn-xs">Edit</button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={imgURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">rating: {rating}</div>
            </div>
          </div>
        </td>
        <td className="flex flex-nowrap">
         <p>{textarea}</p>
          <br/>
         
        </td>
       <td className='break-normal' ><p style={{width:'0px'}}>{service}...</p></td>
       
      </tr>
        </div>

            {/* {
              reviewData.map(review => <ReviewTable
                key={review._id}
                review={review}
              ></ReviewTable>)

            } */}
          </tbody>
        </table>
      </div>
      <AddReview user={user} data={data}  service={service}></AddReview>
    </div>
  );
};

export default Review;