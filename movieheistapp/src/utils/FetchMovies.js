import axios from 'axios';
export const key = "b93a64480573ce5248c28b200d79d029"; //API KEY

export const RootURL = "https://api.themoviedb.org/3";

// MOVIES
const year = 2018;
const APIendpoints = {
  popular: `${RootURL}/movie/popular?api_key=${key}&include_adult=false`,
  topRated: `${RootURL}/movie/top_rated?api_key=${key}&include_adult=false&language=en-US&page=1`,
  trending: `${RootURL}/movie/popular?api_key=${key}&language=en-US&page=2&include_adult=false`,
  comedy: `${RootURL}/search/movie?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
  upcoming: `${RootURL}/movie/upcoming?api_key=${key}&include_adult=false`,
  action: `${RootURL}/discover/movie?api_key=${key}&language=en-US&with_genres=18&include_adult=false`,
  horror: `${RootURL}/discover/movie?api_key=${key}&language=en-US&with_genres=27&include_adult=false`,
  romance: `${RootURL}/discover/movie?api_key=${key}&language=en-US&with_genres=10749&include_adult=false`,
  documentaries: `${RootURL}/discover/movie?api_key=${key}&language=en-US&with_genres=99&include_adult=false`,

  // TV SHOWS

  TVpopular: `${RootURL}/tv/popular?api_key=${key}&language=en-US&page=1&include_adult=false`,
  TVtopRated: `${RootURL}/tv/top_rated?api_key=${key}&language=en-US&page=3&include_adult=false`,
  TVtrending: `${RootURL}/trending/tv/week?api_key=${key}&include_adult=false`, // Trending TV shows
  TVcomedy: `${RootURL}/search/tv?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
  TVupcoming: `${RootURL}/tv/on_the_air?api_key=${key}&language=en-US&page=2&include_adult=false`,
  TVaction: `${RootURL}/discover/tv?api_key=${key}&language=en-US&with_genres=18&include_adult=false`, // Action TV shows
  TVhorror: `${RootURL}/discover/tv?api_key=${key}&language=en-US&with_genres=18&include_adult=false`, // Horror TV shows
  TVromance: `${RootURL}/discover/tv?api_key=${key}&language=en-US&with_genres=10749&include_adult=false`, // Romance TV shows
  TVdocumentaries: `${RootURL}/discover/tv?api_key=${key}&language=en-US&with_genres=99&include_adult=false`, // Documentary TV shows
};

// export const TVshowsEndpoints = {
//   popular: `${RootURL}/tv/popular?api_key=${key}&language=en-US&page=1`,
//   topRated: `${RootURL}/tv/top_rated?api_key=${key}&language=en-US&page=1`,
//   trending: `${RootURL}/trending/tv/week?api_key=${key}`, // Trending TV shows
//   comedy: `${RootURL}/search/tv?api_key=${key}&language=en-US&query=comedy&page=1&include_adult=false`,
//   upcoming: `${RootURL}/tv/on_the_air?api_key=${key}&language=en-US&page=1`,
//   action: `${RootURL}/discover/tv?api_key=${key}&language=en-US&with_genres=18`, // Action TV shows
//   horror: `${RootURL}/discover/tv?api_key=${key}&language=en-US&with_genres=27`, // Horror TV shows
//   romance: `${RootURL}/discover/tv?api_key=${key}&language=en-US&with_genres=10749`, // Romance TV shows
//   documentaries: `${RootURL}/discover/tv?api_key=${key}&language=en-US&with_genres=99`, // Documentary TV shows
// };

export function backdrops(file, size) {
  return `https://image.tmdb.org/t/p/${size}/${file}`; //for posters of movies
}

export default APIendpoints;

