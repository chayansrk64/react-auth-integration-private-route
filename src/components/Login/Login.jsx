import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

  const {userLogIn, signInWithGoogle} = useContext(AuthContext)

    const handleLogIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        userLogIn(email, password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          form.reset()
        })
        .catch(error => {
          console.log(error);
        })


    }

    const handleGoogleLogIn = ()=> {
      signInWithGoogle()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .then(error => {
        console.log(error);
      })
    }





    
    return (
        <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl mt-5 font-bold">Login now!</h1>
             
          </div>
          <div className="card mt-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <Link to='/register'><small className='ps-3'>Are you new here?<a className="btn btn-link">Register</a></small></Link>
          <div><button onClick={handleGoogleLogIn} className='btn btn-primary w-full'>Google LogIN</button></div>
          </div>
        </div>
      </div>
    );
};

export default Login;