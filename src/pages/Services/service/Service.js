import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import img1 from '../../../assets/bannaer/1.jpg';

const Service = ({service}) => {
    const {_id, title, description, picture, balance}=service;
    return (
        
        <div className="card card-compact w-64 bg-base-100 shadow-xl m-4">
      <PhotoProvider toolbarRender={({ onScale, scale }) => {
      <>
        <svg className="PhotoView-Slider__toolbarIcon" onClick={() => onScale(scale + 1)} />
        <svg className="PhotoView-Slider__toolbarIcon" onClick={() => onScale(scale - 1)} />
      </>;
  }}>
      <PhotoView src={picture}>
      <img src={picture} alt="service" />
      </PhotoView>
    </PhotoProvider>
      
        
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h2 >Prize: {balance} </h2>
          <p>{description?.slice(0, 100)} ...</p>
          <div className="card-actions justify-end">
            <Link to={`/servicedetails/${_id}`}>
              <button  className="btn btn-primary">View Details</button>
              </Link>
          </div>
        </div>
        
      </div>
    );
};

export default Service;