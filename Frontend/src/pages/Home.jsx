import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1527603815363-e79385e0747e?q=80&w=1576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 w-full flex flex-col justify-between">
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <div className="bg-white px-4 py-4 pb-7">
          <h1 className="text-[30px] font-bold">Get Started With Uber</h1>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-3 mt-5 rounded-lg"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;