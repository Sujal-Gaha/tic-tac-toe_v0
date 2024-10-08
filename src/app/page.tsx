"use client";

import { Button } from "@/components/ui/button";
import { PlayerScoreCount } from "@/components/player-score-count";
import { Board } from "@/modules/board";
import { useBoardFeatures } from "@/hooks/useBoardFeatures";

export default function Home() {
  const {
    tiles,
    playAgainFn,
    resetBoardFn,
    handleTileClickedFn,
    players,
    isDraw,
    PlayerWonModalComponent,
  } = useBoardFeatures();

  if (isDraw) {
    setTimeout(() => {
      console.log("Draw vayo");
    }, 500);
  }

  return (
    <main className="flex items-center justify-center bg-white dark:bg-[#0F0F10] mt-60">
      <section className="w-[448px] h-[496px] bg-white dark:bg-[#18181b] rounded-lg p-6 shadow-2xl shadow-[#E11D48] flex flex-col gap-6">
        <PlayerScoreCount players={players} />
        <Board tiles={tiles} handleTileClickedFn={handleTileClickedFn} />
        <div className="flex items-center justify-between w-full">
          <Button variant="edit" size="lg">
            Edit Players
          </Button>
          <Button variant="outline" size="lg" onClick={playAgainFn}>
            Play again
          </Button>
          <Button variant="reset" size="lg" onClick={resetBoardFn}>
            Reset
          </Button>
        </div>
      </section>
      {PlayerWonModalComponent}
    </main>
  );
}
