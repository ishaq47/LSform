import React from 'react'
import image from '../../laptop.jpg'
import { Link } from 'react-router-dom'
function Signin() {
  return (
    <div className='bg-slate-500 p-4'>
        <div className='max-w-[1240px] h-screen mt-6 mx-auto py-5 md:grid grid-cols-2  '>
        <div className="md:h-[80%]  col-span-1  ">
        <img className="md:w-full md:h-full object-cover " src={image} />
        </div>
        <div className="h-[80%]  col-span-1 bg-white ">
        <h1 className="text-4xl font-bold mt-4 ml-10">Sign In</h1>
          <p className="text-xl ml-10 mt-4">
            Sign in to your account.
          </p>
        <div className="flex flex-col items-center mt-10">
            <input
              type="text"
              placeholder="Email"
              className=" mt-3  w-[80%] px-2 py-3 border border-gray-500"
            />
            <input
              type="text"
              placeholder="Password"
              className=" mt-3  w-[80%] px-2 py-3 mt-3 border border-gray-500"
            />
           
          </div>
          <div className="flex gap-3 justify-center mt-3">
            <input type="checkbox" />{" "}
            <p>
              {" "}
              I accept the term of use &{" "}
              <a className="text-black"> Privacy Policy</a>
            </p>
          </div>
          <div className="flex  justify-center mt-8">
         
         <button type='submit' value='submit' className= "   text-white bg-purple-400 font-bold py-3 w-[80%]">Sign In</button>
         
         </div>
         <div className='flex justify-between'>
         <h1 className=" mt-10  border p-1 bg-slate-300 w-[35%] ml-4">  <Link to='/'> Click here to create account. </Link></h1>
         <h1 className="flex justify-end mt-10  p-1 text-blue-500  ">  <Link to='/'> Forgot Password. </Link></h1>
         </div>
        </div>
        </div>
    </div>
  )
}

export default Signin
