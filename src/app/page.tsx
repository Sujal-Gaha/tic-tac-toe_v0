import { Button } from "@/components/button";
import { Board } from "@/components/ui/board";
import { PlayerScoreCount } from "@/components/ui/player-score-count";

export default function Home() {
  return (
    <main className="h-screen w-screen flex items-center justify-center bg-white dark:bg-[#0F0F10]">
      <section className="w-[448px] h-[496px] bg-white dark:bg-[#18181b] rounded-lg p-6 shadow-2xl shadow-primary flex flex-col gap-6">
        <PlayerScoreCount />
        <Board />
        <div className="flex items-center justify-center w-full">
          <Button />
        </div>
      </section>
    </main>
  );
}
