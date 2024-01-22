import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';

interface SearchState {
  search: string;
  setSearch: (search: string) => void;
  movies: any[];
  setMovies: (movies: any[]) => void;
}

const useSearchStore = create<SearchState>()(
  devtools(
    persist(
      (set) => ({
        search: '',
        setSearch: (search) => set({ search }),
        movies: [],
        setMovies: (movies) => set({ movies }),
      }),
      {
        name: 'search-storage',
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export { useSearchStore };
