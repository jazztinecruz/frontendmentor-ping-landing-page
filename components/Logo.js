import Image from 'next/image'

const Logo = () => {
  return (
    <div className='relative w-20 h-6 grid m-auto'>
      <Image
        src='/logo.svg'
        layout = 'fill'
      />
    </div>
  );
}
export default Logo;