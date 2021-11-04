import Image from 'next/image'
import { useState } from 'react'

export default function Home() {

  const [inputError, setInputError] = useState(false)
  const [userInput, setUserInput] = useState('')

  const handleUserInput = (e) => {
    setUserInput(e.target.value)
  }

  const handleInputError = () => {
    setInputError(!userInput.endsWith('@gmail.com') || !userInput)
  }





  return (
    <div className='grid grid-rows-[auto,1fr] gap-20 mt-10 '>

      <div className='grid grid-rows-[1fr,auto] gap-12 '>
        <div className='text-center grid gap-4 font-primary'>
          <h1 className='text-3xl text-gray lg:text-3xl'>We are launching <span className='text-black font-semibold'>soon!</span></h1>
          <p className='text-xl'>Subscribe and get notified</p>
        </div>

        <div className='grid grid-flow-row gap-8 px-4 items-center lg:grid-cols-[1fr,auto] lg:gap-2'>
          <div className='relative'>
            <input
              placeholder='Your email address...'
              value={userInput}
              onChange={handleUserInput}
              className={`w-full py-5 border-blue border-0 rounded-full pl-10 placeholder-lightGray lg:py-3 ${inputError ? 'border-red-500' : 'border-blue'} `} />

            <div className={`pl-10 absolute bottom-[-20px] ${inputError ? 'block' : 'hidden'}`}>
              <h1 className='text-red-300 font-primary text-xs'><i> Please provide a valid email address </i></h1>
            </div>
          </div>

          <button
            onClick={handleInputError}
            className='bg-blue w-full py-5 rounded-full drop-shadow-button lg:w-full lg:px-16 lg:py-3'><span className='text-white font-primary text-xl lg:text-lg'>Notify Me</span></button>
        </div>
      </div>

      <div className='relative h-height'>
        <Image
          src='/illustration-dashboard.png'
          layout='fill'
          objectFit='contain'
        />
      </div>

    </div>
  )
}
