"use client";

import { tiles as tilesData, TTile } from "@/constants/tile";
import { IoMdClose } from "react-icons/io";
import { Modal } from "@/components/modal";
import { useState } from "react";
import { motion } from "framer-motion";
import { Cross } from "@/components/cross";
import { Circle } from "@/components/circle";

type TTurn = "player_one" | "player_two";

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
  const [turn, setTurn] = useState<TTurn>("player_one");
  const [tiles, setTiles] = useState<TTile[]>(tilesData);

  const isPlayerOneTurn = turn === "player_one";
  const toggleTurn = () =>
    setTurn(isPlayerOneTurn ? "player_two" : "player_one");

  const setTileSelectedBy = (id: number) => {
    const updatedTiles = [...tiles];

    updatedTiles.forEach((tile, index) => {
      if (tile.id === id) {
        updatedTiles[index].selectedBy = turn;
        updatedTiles[index].isSelected = true;
      }
    });

    console.log("updatedTiles ", updatedTiles);

    setTiles(updatedTiles);
  };

  const handleTileClicked = (id: number) => {
    toggleTurn();
    setTileSelectedBy(id);
  };

  const { PlayerWonModalComponent, isPlayerWonModalOpen, openPlayerWonModal } =
    usePlayerWonModal();

  return (
    <div className="grid grid-cols-3 grid-rows-3 h-full gap-4">
      {tiles.map((tile) => {
        if (tile.selectedBy === "player_one") {
          return <Cross key={tile.id} />;
        }

        if (tile.selectedBy === "player_two") {
          return <Circle key={tile.id} />;
        }

        return (
          <motion.div
            key={tile.id}
            className="bg-[#ff033e] rounded-md dark:bg-[#C9C9C7] flex items-center justify-center cursor-pointer"
            onClick={() => handleTileClicked(tile.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        );
      })}
      {isPlayerWonModalOpen && PlayerWonModalComponent}
    </div>
  );
};
