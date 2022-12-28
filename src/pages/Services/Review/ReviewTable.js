import React from 'react';

const ReviewTable = ({review}) => {
    
    const {name,rating,service,textarea,imgURL}=review;
    return (
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
       <td className='break-normal' ><p style={{width:'0px'}}>{service.slice(0,20)}...</p></td>
       
      </tr>
        </div>
    );
};

export default ReviewTable;