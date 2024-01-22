import Image from 'next/image';

import { Movie } from '..';

interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    <div className='flex duration-300 hover:bg-slate-950/50 flex-col hover:brightness-100 brightness-75 group hover:shadow-lg cursor-pointer max-w-[342px] rounded-3xl overflow-auto pb-10'>
      <div className='h-[513px] overflow-hidden'>
        <Image
          src={`https://image.tmdb.org/t/p/w342${
            movie.poster_path || movie.backdrop_path
          }`}
          alt={movie.title}
          width={342}
          height={513}
          className='w-full object-cover group-hover:scale-105 duration-300 h-full overflow-auto'
        />
      </div>
      <div className='p-2 text-left'>
        <h1 className='tracking-wider mb-2 font-bold'>{movie.title}</h1>
      </div>
    </div>
  );
};

export default MovieCard;
