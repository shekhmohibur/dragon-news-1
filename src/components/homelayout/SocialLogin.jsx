import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold">Login With</h2>
      <div className="flex flex-col gap-3 mt-5">
        <button className="btn btn-outline btn-info"><FaGoogle />Login with Google</button>
        <button className="btn btn-outline btn-primary">
          <FaGithub />Login wth GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
