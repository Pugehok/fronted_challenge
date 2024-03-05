import React from 'react'
import { IconPhile, Maker } from '../../Icons'
import MenImage from '../../assets/image/image-hero-desktop.png'
import { Button } from '../button'
export const MainSection = () => {
  return (
    <section className='flex mt-6 h-screen justify-between'>
       <div className="relative w-2/4 text-left mt-12">
        <h1 className='text-3xl xl:text-8xl font-bold mt-60 whitespace-pre-line'>{`Make\n remote work`}</h1>
        <p className=' text-lightgray text-lg my-12 whitespace-pre-line'>
          {`Lorem ipsum dolor sit amet consectetur adipisicing elit.\nPariatur, eum rerum obca
          ecati iure esse laboriosam ea? Esse, aliquid fuga velit recusandae eius 
          ut nihil expedita in laborum nemo cumque veritatis.`}
        </p>
        <Button isFilled={true}>Learn More</Button>
        <div className='flex justify-around absolute bottom-2 w-full'>
          <IconPhile/>
          <Maker />
          <IconPhile/>
          <Maker />
        </div>
        </div> 

        <div className='flex w-2/4 mt-20'>
          <img src={MenImage} alt="" />
        </div>
    </section>
  )
}
