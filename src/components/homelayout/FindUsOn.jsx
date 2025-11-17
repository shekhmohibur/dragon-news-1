import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
  return (
    <div className="mt-5">
      <h2 className="font-semibold">Find Us On</h2>
      <div className="join join-vertical flex mt-5">
        <button className="btn join-item bg-base-100 border-base-300 justify-start"><FaFacebook className="text-blue-400"/> <span className="text-accent">Facebook</span></button>
        <button className="btn join-item bg-base-100 border-base-300 justify-start"><FaTwitter className="text-blue-400"/> <span className="text-accent">Twitter</span></button>
        <button className="btn join-item bg-base-100 border-base-300 justify-start"><FaInstagram className="text-pink-400"/> <span className="text-accent">Instagram</span></button>
      </div>
    </div>
  );
};

export default FindUsOn;
