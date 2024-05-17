import React from 'react'
import { PROJECTS } from '../constants'

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>Education</h1>
        <div>
            {PROJECTS.map((projects, index) =>  (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                    <img src={projects.image} width={300} height={300} alt={projects.title} className='mb-6 rounded' />
                </div>
                <div className='w-full max-wxl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>
                        {projects.title}
                        
                        <div className='mb-4 text-neutral-400'>
                            {projects.description}
                        </div>
                    </h6>
                    {projects.technologies.map((tech, index) => (
                      <span
                      key={index} className='mr- rounded bg-neutral-900 px-2 py-1 textsm font-medium text-purple-700'>
                        {tech}
                      </span>
                    ))}
                    <p className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400'></p>
                </div>
            </div>

        ))}

        </div>
    </div>
  )
}

export default Projects