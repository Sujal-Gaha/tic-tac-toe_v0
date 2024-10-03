import { TTile } from "@/constants/tile";
import { useState } from "react";
import { tiles as tilesData } from "@/constants/tile";

export type TTurn = "player_one" | "player_two";

export const useBoardFeatures = () => {
  const [turn, setTurn] = useState<TTurn>("player_one");
  const [tiles, setTiles] = useState<TTile[]>(tilesData);

  const isPlayerOneTurn = turn === "player_one";

  const resetBoardFn = () => {
    setTurn("player_one");

    const resetTiles = [...tiles];
    resetTiles.forEach((tile) => {
      tile.isSelected = false;
      tile.selectedBy = "";
    });

    setTiles(resetTiles);
  };

  const toggleTurnFn = () =>
    setTurn(isPlayerOneTurn ? "player_two" : "player_one");

  const setTileSelectedBy = (id: number) => {
    const updatedTiles = [...tiles];

    updatedTiles.forEach((tile, index) => {
      if (tile.id === id) {
        updatedTiles[index].selectedBy = turn;
        updatedTiles[index].isSelected = true;
      }
    });

    setTiles(updatedTiles);
  };

  const handleTileClickedFn = (id: number) => {
    toggleTurnFn();
    setTileSelectedBy(id);
  };

  return {
    tiles,
    resetBoardFn,
    handleTileClickedFn,
  };
};
