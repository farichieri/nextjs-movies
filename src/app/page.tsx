import { SearchBar } from '@/features/search';
import { MoviesList } from '@/features/movies';

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center pb-10 px-4 pt-[calc(var(--nav-height)+1rem)]'>
      <SearchBar />
      <MoviesList />
    </main>
  );
}
