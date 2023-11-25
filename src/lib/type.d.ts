type Actor = NameList & {
  asCharacter: string;
  image: string;
};

type NameList = {
  id: string;
  name: string;
};

type ObjectList = {
  key: string;
  value: string;
};

type MoviePreview = Pick<MovieProps, "id" | "imDbRating" | "image" | "title">;

interface MovieProps {
  actorList: Actor | Actor[];
  awards: string;
  boxOffice: {
    budget: number;
    cumulativeWorldwideGross: number;
    grossUSA?: number;
    openingWeekendUSA?: number;
  };
  companies: string;
  companyList: NameList | NameList[];
  countries: string;
  countryList: ObjectList | ObjectList[];
  directors: string;
  directorList: NameList | NameList[];
  errorMessage?: string;
  fullCast?: string | null;
  fullTitle: string;
  genres: string;
  genreList: ObjectList | ObjectList[];
  id: string;
  imDbRating: number;
  imDbRatingVotes: number;
  image: string;
  images?: string | null;
  keywords: string;
  keywordList: string[];
  languages: string;
  languageList: ObjectList | ObjectList[];
  metacriticRating?: number | null;
  originalTitle: string;
  plot: string;
  plotLocal: string;
  plotLocalIsRtl: boolean;
  posters?: string | null;
  ratings?: string | null;
  releaseDate: Date;
  runtimeMins: number;
  runtimeStr: string;
  similiars: MoviePreview | MoviePreview[];
  stars: string;
  tagline?: string | null;
  title: string;
  trailer?: string | null;
  tvEpisodeInfo?: string | null;
  tvSeriesInfo?: string | null;
  type: "Movie" | "Tv Series";
  wikipedia?: string | null;
  writers: string;
  writerList: NameList | NameList[];
  year: number;
}

type MovieCardProps = Pick<
  MovieProps,
  | "id"
  | "title"
  | "type"
  | "year"
  | "image"
  | "genres"
  | "countries"
  | "imDbRating"
> & {
  rottenTomatoesRating: number;
  imDbRatingVotes: number;
  releaseDate: date;
  _uuid: string;
};
