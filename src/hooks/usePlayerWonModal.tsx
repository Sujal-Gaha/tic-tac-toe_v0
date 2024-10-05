import { Modal } from "@/components/modal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const PlayerWonModal = ({
  isModalOpen,
  closeModal,
  player,
  playAgainFn,
}: {
  isModalOpen: boolean;
  closeModal: () => void;
  player: string;
  playAgainFn: () => void;
}) => {
  return (
    <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
      <div className="py-16 px-24 rounded-md bg-white flex flex-col items-center justify-center gap-4">
        <span className="text-4xl font-medium">{player} won!</span>
        <div>
          <Button
            variant="outline"
            onClick={() => {
              closeModal();
              playAgainFn();
            }}
          >
            Play Again
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export const usePlayerWonModal = ({
  playAgainFn,
}: {
  playAgainFn: () => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [player, setPlayer] = useState("");

  const openPlayerWonModal = () => setIsModalOpen(true);
  const closePlayerWonModal = () => setIsModalOpen(false);

  return {
    openPlayerWonModal,
    closePlayerWonModal,
    PlayerWonModalComponent: (
      <PlayerWonModal
        isModalOpen={isModalOpen}
        closeModal={closePlayerWonModal}
        player={player}
        playAgainFn={playAgainFn}
      />
    ),
    setPlayer,
  };
};
