import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {

  const {user, logOut} = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(()=> {})
      .catch(error => console.error(error))
  }

  return (
    <nav>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Private Route</a>
        <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/orders">Orders</Link>
        {
          user && <Link className="btn btn-ghost normal-case text-xl" to="/profile">Profile</Link>

        }
        <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
        {
          user ?
           <>
            <span>{user.email}</span>  <button onClick={handleLogOut} className="btn btn-xs">SignOut</button>
           </>:
           <Link to='/login'>Log In</Link>
        }
      </div>
    </nav>
  );
};

export default Header;
