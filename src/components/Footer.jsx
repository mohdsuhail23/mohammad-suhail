import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";



function Footer() {
  return (
    <footer>
    <h4>Developed by Mohammad Suhail</h4>
    <h4>Copyright &copy; 2024 MS</h4>
    <div className='footerLinks'>
      <a href="https://github.com/Suhail1102" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
      <a href="https://www.linkedin.com/in/mohammad-suhail-406a81250/" target='_blank' rel="noopener noreferrer"><FaLinkedin/></a>
      <a href='mailTo:mohdsuhail2762@gmail.com' target='_blank' rel="noopener noreferrer"><GrMail/></a>
      <a href="https://www.instagram.com/suhail03/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    </div>
  </footer>  )
}

export default Footer