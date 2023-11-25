"use client";

import { Button, FormInput, FormSelect } from "@/components";
import React, { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { createMovie, editMovie } from "../lib/formAction";
import { useRouter } from "next/navigation";

const initialState: { success: boolean | null; message: string | null } = {
  success: null,
  message: null,
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      text={pending ? "loading..." : "Add Movie"}
      disabled={pending}
      className="text-white w-full md:w-fit justify-center"
    />
  );
};

const AddForms = ({ data }: { data?: MovieCardProps }) => {
  const router = useRouter();
  const [state, formAction] = useFormState(
    data === undefined ? createMovie : editMovie,
    initialState
  );

  useEffect(() => {
    if (state?.success === true) {
      router.back();
    }
  }, [state.success, router]);

  return (
    <form action={formAction} method="post">
      <div className="grid md:grid-cols-2 gap-x-8 pb-8">
        <input
          type="text"
          name="uuid"
          id="uuid"
          className="sr-only"
          value={data?._uuid}
        />
        <FormInput
          label="Movie Title"
          id="title"
          name="title"
          defaultValue={data?.title}
          required
        />
        <FormInput
          label="ID"
          id="id"
          name="id"
          defaultValue={data?.id}
          required
        />

        <FormSelect label="Type" id="type" name="type" required />
        <FormInput
          type="date"
          label="Release Date"
          name="releaseDate"
          id="releaseDate"
          defaultValue={data?.releaseDate}
          required
        />

        <FormInput
          label="Image URL"
          id="image"
          name="image"
          defaultValue={data?.image}
          required
        />
        <div />

        <FormInput
          label="Genres"
          id="genres"
          name="genres"
          defaultValue={data?.genres}
          required
        />
        <FormInput
          label="Countries"
          id="countries"
          name="countries"
          defaultValue={data?.countries}
          required
        />

        <FormInput
          type="number"
          label="IMDb Rating"
          id="imDbRating"
          name="imDbRating"
          defaultValue={data?.imDbRating}
          required
        />
        <FormInput
          type="number"
          label="IMDb Rating Votes"
          id="imDbRatingVotes"
          name="imDbRatingVotes"
          defaultValue={data?.imDbRatingVotes}
        />

        <FormInput
          type="number"
          label="Rotten Tomatoes Rating"
          id="rottenTomatoesRating"
          name="rottenTomatoesRating"
          defaultValue={data?.rottenTomatoesRating}
        />
      </div>

      <SubmitButton />

      <p aria-live="polite" role="status" className="sr-only">
        status {state?.message}
      </p>
    </form>
  );
};

export default AddForms;
