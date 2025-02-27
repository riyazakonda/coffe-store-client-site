import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const heandleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    console.log(user);
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
        const lastSignInTime = result.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };
        fetch(`http://localhost:5000/users`, {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loginInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("last login time", data);
          });
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="max-w-2xl mx-auto m-20 pt-20 rounded-lg bg-gray-600 text-white shadow ">
      <h2 className="text-5xl text-center font-family ">Login In Coffee</h2>
      <form onSubmit={heandleSubmit} className=" p-10">
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
        <div className="text-center mt-10 ">
          <input
            className=" btn py-2 w-2/3 cursor-pointer rounded-md bg-gray-800 text-white text-xl font-family hover:bg-gray-400"
            type="submit"
            value="Login"
          />
        </div>
        <p className="text-center mt-10 font-family">
          Create a new account
          <span className="text-red-400 pl-2">
            <Link to="/register">register</Link>
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
