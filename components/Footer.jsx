import React from "react";
// import { AiFillInstagram, AiFillTwitter } from "react-icons/ai";
import { BsInstagram,BsTwitter } from "react-icons/bs";


const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 JSM Headphones All rights reserved</p>
      <p className="icons">
       <BsInstagram/>
       <BsTwitter/>
      </p>
    </div>
  );
};

export default Footer;
