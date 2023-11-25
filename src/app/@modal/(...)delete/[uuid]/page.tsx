"use client";

import { Button, Modal } from "@/components";
import { deleteMovie } from "@/lib/actions";

const page = ({ params }: { params: { uuid: string } }) => {
  return (
    <Modal>
      <header className="py-4 px-6 text-lg font-bold flex flex-col gap-1">
        Delete Movie?
      </header>
      <hr />
      <div className="px-6 py-2 flex flex-col gap-12">
        <p>Are you sure want to delete this movie?</p>

        <Button
          text="Delete movie"
          className="text-white"
          onClick={() => deleteMovie(params.uuid)}
        />
      </div>
    </Modal>
  );
};

export default page;
