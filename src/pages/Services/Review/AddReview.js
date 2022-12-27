import React, { useContext } from 'react';

import {AuthContext} from '../../Context/AuthProvider/AuthProvider';

const addReview = () => {
    // const {user}= useContext(AuthContext)

    return (
    
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control indicator">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <span className="indicator-item badge">Required</span>
              <input type="text"  placeholder="Your email address" className="input input-bordered" />
              {/* defaultValue={user?.email} */}
            </div>

            <div className="indicator">
              <div className="indicator-item indicator-bottom">
                <button className="btn btn-primary">Review</button>
              </div>
              <div className="card border">
                <div className="card-body">
                  <textarea className="textarea textarea-primary" placeholder="Bio"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default addReview;