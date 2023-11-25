import Image from "next/image";

import { PlayCircleIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components";

const Hero = () => {
  return (
    <section className="relative h-[600px] w-full z-0 flex items-center">
      <Image
        src="/assets/hero-1.jpeg"
        fill
        alt="hero-1"
        className="object-cover -z-20"
        draggable="false"
      />
      <div className="absolute inset-0 -z-10 bg-black/50" />

      <div className="container w-full mx-auto">
        <div className="text-white flex flex-col gap-4">
          <h3 className="text-5xl max-w-[404px] leading-[56px] font-bold">
            John Wick 3 : Parabellum
          </h3>

          <div className="flex items-center gap-[34px]">
            <div className="flex gap-[10px] items-center">
              <Image
                src="/assets/imdb-logo.png"
                width={35}
                height={17}
                alt="imdb"
              />
              <span className="text-xs leading-none">86.0 / 100</span>
            </div>
            <div className="flex gap-[10px] items-center">
              <Image
                src="/assets/rotten-tomatoes-logo.png"
                width={16}
                height={17}
                alt="imdb"
              />
              <span className="text-xs leading-none">97%</span>
            </div>
          </div>

          <p className="w-[302px] text-sm font-medium leading-[18px]">
            John Wick is on the run after killing a member of the international
            assassins&apos; guild, and with a $14 million price tag on his head,
            he is the target of hit men and women everywhere.
          </p>

          <Button
            text="Watch Trailer"
            icon={<PlayCircleIcon className="w-5 h-5" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
