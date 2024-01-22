'use server';

export async function getMovies(query: string, pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&page=${pageParam}&api_key=${process.env.API_KEY}`
  );
  const data = await response.json();
  return data;
}
