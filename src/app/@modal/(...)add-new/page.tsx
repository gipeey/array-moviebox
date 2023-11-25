import { Modal } from "@/components";
import AddForms from "../components/AddForms";

const FormsModal = () => {
  return (
    <Modal>
      <header className="py-4 px-6 text-lg font-bold flex flex-col gap-1">
        Add New Movie
      </header>
      <hr />
      <div className="px-6 py-2">
        <AddForms />
      </div>
    </Modal>
  );
};

export default FormsModal;
