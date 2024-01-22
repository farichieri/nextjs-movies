'use server';

export async function getMovies(query: string, pageParam = 1) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&page=${pageParam}&api_key=4b142ef84ffd374c14f1b9ce53674871`
  );
  const data = await response.json();
  return data;
}
