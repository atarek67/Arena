import React, { useState } from 'react'
import style from './registration.module.css'

export default function Registration() {

  let [user, setUser] = useState({
    full_name: "",
    username: "",
    phone: 0,
    birth: 0,
    location: "",
    email: "",
    password: "",
  });


  function getUser(e) {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser)
  }
  function formSubmit() {
    console.log("Ana el zorar we shaghal");
  }

  return (
    <div className={style.bodyReg}>

      <div className='w-50 mx-auto '>
        <h1 className='texttik m-4 d-flex justify-content-center'>Register</h1>

        <form onSubmit={formSubmit}>
          <div className="form-group row">
            <label htmlFor="full-name" className="col-sm-2 col-form-label">Full Name</label>
            <div className="col-sm-10">
              <input type="text" onChange={getUser} className="form-control" name='full_name' id="full-name" placeholder='Full Name' />
            </div>
          </div>
          <div className="form-group row mt-2">
            <label htmlFor="username" className="col-sm-2 col-form-label">Username</label>
            <div className="col-sm-10">
              <input type="text" onChange={getUser} className="form-control" name='username' id="username" placeholder='Username' />
            </div>
          </div>
          <div className="form-group row mt-2">
            <label htmlFor="birth" className="col-sm-2 col-form-label">Date of Birth</label>
            <div className="col-sm-10">
              <input type="date" className="form-control" id="birth" />
            </div>
          </div>
          <div className="form-group row mt-2">
            <label htmlFor='location' className='col-sm-2 col-form-label'>Loaction</label>
            <div className="col-sm-10">
              <select name="location" id="location" className=' form-control'>
                <optgroup label="New Cairo">
                  <option value="first-set">First settlement</option>
                  <option value="fifth-set">Fifth settlement</option>
                </optgroup>
                <optgroup label="Nasr City">
                  <option value="makram">Makram Ebeed</option>
                  <option value="mostafa">Mostafa el Nahas</option>
                </optgroup>
              </select>
            </div>
          </div>
          <div className="form-group row mt-2">
            <label htmlFor="phone" className="col-sm-2 col-form-label">Phone</label>
            <div className="col-sm-10">
              <input type="number" onChange={getUser} className="form-control" name='phone' id="phone" placeholder='Phone' />
            </div>
          </div>
          <div className="form-group row mt-2">
            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" onChange={getUser} className="form-control" name='email' id="email" placeholder="Email" />
            </div>
          </div>
          <div className="form-group row mt-2">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" onChange={getUser} className="form-control" id="inputPassword" placeholder="Password" />
            </div>
          </div>
          <div className="text-center m-3">
            <div className="btn btn-outline-dark">Register</div>
          </div>
        </form>
      </div>
    </div>
  )
}
