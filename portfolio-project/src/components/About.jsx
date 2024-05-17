import React from 'react'
import myImage from "../assets/WhatsApp Image 2024-03-22 at 18.46.55_4a2b58a5.jpg"

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='my-20 text-center text-4xl'>
        About <span className='text-neutral-500' >Me</span>
        </h1>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center '>
                    <img src={myImage} alt="" className='w-80 h-96 w-fit rounded-2xl shadow-fuchsia-950 shadow-xl ' />
                </div>
            </div>
            <div className='w-full lg:w-1/2'>
                <div className='flex justify-center lh:justify-start'>
                    <p className='my-2 max-w-xl py-6'>I am passionate
                    about exploring the realms of machine learning and mastering the MERN stack.
                    With strong problem-solving abilities, I thrive in collaborative team environments
                    and possess effective leadership skills. I excel as a presenter and am fluent in both
                        English and Sinhalese, showcasing my strong interpersonal communication skills.
                        Let's connect and explore opportunities to innovate together!</p>
                </div>
            </div>
        </div>
    </div>
    
    
  )
}

export default About