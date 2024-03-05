import React from 'react'
import { IconPhile, Maker } from '../../Icons'
import MenImage from '../../assets/image/image-hero-desktop.png'
import MobileMenImage from '../../assets/image/image-hero-mobile.png'
import { Button } from '../button'

export const MainSection = () => {
  return (
    <section className='flex flex-col xl:flex-row xl:h-screen mt-6 h-screen justify-between'>
       <div className="relative text-center order-2 xl:order-1 xl:text-left xl:w-2/4 xl:mt-60 mt-12">
       <h1 className='text-3xl xl:text-8xl font-black xl:whitespace-pre-line mt-6'>{`Make\n remote work`}</h1>
        <p className=' text-medium-gray text-lg my-12 whitespace-pre-line'>
          {`Lorem ipsum dolor sit amet consectetur adipisicing elit.\nPariatur, eum rerum obca
          ecati iure esse laboriosam ea? Esse, aliquid fuga velit recusandae eius 
          ut nihil expedita in laborum nemo cumque veritatis.`}
        </p>
        <Button isFilled={true}>Learn More</Button>
        <div className='flex justify-around xl:absolute bottom-2 mt-20 w-full'>
          <IconPhile/>
          <Maker />
          <IconPhile/>
          <Maker />
        </div>
        </div> 

        <div className='hidden xl:flex xl:order-2 w-2/4 mt-20 '>
          <img src={MenImage} alt="" />
        </div>
        <div className='flex w-full mt-20 justify-center mb-8 order-1 xl:hidden'>
          <img src={MobileMenImage} alt="" />
        </div>
    </section>
  )
}
