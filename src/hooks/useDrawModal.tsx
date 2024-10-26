"use client";

import { Modal } from "@/components/modal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const DrawModal = ({
  closeDrawModal,
  playAgainFn,
}: {
  closeDrawModal: () => void;
  playAgainFn: () => void;
}) => {
  return (
    <div className="py-16 px-24 rounded-md bg-white flex flex-col items-center justify-center gap-4">
      <span className="text-4xl font-medium">It&apos;s a Draw!</span>
      <div>
        <Button
          variant="outline"
          onClick={() => {
            closeDrawModal();
            playAgainFn();
          }}
        >
          Play Again
        </Button>
      </div>
    </div>
  );
};

export const useDrawModal = ({ playAgainFn }: { playAgainFn: () => void }) => {
  const [isDrawModalOpen, setIsModalOpen] = useState(false);

  const openDrawModal = () => setIsModalOpen(true);
  const closeModal = () => {
    playAgainFn();
    setIsModalOpen(false);
  };

  return {
    openDrawModal,
    DrawModalComponent: (
      <Modal isModalOpen={isDrawModalOpen} closeModal={closeModal}>
        <DrawModal playAgainFn={playAgainFn} closeDrawModal={closeModal} />
      </Modal>
    ),
  };
};
