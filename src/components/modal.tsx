import { ReactNode } from "react";
import { IoMdCloseCircle } from "react-icons/io";

export const Modal = ({
  children,
  isModalOpen,
  closeModal,
}: {
  children: ReactNode;
  isModalOpen: boolean;
  closeModal: () => void;
}) => {
  return isModalOpen ? (
    <div className="fixed inset-0 p-1 flex items-center justify-center z-10">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative h-fit w-fit rounded shadow-lg flex items-center justify-center z-20">
        <IoMdCloseCircle
          className="text-[#1f9ede] text-lg absolute top-0 right-0 cursor-pointer"
          onClick={closeModal}
        />
        {children}
      </div>
    </div>
  ) : null;
};
