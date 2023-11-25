import { Hero } from "@/app/components";
import { MovieCard, LinkCustom } from "@/components";
import { revalidateTag } from "next/cache";

export default async function Home() {
  const movieList = await getData();

  return (
    <main>
      <Hero />

      <div className="main-container">
        <section>
          <div className="flex justify-between lg:mb-11 md:mb-8 mb-6">
            <h2 className="section-title">Featured Movie</h2>

            <LinkCustom text="See more" href="#" />
          </div>

          <div className="grid lg:grid-cols-4 lg:gap-x-20 lg:gap-y-10 md:grid-cols-3 md:gap-x-8 md:gap-y-6 grid-cols-2 gap-x-4 gap-y-6">
            {movieList.items.map((data: MovieCardProps) => (
              <MovieCard data={data} key={data.id} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

async function getData() {
  const res = await fetch("https://crudapi.co.uk/api/v1/movie", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.API_TOKEN,
    },
    next: {
      tags: ["AllMovies"],
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  revalidateTag("AllMovies");

  const data = await res.json();

  return data;
}
