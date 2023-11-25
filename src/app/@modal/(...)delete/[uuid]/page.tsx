"use client";

import { Button, Modal } from "@/components";
import { deleteMovie } from "../../lib/formAction";
import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      text={pending ? "loading..." : "Delete Movie"}
      className="text-white"
      disabled={pending}
    />
  );
};

const initialState: { success: boolean | null; message: string | null } = {
  success: null,
  message: null,
};

const DeleteMovie = ({ params }: { params: { uuid: string } }) => {
  const router = useRouter();
  const [state, formAction] = useFormState(deleteMovie, initialState);

  useEffect(() => {
    if (state?.success === true) {
      router.back();
    }
  }, [state.success, router]);

  return (
    <Modal>
      <header className="py-4 px-6 text-lg font-bold flex flex-col gap-1">
        Delete Movie?
      </header>
      <hr />
      <div className="px-6 py-2 flex flex-col gap-12">
        <p>Are you sure want to delete this movie?</p>

        <form action={formAction}>
          <input
            type="text"
            name="uuid"
            id="uuid"
            className="sr-only"
            value={params.uuid}
          />

          <SubmitButton />
        </form>
      </div>
    </Modal>
  );
};

export default DeleteMovie;
