import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Services from '../../Services/Services/Services';
import HomeComponents from '../HomeComponents/HomeComponents';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Service from '../../Services/service/Service';

const Home = () => {
  const [homePageService, setHomePageService] = useState([])


  useEffect(() => {
    const url = `http://localhost:5000?size=${3}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setHomePageService(data);
      })
  }, [])

  
  return (
    <div>
      <Banner></Banner>
      <h2>this is Home {homePageService.length}</h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {
homePageService.map(service => <Service key={service._id}  service={service}></Service>)
        }
      </div>

      <div className="text-center"> <Link to='/services'>
        <button className="btn btn-primary mt-12 ">See More</button></Link></div>
      <HomeComponents></HomeComponents>

    </div>
  );
};

export default Home;