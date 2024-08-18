"use client";

import { squares } from "@/constants/square";
import { IoMdClose } from "react-icons/io";
import { Modal } from "@/components/modal";
import { useState } from "react";

const PlayerWonModal = ({
  closePlayerWonModal,
}: {
  closePlayerWonModal: () => void;
}) => {
  return (
    <div className="h-72 w-[550px] bg-white flex flex-col gap-4 p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <h1>Game Over</h1>
        <div
          className="p-1 flex items-center justify-center rounded cursor-pointer hover:bg-slate-300"
          onClick={closePlayerWonModal}
        >
          <IoMdClose className="text-2xl" />
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
        Player 1 has won
      </div>
    </div>
  );
};

const usePlayerWonModal = () => {
  const [isPlayerWonModalOpen, setPlayerWonModalOpen] = useState(false);

  const openPlayerWonModal = () => setPlayerWonModalOpen(true);
  const closePlayerWonModal = () => setPlayerWonModalOpen(false);

  return {
    isPlayerWonModalOpen,
    openPlayerWonModal,
    closePlayerWonModal,
    PlayerWonModalComponent: (
      <Modal
        isModalOpen={isPlayerWonModalOpen}
        closeModal={closePlayerWonModal}
      >
        <PlayerWonModal closePlayerWonModal={closePlayerWonModal} />
      </Modal>
    ),
  };
};

export const Board = () => {
  const { PlayerWonModalComponent, isPlayerWonModalOpen, openPlayerWonModal } =
    usePlayerWonModal();

  return (
    <div className="grid grid-cols-3 h-full gap-4">
      {squares.map((square) => (
        <div
          key={square.id}
          className="bg-[#ff033e] rounded-md dark:bg-[#C9C9C7] flex items-center justify-center cursor-pointer"
          onClick={openPlayerWonModal}
        ></div>
      ))}
      {isPlayerWonModalOpen && PlayerWonModalComponent}
    </div>
  );
};
