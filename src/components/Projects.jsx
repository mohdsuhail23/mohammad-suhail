import React from 'react'
import jokeimage from '../assets/images/jokeimage.png';
import newsimage from '../assets/images/newsimage.jpg';
import shoppers from '../assets/images/shopperhub.png';
import insta from '../assets/images/insta.png';
import ProjectBox from './ProjectBox';


function Projects() {
  return (
<>
<div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={newsimage} projectName="NewsHippo" />
        <ProjectBox projectPhoto={jokeimage} projectName="Random_Jokes_Generator" />
        <ProjectBox projectPhoto={shoppers} projectName="Shoppers_Hub" />
        <ProjectBox projectPhoto={insta} projectName="Social_Media_Downloader" />
       
       
      </div>

    </div>
</>  )
}

export default Projects