import { Button, FormInput, FormSelect, Modal } from "@/components";
import axios from "axios";
import { revalidatePath } from "next/cache";

const FormsEditModal = async ({ params }: { params: { uuid: string } }) => {
  const oldData: MovieCardProps = await getData(params.uuid);

  const postData = async (formData: FormData) => {
    "use server";

    const data = {
      title: formData.get("title"),
      id: formData.get("id"),
      type: formData.get("type"),
      releaseDate: formData.get("releaseDate"),
      image: formData.get("image"),
      genres: formData.get("genres"),
      countries: formData.get("countries"),
      imDbRating: formData.get("imDbRating"),
      imDbRatingVotes: formData.get("imDbRatingVotes"),
      rottenTomatoesRating: formData.get("rottenTomatoesRating"),
    };

    const res = await axios({
      method: "put",
      url: `https://crudapi.co.uk/api/v1/movie/${params.uuid}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.API_TOKEN,
      },
      data: data,
    });

    console.log(res);

    revalidatePath("/");
    revalidatePath("/edit/[uuid]");
  };

  return (
    <Modal>
      <header className="py-4 px-6 text-lg font-bold flex flex-col gap-1">
        Edit Movie
      </header>
      <hr />
      <div className="px-6 py-2">
        <form action={postData} method="post">
          <div className="grid grid-cols-2 gap-x-8">
            <FormInput
              label="Movie Title"
              id="title"
              name="title"
              defaultValue={oldData.title}
              required
            />
            <FormInput
              label="ID"
              id="id"
              name="id"
              defaultValue={oldData.id}
              required
            />

            <FormSelect
              label="Type"
              id="type"
              name="type"
              value={oldData.type}
              required
            />
            <FormInput
              type="date"
              label="Release Date"
              name="releaseDate"
              id="releaseDate"
              required
              defaultValue={oldData.releaseDate}
            />

            <FormInput
              label="Image URL"
              id="image"
              name="image"
              required
              defaultValue={oldData.image}
            />
            <div />

            <FormInput
              label="Genres"
              id="genres"
              name="genres"
              required
              defaultValue={oldData.genres}
            />
            <FormInput
              label="Countries"
              id="countries"
              name="countries"
              required
              defaultValue={oldData.countries}
            />

            <FormInput
              type="number"
              label="IMDb Rating"
              id="imDbRating"
              name="imDbRating"
              required
              defaultValue={oldData.imDbRating}
            />
            <FormInput
              type="number"
              label="IMDb Rating Votes"
              id="imDbRatingVotes"
              name="imDbRatingVotes"
              defaultValue={oldData.imDbRatingVotes}
            />

            <FormInput
              type="number"
              label="Rotten Tomatoes Rating"
              id="rottenTomatoesRating"
              name="rottenTomatoesRating"
              defaultValue={oldData.rottenTomatoesRating}
            />
          </div>

          <div className="py-4 flex gap-4">
            <Button type="submit" text="Edit Movie" className="text-white" />
            <Button
              type="submit"
              text="Delete Movie"
              className="text-gray-400 bg-white"
              onClick={() => console.log("click")}
            />
          </div>

          <p aria-live="polite" className="sr-only" role="status">
            {/* {state?.message} asd */}
          </p>
        </form>
      </div>
    </Modal>
  );
};

export default FormsEditModal;

export async function getData(uuid: string) {
  const res = await fetch(`https://crudapi.co.uk/api/v1/movie/${uuid}`, {
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
