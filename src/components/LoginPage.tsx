// import React, { useState } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './loginStyle.css';

const LoginForm = () => {

  return (
    <div className='bg-secondary-subtle d-flex justify-content-center align-items-center' style={{height: '100vh'}}>
        
        <div className='p-5'>
            <h1 className='logoFont'>Media Naranja Speed Dating</h1>
            <h3>A refreshing way of meeting people</h3>
        </div>
        <form className='bg-light p-2 shadow rounded-2'>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Username</span>
                <input type="text" className="form-control" placeholder="Type Here" 
                aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Password</span>
                <input type="text" className="form-control" placeholder="Type Here" 
                aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className='d-flex flex-column'>
                <button type="submit" className="btn btn-primary m-2">Login</button>
                <hr className="hr hr-blurry" />
                <button type="submit" className="btn btn-success m-2">Create new account</button>
            </div>
        </form>
    </div>
  );
};

export default LoginForm;