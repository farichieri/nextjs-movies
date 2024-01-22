'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import InfiniteScroll from 'react-infinite-scroll-component';

import { getMovies } from '@/features/search';
import { MovieCard } from '.';
import { type Movie } from '..';
import { useSearchStore } from '@/store';

interface Props {}

const MoviesList: React.FC<Props> = () => {
  const searchStore = useSearchStore((state: any) => state);
  const { movies, search } = searchStore;

  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
    queryKey: [movies, search],
    queryFn: ({ pageParam = 1 }) => getMovies(search, pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage) {
        if (lastPage.page < lastPage.total_pages) return lastPage.page + 1;
      }
    },
    initialPageParam: 1,
    initialData: () => {
      const data = movies;
      if (data) {
        return {
          pageParams: [undefined],
          pages: [data],
        };
      }
    },
  });

  const moviesArr =
    data?.pages.reduce((acc, page) => [...acc, ...page.results], []) || [];

  return (
    <div className='pt-4'>
      {isLoading && <div className='font-bold text-3xl'>Loading...</div>}
      {moviesArr?.length > 0 ? (
        <InfiniteScroll
          dataLength={moviesArr?.length}
          next={fetchNextPage}
          hasMore={hasNextPage}
          loader={<h4 className='font-semibold w-full'>Loading...</h4>}
          endMessage={
            <p className='text-center'>
              <b>Yay! You have seen it all</b>
            </p>
          }
          className='w-full text-center'
        >
          <div className='flex max-w-7xl flex-col items-center gap-4'>
            <p className=''>
              Results for your query:{' '}
              <span className='text-destructive font-semibold'>{search}</span>
            </p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 sm:gap-x-4 gap-y-10 pb-10'>
              {moviesArr?.map((movie: Movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </InfiniteScroll>
      ) : (
        <div className='font-bold text-3xl pt-5'>No results for your query</div>
      )}
    </div>
  );
};

export default MoviesList;
