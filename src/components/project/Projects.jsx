import React from 'react'
import './Project.css'
import { projects } from '../../util/ProjectsInfo'
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";


const Projects = () => {
  return (
    <div className='projects' id='project'>
        <div className="project-title">
            <h1>Projects</h1>
        </div>
        <div className="project-container">
           {
            projects.map((project,index)=>{
                return <div key={index} className="projects-format">
                  <h3>{project.name}</h3>
                  <h2>{project.desc}</h2>
                  <span className='project-stack'>
                  {
                    project.stack.map((item,index)=>(
                    <li  key={index} className='project-stack-item'>
                      {item}
                    </li>
                    ))
                  }
                  </span>
                  <div className="project-link">
                  <a href={project.githubrepo} target='_blank' rel='noreferree' aria-label='source code'><FaGithub  size={25}/></a> 
                  <a href={project.livedemo} target='_blank' rel='noreferree' aria-label='live preview'><FaExternalLinkAlt size={22} /></a> 
                  </div>
                  
                </div>
            })
           }
        </div>
    </div>
  )
}

export default Projects