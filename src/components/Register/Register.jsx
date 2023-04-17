import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import google from "../../assets/google.png";
import { AuthContext } from "../../provider/AuthProvider";
const Register = () => {
  const [passwordStrength, setPasswordStrength] = useState("");
  const { emailPasswordAuth } = useContext(AuthContext);

  const handleLogIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    setPasswordStrength("");
    if (password.length < 7) {
      setPasswordStrength("Password should greater than 6 digit");
      return;
    }
    if (password !== confirm) {
      setPasswordStrength("Password did not match.");
      return;
    }
    emailPasswordAuth(email, password)
      .then(result => {
        const user = result.user;
        console.log(result);
      })
      .catch(err => {
        setPasswordStrength(err.message);
        console.log(err);
      });
    console.log(email, password, confirm);
  };
  return (
    <div className="max-w-7sl mx-auto px-2 flex justify-center mt-10">
      <div className="max-w-[500px] border w-full p-10  rounded-xl log-in-form relative bg-white">
        <h2 className="text-center font-lato text-4xl">Register</h2>
        <form className="space-y-5" onSubmit={handleLogIn}>
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
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="password"
            />
          </div>
          <div>
            <label htmlFor="password" className="block">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Type here"
              className="input input-bordered w-full"
              name="confirm"
            />
          </div>
          <input
            type="submit"
            value="Log in"
            className="btn w-full mt-5 bg-orange-200 border-0 text-black hover:bg-orange-300"
          />
        </form>
        <div>
          <p className="font-lato text-center mt-5">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-400">
              Login.
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
        <p className="text-red-600 font-bold">{passwordStrength}</p>
      </div>
    </div>
  );
};

export default Register;
