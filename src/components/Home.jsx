import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../assets/LottieFiles/SpaceBoy.json";
import Typed from "./Typed";
import Tilt from 'react-parallax-tilt';
import Avatar from '../assets/images/Avatar.png';

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Mohammad Suhail</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
          I am a passionate <b>MERN stack developer</b>  with over a year of experience in building full-stack websites at <b>Cloudfort Technologies and Consultancy</b>. I hold a Bachelor’s degree in Computer Application from Khwaja Moinuddin Chishti Language University. My skills include React for building dynamic user interfaces, <b>Node.js and Express.js</b> for backend development, and MongoDB for database management. I specialize in creating responsive and engaging web pages using HTML, CSS, and JavaScript, and I am also adept at Bootstrap for designing mobile-friendly websites efficiently. Additionally, my 4-month SEO internship at Logilite Pvt. Ltd. provided me with a strong understanding of optimizing websites for better search engine rankings. I am eager to apply my skills in real-world settings and continue learning and growing in this field. My future learning plans include exploring Next.js and enhancing my expertise further.      
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home