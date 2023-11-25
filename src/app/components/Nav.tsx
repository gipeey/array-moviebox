import Image from "next/image";
import { Bars2Icon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Nav = () => {
  return (
    <header className="h-[80px] w-full absolute z-10">
      <nav className="max-w-screen-xl h-full mx-auto grid grid-cols-3 items-center content-center">
        <Link href="/" className="flex items-center gap-6 w-fit">
          <Image
            src="/assets/logo.png"
            width={50}
            height={50}
            alt="moviebox-logo"
          />
          <h1 className="text-2xl leading-none font-bold text-white">
            MovieBox
          </h1>
        </Link>

        <div className="w-[525px] justify-self-center relative">
          <input
            type="text"
            className="w-full bg-transparent px-[10px] pe-[52px] py-[6px] border-2 rounded-md text-white placeholder:text-white"
            placeholder="What do you want to watch?"
          />

          <button className="absolute top-1/2 -translate-y-1/2 p-2 right-[10px]">
            <MagnifyingGlassIcon className="w-4 h-4 text-white" />
          </button>
        </div>

        <div className="justify-self-end">
          <Link
            href={"/add-new"}
            className="flex gap-[27px] text-white font-bold items-center"
          >
            Add New Movie
            <div className="bg-rose-700 rounded-full w-9 h-9 flex items-center justify-center">
              <Bars2Icon className="w-6 h-6" />
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
