import React from 'react'
import {FaGithub} from "react-icons/fa";

function ProjectBox({projectPhoto, projectName}) {

    const desc = {
        NewsHippoDesc:"News Hippo is a dynamic website that delivers real-time news updates, crafted using HTML, CSS, JavaScript, Bootstrap, and React for a sleek and responsive user experience.",
        NewsHippoGithub:"https://github.com/Suhail1102/news-hippo",
    
        Random_Jokes_GeneratorDesc : "This project is based on generate random jokes . In this project i used html , Css, and Javascript and Api for random jokes . i used asynchronous Javascript to fetch the response from an Apito genrate jokes.",
        Random_Jokes_GeneratorGithub : "https://github.com/Suhail1102/Random-Jokes-Generator",
    
        Shoppers_HubDesc: "Developed a responsive e-commerce website using React and Redux Toolkit with a user-friendly cart functionality.Integrated a cart option, allowing users to add products by clicking an Add to Cart button, with seamless state management to ensure efficient data handling.",
        Shoppers_HubGithub:"https://github.com/Suhail1102/shoppers-hub",
    
        Social_Media_DownloaderDesc : "Created a webapplication using React and Tailwind css and RapidAPI to enable video downloads from platforms like Instagram and Facebook. Utilized RapidAPI to access and manage social media APIs ",
        Social_Media_DownloaderGithub :"https://github.com/Suhail1102/insta-reel-downloader",
    
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