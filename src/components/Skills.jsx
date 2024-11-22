import React from 'react'
import {FaReact, FaGitAlt, FaGithub,FaHtml5,  FaCss3Alt ,FaNpm, FaBootstrap,FaNodeJs } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import {DiJavascript1, DiMongodb} from "react-icons/di";

function Skills({skill}) {
    const icon = {
        HTML5:<FaHtml5 />,
        Css3:<FaCss3Alt />, 
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Bootstrap: <FaBootstrap/>,
        NodeJS: <FaNodeJs/>,
        Tailwind: <BiLogoTailwindCss/>,
        MongoDB: <DiMongodb/>,
        
    }
  return (
    <>
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
    </>
  )
}

export default Skills