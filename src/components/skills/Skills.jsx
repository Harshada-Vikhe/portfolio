import React from 'react'
import { skills } from '../../util/skills'
import './Skills.css'

const Skills = () => {
    // if(!Skills.length) return null

  return (
    <section className='section skills' id='skills'>
       <h2 className='section-title'>Skills</h2>
       <ul className='skills_list'>
        {
            skills.map((skill,index)=>(
                <li key={index} className='skills_list-item btn btn-plain'>
                    {skill}
                </li>
            ))
        }
       </ul>
    </section>
  )
}

export default Skills