export interface ICardTvShow {
  id: number;
  name: string;
  backdrop_path: string;
  poster_path: string;
  popularity: number;
  vote_average: number;
  overview: string;
  first_air_date: string;
  origin_country: Array<string>;
  genre_ids: Array<number>;
  original_language: string;
  vote_count: number;
  original_name: string;
}
