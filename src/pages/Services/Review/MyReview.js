import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddReview from '../Review/AddReview';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ReviewTable from './ReviewTable';

const Review = () => {
  const { user } = useContext(AuthContext);
  const [myReview, setMyReview] = useState([]);
  const addReview = document.getElementById("addReview");


  useEffect(() => {
    fetch(`http://localhost:5000/myreview?email=${user.email}`)
      .then(response => response.json())
      .then(data => setMyReview(data))
  }, [user?.email])
  return (
    <div>
      <div className="overflow-x-auto w-full mt-10">
        <table className="table w-full">

        <thead>
            <tr className="flex flex-nowrap justify-evenly">

              <th >Name </th>
              <th>Review </th>
              <th>title of service</th>

            </tr>
          </thead>
          <tbody>

          {
            myReview.map(review => <ReviewTable key={review._id} review={review}></ReviewTable>)
          }
          </tbody>
        </table>
      </div>

      {/* <AddReview></AddReview> */}

    </div>
  );
};

export default Review;