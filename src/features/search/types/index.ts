import { Movie } from '@/features/movies';

export interface SearchResult {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
