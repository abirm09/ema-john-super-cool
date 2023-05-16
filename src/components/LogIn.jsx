import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import "./login.css";
import { AuthContext } from "../provider/AuthProvider";
const LogIn = () => {
  const [logInStatus, setLogInStatus] = useState("");
  const [show, setShow] = useState(false);
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();
  const handleSignIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setLogInStatus("Logged in successful");
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(err => {
        setLogInStatus(err.message);
        console.log(err);
      });
  };
  return (
    <div className="max-w-7sl mx-auto px-2 flex justify-center mt-10">
      <div className="max-w-[500px] border w-full p-10  rounded-xl log-in-form relative bg-white">
        <h2 className="text-center font-lato text-4xl">Login</h2>
        <form className="space-y-5" onSubmit={handleSignIn}>
          <div>
            <label htmlFor="email" className="block">
              Email
            </label>
            <input
              type="email"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block">
              Password
            </label>
            <input
              type={show ? "text" : "password"}
              placeholder="Type here"
              className="input input-bordered w-full"
              name="password"
            />
          </div>
          <p onClick={() => setShow(!show)}>
            <small>{show ? "Hide" : "Show"}</small>
          </p>
          <input
            type="submit"
            value="Log in"
            className="btn w-full mt-5 bg-orange-200 border-0 text-black hover:bg-orange-300"
          />
        </form>
        <div>
          <p className="font-lato text-center mt-5">
            New to ema-john?{" "}
            <Link to="/register" className="text-orange-400">
              Create new account.
            </Link>
          </p>
        </div>
        <hr className="my-5" />
        <div className="flex justify-center">
          <p className="text-center bg-white w-24 -mt-[35px]">Or</p>
        </div>
        <div>
          <button className="flex justify-center items-center w-full gap-3 btn bg-transparent border border-gray-300">
            <img
              src={google}
              alt="Google logo"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-black">Continue with google</span>
          </button>
        </div>
        {logInStatus}
      </div>
    </div>
  );
};

export default LogIn;
