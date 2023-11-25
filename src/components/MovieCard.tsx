import { HeartIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const MovieCard = ({ data }: { data: MovieCardProps }) => {
  const {
    title,
    type,
    releaseDate,
    image,
    genres,
    countries,
    imDbRating,
    rottenTomatoesRating,
    _uuid,
  } = data;

  const year = moment(releaseDate).format("YYYY");

  return (
    <div className="flex flex-col gap-3 max-w-[300px]">
      <div className="relative w-full h-auto aspect-[27/40] object-cover p-4">
        <Link
          // ! Change href
          href="#"
          // ! Delete this property
          scroll={false}
        >
          <Image src={image} fill alt={title} className="object-cover" />
        </Link>

        <div className="flex justify-between items-start">
          <Link
            href="#"
            className="px-2 py-[3px] uppercase rounded-full bg-[rgba(243,_244,_246,_0.50)] backdrop-blur-sm text-gray-900 text-xs font-bold"
          >
            {type}
          </Link>

          <div className="flex flex-col gap-2">
            <Link
              href={`/edit/${_uuid}`}
              className="w-[30px] h-[30px] rounded-full bg-[rgba(243,_244,_246,_0.50)] backdrop-blur-sm flex items-center justify-center group"
            >
              <PencilIcon className="w-5 h-5 text-gray-300 group-hover:text-white group-hover:scale-110 group-active:text-rose-700 transition-all duration-300" />
            </Link>

            <Link
              href={`/delete/${_uuid}`}
              className="w-[30px] h-[30px] rounded-full bg-[rgba(243,_244,_246,_0.50)] backdrop-blur-sm flex items-center justify-center group"
            >
              <TrashIcon className="w-5 h-5 text-gray-300 group-hover:text-white group-hover:scale-110 group-active:text-rose-700 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>

      <p className="text-gray-400 font-bold text-xs">
        {countries}, {year}
      </p>

      <Link href="#" scroll={false} className="w-full">
        <h3 className="text-gray-900 text-lg font-bold">{title}</h3>
      </Link>

      <div className="flex justify-between">
        <div className="flex gap-[10px] items-center">
          <Image
            src="/assets/imdb-logo.png"
            width={35}
            height={17}
            alt="imdb"
          />
          <span className="text-xs leading-none">{imDbRating} / 10</span>
        </div>
        <div className="flex gap-[10px] items-center">
          <Image
            src="/assets/rotten-tomatoes-logo.png"
            width={16}
            height={17}
            alt="imdb"
          />
          <span className="text-xs leading-none">{rottenTomatoesRating}%</span>
        </div>
      </div>

      <p className="text-gray-400 font-bold text-xs">{genres}</p>
    </div>
  );
};

export default MovieCard;
