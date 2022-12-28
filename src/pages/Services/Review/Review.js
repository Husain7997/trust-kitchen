import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import AddReview from '../Review/AddReview';
import ReviewTable from './ReviewTable';


const Review = ({ service }) => {
  const { user } = useContext(AuthContext)
  // const [reviewData, setReviewData] = useState([]);
  const data = useLoaderData();
  // setReviewData(data)


  const handleDelete = id => {
    const proceed = window.confirm('are you confirm for delete this review');
    if (proceed) {
      fetch(`http://localhost:5000/review/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if (data.deletedCount == 1) {
            alert("Successfully deleted one review.")
          }
        });
    }
  }
  const { name, rating, title, textarea, imgURL } = data;
  console.log(data)
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
            {
              data.map(review => <ReviewTable
                key={review._id}
                handleDelete={handleDelete}
                review={review}
              ></ReviewTable>)
            }
          </tbody>
        </table>
      </div>
      <AddReview user={user} data={data} service={service}></AddReview>
    </div>
  );
};

export default Review;