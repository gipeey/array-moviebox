import { Modal } from "@/components";
import AddForms from "../../components/AddForms";

const FormsEditModal = async ({ params }: { params: { uuid: string } }) => {
  const data = await getData(params.uuid);

  return (
    <Modal>
      <header className="py-4 px-6 text-lg font-bold flex flex-col gap-1">
        Edit Movie
      </header>
      <hr />
      <div className="px-6 py-2">
        <AddForms data={data} />
      </div>
    </Modal>
  );
};

export default FormsEditModal;

async function getData(uuid: string) {
  const res = await fetch(`https://crudapi.co.uk/api/v1/movie/${uuid}`, {
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

  // revalidateTag("AllMovies");

  const data = await res.json();

  return data;
}
