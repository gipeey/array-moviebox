import { Button, FormInput, FormSelect, Modal } from "@/components";
import { revalidatePath } from "next/cache";

const FormsModal = () => {
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

    const res = await fetch("https://crudapi.co.uk/api/v1/movie", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.API_TOKEN,
      },
      body: JSON.stringify([data]),
    });

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    revalidatePath("/");
  };

  return (
    <Modal>
      <header className="py-4 px-6 text-lg font-bold flex flex-col gap-1">
        Add New Movie
      </header>
      <hr />
      <div className="px-6 py-2">
        <form action={postData} method="post">
          <div className="grid grid-cols-2 gap-x-8">
            <FormInput label="Movie Title" id="title" name="title" required />
            <FormInput label="ID" id="id" name="id" required />

            <FormSelect label="Type" id="type" name="type" required />
            <FormInput
              type="date"
              label="Release Date"
              name="releaseDate"
              id="releaseDate"
              required
            />

            <FormInput label="Image URL" id="image" name="image" required />
            <div />

            <FormInput label="Genres" id="genres" name="genres" required />
            <FormInput
              label="Countries"
              id="countries"
              name="countries"
              required
            />

            <FormInput
              type="number"
              label="IMDb Rating"
              id="imDbRating"
              name="imDbRating"
              required
            />
            <FormInput
              type="number"
              label="IMDb Rating Votes"
              id="imDbRatingVotes"
              name="imDbRatingVotes"
            />

            <FormInput
              type="number"
              label="Rotten Tomatoes Rating"
              id="rottenTomatoesRating"
              name="rottenTomatoesRating"
            />
          </div>

          <Button type="submit" text="add" />

          <p aria-live="polite" className="sr-only" role="status">
            {/* {state?.message} asd */}
          </p>
        </form>
      </div>
    </Modal>
  );
};

export default FormsModal;
