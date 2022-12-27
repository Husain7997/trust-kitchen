import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AddReview from '../Review/AddReview';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Review = () => {
  const { user } = useContext(AuthContext);

  const addReview = document.getElementById("addReview");
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">

          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
              </td>
              <td>Purple</td>
              <th>
                <Link to={addReview}><button className="btn btn-ghost btn-xs">Review</button></Link>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

<AddReview></AddReview>

    </div>
  );
};

export default Review;