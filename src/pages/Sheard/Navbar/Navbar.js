import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Navbar = () => {
  const {user, logOut}=useContext(AuthContext)

  const handleLogOut=()=>{
    logOut()
    .then(()=>{
      console.log()
    })
    .catch(()=>{})
  }
    return (
        <>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       <>
       <li><Link to='/'>Home</Link></li>
      <li><Link to='/services'>Services</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li></>
       {user?.uid? 
      <> <li><Link to='/myreview'>MyReview</Link></li>
      <li><Link to='/addservice'>Add Service</Link></li>
   <p>{user.displayName}</p>
   <button onClick={handleLogOut} className="btn btn-active btn-ghost">Log Out</button></>
        :
       <li><Link to='/login'>Login</Link></li>}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl"> Trust Kitchen</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <>
       <li><Link to='/'>Home</Link></li>
      <li><Link to='/services'>Services</Link></li>
        <li><Link to='/blogs'>Blogs</Link></li></>
       {user?.uid? 
      <> <li><Link to='/myreview'>MyReview</Link></li>
      <li><Link to='/addservice'>Add Service</Link></li>
      <button onClick={handleLogOut} className="btn btn-active btn-ghost">Log Out</button>

   <p>{user?.displayName}</p></>
        :
       <li><Link to='/login'>Login</Link></li>}
    </ul>
  </div>:
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL}/>
        </div>
      </label>
     
    </div>
</div>
        </>
    );
};

export default Navbar;