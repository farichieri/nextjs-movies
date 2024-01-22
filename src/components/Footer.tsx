import Link from 'next/link';

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <footer className='w-full font-semibold border-slate-800/50 border-t py-24 flex justify-center items-center'>
      <Link
        href={'https://github.com/farichieri/nextjs-movies'}
        target='_blank'
        className='text-secondary opacity-75 hover:opacity-100 duration-300 text-sm'
      >
        By frichieri
      </Link>
    </footer>
  );
};

export default Footer;
