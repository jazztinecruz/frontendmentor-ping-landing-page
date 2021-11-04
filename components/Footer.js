import Image from 'next/image'

const Footer = () => {
  return (
    <div className='grid grid-flow-row gap-4 mt-12'>

      <div className='flex items-center justify-center gap-2'>
        <div className='relative w-10 h-10 border-2 border-lightBlue rounded-full flex justify-center items-center p-2'>
          <Image 
            src='/facebook (1).png'
            width='25px'
            height='25px'
          />
        </div>

        <div className='relative w-10 h-10 border-2 border-lightBlue rounded-full flex justify-center items-center p-2'>
          <Image
            src='/twitter (2).png'
            width='25px'
            height='25px'
          />
        </div>

        <div className='relative w-10 h-10 border-2 border-lightBlue rounded-full flex justify-center items-center p-2'>
          <Image
            src='/instagram (1).png'
            width='25px'
            height='25px'
          />
        </div>
      </div>

      <div className='grid glightBlue text-center text-sm font-primary text-gray font-medium '>
        <p>© Copyright Ping. All rights reserved.</p>
        <p className='text-lightGray text-sm'>Challenge by Frontend Mentor. Coded by <span className='font-semibold'>Jazztine Cruz.</span></p>
      </div>
    </div>
  );
}
export default Footer;