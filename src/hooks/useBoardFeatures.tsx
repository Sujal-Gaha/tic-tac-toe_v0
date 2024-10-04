import { TTile } from "@/constants/tile";
import { useState } from "react";
import { tiles as tilesData } from "@/constants/tile";

export type TTurn = "player_one" | "player_two";

export const useBoardFeatures = () => {
  const [turn, setTurn] = useState<TTurn>("player_one");
  const [tiles, setTiles] = useState<TTile[]>(tilesData);
  const [selectedTileP1, setSelectedTileP1] = useState<number[]>([]);
  const [selectedTileP2, setSelectedTileP2] = useState<number[]>([]);

  const isPlayerOneTurn = turn === "player_one";
  const isPlayerTwoTurn = turn === "player_two";

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

  const setSelectedTile = (id: number) => {
    if (isPlayerOneTurn) {
      const updatedSelectedTileP1 = [...selectedTileP1];
      updatedSelectedTileP1.push(id);
      setSelectedTileP1(updatedSelectedTileP1);
    }

    if (isPlayerTwoTurn) {
      const updatedSelectedTileP2 = [...selectedTileP2];
      updatedSelectedTileP2.push(id);
      setSelectedTileP2(updatedSelectedTileP2);
    }
  };

  const handleTileClickedFn = (id: number) => {
    toggleTurnFn();
    setTileSelectedBy(id);
    setSelectedTile(id);
  };

  return {
    tiles,
    resetBoardFn,
    handleTileClickedFn,
  };
};
