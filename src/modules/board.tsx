"use client";

import { TTile } from "@/constants/tile";
import { motion } from "framer-motion";
import { Cross } from "@/components/cross";
import { Circle } from "@/components/circle";

export const Board = ({
  tiles,
  handleTileClickedFn,
}: {
  tiles: TTile[];
  handleTileClickedFn: (id: number) => void;
}) => {
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
            onClick={() => handleTileClickedFn(tile.id)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        );
      })}
    </div>
  );
};
