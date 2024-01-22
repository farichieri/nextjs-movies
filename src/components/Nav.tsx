import Link from 'next/link';

interface Props {}

const Nav: React.FC<Props> = () => {
  return (
    <nav className='fixed z-50 top-1 px-4 justify-center flex items-center w-full h-[var(--nav-height)]'>
      <div className='rounded-3xl backdrop-blur-sm bg-primary/50 shadow-md justify-center max-w-2xl w-full h-[var(--nav-height)] flex items-center px-4'>
        <Link href='/' className='font-semibold'>
          Diamond Rock Movies 🎥
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
