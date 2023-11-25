import { Hero } from "@/app/components";
import { MovieCard, LinkCustom } from "@/components";

export default async function Home() {
  const movieList = await getData();

  return (
    <main>
      <Hero />

      <div className="main-container">
        <section>
          <div className="flex justify-between mb-11">
            <h2 className="section-title">Featured Movie</h2>

            <LinkCustom text="See more" href="#" />
          </div>

          <div className="grid grid-cols-4 gap-20">
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
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return data;
}
