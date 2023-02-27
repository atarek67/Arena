import React, { useState } from 'react'



export default function Login() {

  let [user, setUser] = useState({
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
    <>
      <div className='w-50 mx-auto '>
        <h1 className='texttik m-4 d-flex justify-content-center'>LogIn</h1>

        <form onSubmit={formSubmit}>
          <input placeholder='Email / Username' onChange={getUser} type="email" name='email' className='text-center form-control m-2' />
          <input placeholder='Password' onChange={getUser} type="password" name='password' className='text-center form-control m-2' />
          <div className='d-flex justify-content-center m-5'>

            <button className='btn btn-outline-success col-lg-3 col-6'>LogIn</button>
          </div>
        </form>
      </div>
    </>
  )
}