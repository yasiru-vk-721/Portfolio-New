import React from 'react'
import ProfilePic from "../assets/profilePhoto.png"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 -mt-10">
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Yasiru Katuwandeniya</h1>
                    <span className='bg-gradient-to-r from-pink-400 via-slate-600 to-purple-700 bg-clip-text text-4xl tracking-tight text-transparent'>
                    Full Stack Developer
                    </span>
                    <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>As an undergraduate software engineering student at IIT, I am passionate
                    about exploring the realms of machine learning and mastering the MERN stack.
                    With strong problem-solving abilities, I thrive in collaborative team environments
                    and possess effective leadership skills. I excel as a presenter and am fluent in both
                        English and Sinhalese, showcasing my strong interpersonal communication skills.
                        Let's connect and explore opportunities to innovate together!
                        </p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 lg:p-8 -mt-4'>
            <div className='flex justify-center'>
                <img src={ProfilePic} alt="" className='h-[520px] w-[440px]' />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Hero