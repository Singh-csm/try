import React from "react";
import { Box, Text, Link, HStack } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
import style from "./Components styles/footer.module.css";
import logo from "../Images/explorelogo-trans.png"
const Footer = () => {
  return (
    <div className={style.container} >
      <div className={style.top}>
        <div className={style.logo_div}   >
        <img className={style.image} src={logo} alt="footer-logo"/>

          <p>
            Our mission is to make everyone able to feel the attachment back to
            nature by providing an unforgettable experience.
          </p>
        </div>
        <div className={style.footer_menu} >
          <div>
            <h3>ABOUT</h3>
            <p>About Us </p>
            <p>Features</p>
            <p>News & Blog</p>
          </div>
          <div>
            <h3>MOVEMENT</h3>
            <p>What Explore Wonders </p>
            <p>Support Us</p>
           
          </div>
          <div>
            <h3>COMPANY</h3>
            <p>Why Explore Wonders </p>
            <p>Capital</p>
            <p>Security</p>
          </div>
          <div>
            <h3>SUPPORT</h3>
            <p>FAQs</p>
            <p>Support Center</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      <div  className={style.bottom} >
        <div>
          <p>@2023 Explore Wonders. All rights reserved </p>
        </div>
        <HStack spacing="4" className={style.social_icons}>
          <Link href="https://www.facebook.com/people/Explore-wonder/100070993766096/" isExternal>
            <Icon as={FaFacebook} boxSize={6} />
          </Link>
          <Link href="https://www.instagram.com/explorewonders_india" isExternal>
            <Icon as={FaInstagram} boxSize={6} />
          </Link>
          <Link href="https://www.linkedin.com/explorewonders_india" isExternal>
            <Icon as={FaLinkedin} boxSize={6} />
          </Link>
        </HStack>
        <hr></hr>
        <div>
          <p>Terms & Agreement Privacy Policy</p>
        </div>


      </div>
    </div>
  );
};

export default Footer;
