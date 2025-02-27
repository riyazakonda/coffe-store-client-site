import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const heandleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const createTime = result.user?.metadata.creationTime;

        const newUsers = { name, email, createTime };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUsers),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              console.log("user created to db");
            }
          });
        navigate("/");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  return (
    <div className="max-w-2xl mx-auto m-20 pt-20 rounded-lg bg-gray-600 text-white shadow ">
      <h2 className="text-5xl text-center font-family ">Register In Coffee</h2>
      <form onSubmit={heandleRegister} className=" p-10">
        <div className="flex flex-col justify-center">
          <label className="text-2xl m-4 font-family">Your Full name</label>
          <div className="">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full py-2 pl-5 bg-gray-400 rounded-md text-xl font-family "
            />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <label className="text-2xl m-4 font-family">Email</label>
          <div className="">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full py-2 pl-5 bg-gray-400 rounded-md text-xl font-family "
            />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <label className="text-2xl m-4 font-family">Password</label>
          <div className="">
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              required
              className="w-full  py-2 pl-5 bg-gray-400 rounded-md text-xl font-family"
            />
          </div>
        </div>
        <div className="text-center mt-10">
          <input
            className=" btn py-2 w-2/3 cursor-pointer rounded-md bg-gray-800 text-white text-xl font-family"
            type="submit"
            value="Register"
          />
        </div>
        <p className="text-center mt-10 font-family">
          Already have an account ?
          <span className="text-red-400 pl-2">
            <Link to="/login">Login</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default Register;
