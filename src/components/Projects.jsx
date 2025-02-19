import React from 'react'
import jokeimage from '../assets/images/jokeimage.png';
import taxInvocie from '../assets/images/taxinvoice.png';
import TodoImage from '../assets/images/TodoImage.png';
import shoppers from '../assets/images/shopperhub.png';
import insta from '../assets/images/insta.png';
import ProjectBox from './ProjectBox';


function Projects() {
  return (
<>
<div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={taxInvocie} projectName="Invoicify" />
        <ProjectBox projectPhoto={TodoImage} projectName="TodoList" />
        <ProjectBox projectPhoto={jokeimage} projectName="Random_Jokes_Generator" />
        <ProjectBox projectPhoto={shoppers} projectName="Shoppers_Hub" />
        <ProjectBox projectPhoto={insta} projectName="Social_Media_Downloader" />
       
       
      </div>

    </div>
</>  )
}

export default Projects