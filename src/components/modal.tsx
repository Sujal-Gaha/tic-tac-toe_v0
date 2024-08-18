import { ReactNode } from "react";

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
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={closeModal}
      ></div>
      <div className="relative h-fit w-fit rounded shadow-lg flex items-center justify-center z-20">
        {children}
      </div>
    </div>
  ) : null;
};
