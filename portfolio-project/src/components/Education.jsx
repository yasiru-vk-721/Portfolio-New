import React from 'react'
import { EXPERIENCES } from '../constants'

const Education = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>Education</h1>
        <div>
            {EXPERIENCES.map((experience, index) =>  (
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/4'>
                    <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                </div>
                <div className='w-full max-wxl lg:w-3/4'>
                    <h6 className='mb-2 font-semibold'>
                        {experience.degree} - {" "}
                        <span className='text-sm text-purple-100'>
                            {experience.company}
                        </span>
                    </h6>
                    <p className='mb-4 text-neutral-400'>
                        {experience.description}
                    </p>
                    <p className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400'>{experience.technologies}</p>
                </div>
            </div>

        ))}

        </div>
    </div>
  )
}

export default Education