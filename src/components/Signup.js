import React from "react";
import image from "../laptop.jpg";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div className="bg-slate-500 p-4">
      <div className="max-w-[1240px] h-screen mt-6 mx-auto py-5 md:grid grid-cols-2 rounded-3xl">
        <div className="md:h-[80%]  col-span-1  ">
          <img className="md:w-full md:h-full object-cover" src={image} />
        </div>
        <div className=" bg-white h-[80%]  col-span-1   ">
          <h1 className="text-4xl font-bold mt-3 ml-10 animate-pulse">Register</h1>
          <p className="text-xl ml-10 mt-3 animate-pulse">
            Create your account.it's free and only take a munite
          </p>
          <div className="flex gap-2 justify-center mt-3 ">
            <input
              type="text"
              placeholder="First Name"
              className=" animate-pulse  w-[40%] px-2 py-3 border border-gray-500"
            />
            <input
              type="text"
              placeholder="First Name"
              className=" w-[40%] px-2 py-3 border border-gray-500"
            />
          </div>
          <div className="flex flex-col items-center mt-3">
            <input
              type="text"
              placeholder="Email"
              className=" mt-3  w-[80%] px-2 py-3 border border-gray-500"
            />
            <input
              type="text"
              placeholder="Password"
              className="   w-[80%] px-2 py-3 mt-3 border border-gray-500"
            />
            <input
              type="text"
              placeholder="Confirm Password"
              className="  w-[80%] px-2 py-3 mt-3 border border-gray-500"
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
         
         <button className= " text-white bg-purple-400 font-bold py-3 w-[80%]">Register Now</button>
         
         </div>
         <h1 className="flex justify-end  mr-4">Have an account? <Link to='/Signin'>Sign In </Link></h1>
        </div>
      </div>
    </div>
  );
}

export default Signup;
