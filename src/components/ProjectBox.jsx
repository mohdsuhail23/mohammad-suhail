import React from 'react'
import {FaGithub} from "react-icons/fa";

function ProjectBox({projectPhoto, projectName}) {

    const desc = {
       
      CanaryoncoDesc : "Providing patients and healthcare professionals with cutting-edge technologies that empower personalized cancer therapy and inform treatment decisions, for a brighter, healthier future.",
      CanaryoncoGithub : "https://canaryonco.gwaddons.com/",

      InvoicifyDesc:"Invoicify is a MERN stack-based tax invoice generator that simplifies invoice creation and storage for future use. It offers a seamless and efficient way to manage billing with a user-friendly interface.",
      InvoicifyGithub:"https://github.com/Suhail1102/Tax-invoice-generator",

      SnapCartDesc:"SnapCart is a modern e-commerce platform built with the MERN stack, offering seamless product browsing, cart management, and secure Stripe-powered checkout. With a responsive UI and smooth user experience, it makes online shopping fast, easy, and secure. 🚀🛒",
      SnapCartGithub:"https://github.com/Suhail1102/SnapCart",
    
        Random_Jokes_GeneratorDesc : "This project is based on generate random jokes . In this project i used html , Css, and Javascript and Api for random jokes . i used asynchronous Javascript to fetch the response from an Apito genrate jokes.",
        Random_Jokes_GeneratorGithub : "https://github.com/Suhail1102/Random-Jokes-Generator",
    
        Shoppers_HubDesc: "Developed a responsive e-commerce website using React and Redux Toolkit with a user-friendly cart functionality.Integrated a cart option, allowing users to add products by clicking an Add to Cart button, with seamless state management to ensure efficient data handling.",
        Shoppers_HubGithub:"https://github.com/Suhail1102/shoppers-hub",
    
        Social_Media_DownloaderDesc : "Created a webapplication using React and Tailwind css and RapidAPI to enable video downloads from platforms like Instagram and Facebook. Utilized RapidAPI to access and manage social media APIs ",
        Social_Media_DownloaderGithub :"https://github.com/Suhail1102/insta-reel-downloader",

        TodoListDesc : "A simple MERN project that lets the user insert, update, delete & get products from the MongoDB. ",
        TodoListGithub :"https://github.com/Suhail1102/Todo-Mern-App",
    
      }

      let show ='';
      if(desc[projectName + 'Github']===""){
        show="none";
      }
  return (
<>
<div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" style={{height: "15rem"}}/> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target="_blank" rel="noopener noreferrer">
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

        </div>
    </div>


</>  )
}

export default ProjectBox