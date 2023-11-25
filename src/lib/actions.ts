import { revalidatePath } from "next/cache";

import axios from "axios";

export const deleteMovie = async (uuid: string) => {
  axios
    .delete(`https://crudapi.co.uk/api/v1/movie/${uuid}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + process.env.API_TOKEN,
      },
    })
    .then((response) => {
      console.log(`Deleted post with ID ${uuid}`);
    })
    .catch((error) => {
      console.error(error);
    });

  // revalidatePath("/");
};
