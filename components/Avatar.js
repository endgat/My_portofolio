import Image from "next/image";

const Avatar = () => {
  return (
    <div className='xl:flex xl:max-w-none'>
      <div className="relative" style={{ filter: 'contrast(1.2)' }}>
        <Image 
          src='/mypic.png'
          width={400} 
          height={678} 
          alt='Avatar image'
          className="translate-z-0 w w-full h-full"
        />
      </div>
    </div>
  );
};

export default Avatar;