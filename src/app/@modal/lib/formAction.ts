"use server";

export async function createMovie(prevState: any, formData: FormData) {
  const parse = {
    title: formData.get("title"),
    id: formData.get("id"),
    type: formData.get("type"),
    image: formData.get("image"),
    genres: formData.get("genres"),
    countries: formData.get("countries"),
    releaseDate: formData.get("releaseDate"),
    imDbRating: formData.get("imDbRating"),
    imDbRatingVotes: formData.get("imDbRatingVotes"),
    rottenTomatoesRating: formData.get("rottenTomatoesRating"),
  };

  if (parse === null) {
    return { success: false, message: "unkown error" };
  }

  // send post to api
  const res = await fetch("https://crudapi.co.uk/api/v1/movie", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.API_TOKEN,
    },
    body: JSON.stringify([parse]),
    next: { tags: ["AllMovies"] },
  });

  if (!res.ok) {
    console.log(res.status);
    return { success: false, message: "error post data" };
  }

  const data = await res.json();

  // ada bug seperti di link berikut: https://github.com/vercel/next.js/issues/58772

  // revalidateTag("AllMovies");
  // revalidatePath("/");

  // redirect("/");

  return { success: true, message: "Success" };
}

export async function editMovie(prevState: any, formData: FormData) {
  const parse = {
    title: formData.get("title"),
    id: formData.get("id"),
    type: formData.get("type"),
    image: formData.get("image"),
    genres: formData.get("genres"),
    countries: formData.get("countries"),
    releaseDate: formData.get("releaseDate"),
    imDbRating: formData.get("imDbRating"),
    imDbRatingVotes: formData.get("imDbRatingVotes"),
    rottenTomatoesRating: formData.get("rottenTomatoesRating"),
  };

  const uuid = formData.get("uuid");

  if (parse === null) {
    return { success: false, message: "unkown error" };
  }

  // // send post to api
  const res = await fetch(`https://crudapi.co.uk/api/v1/movie/${uuid}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.API_TOKEN,
    },
    body: JSON.stringify(parse),
    next: { tags: ["AllMovies"] },
  });

  if (!res.ok) {
    console.log(res.status);
    return { success: false, message: "error post data" };
  }

  const data = await res.json();

  // ada bug seperti di link berikut: https://github.com/vercel/next.js/issues/58772

  // revalidateTag("AllMovies");
  // revalidatePath("/");

  // redirect("/");

  return { success: true, message: "Success" };
}

export async function deleteMovie(prevState: any, formData: FormData) {
  const uuid = formData.get("uuid");

  // // send post to api
  const res = await fetch(`https://crudapi.co.uk/api/v1/movie/${uuid}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + process.env.API_TOKEN,
    },
    next: { tags: ["AllMovies"] },
  });

  if (!res.ok) {
    console.log(res.status);
    return { success: false, message: "error post data" };
  }

  const data = await res.json();

  // ada bug seperti di link berikut: https://github.com/vercel/next.js/issues/58772

  // revalidateTag("AllMovies");
  // revalidatePath("/");

  // redirect("/");

  return { success: true, message: "Success" };
}
