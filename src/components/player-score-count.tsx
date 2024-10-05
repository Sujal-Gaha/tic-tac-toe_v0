import { TPlayer } from "@/constants/player";

export const PlayerScoreCount = ({ players }: { players: TPlayer[] }) => {
  return (
    <div className="flex flex-col w-full gap-2">
      {players.map((player) => (
        <div key={player.id} className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-[#252528] dark:bg-primary text-white flex items-center justify-center">
              <span className="text-white font-semibold">{player.id}</span>
            </div>
            <h1 className="font-semibold text-lg text-black dark:text-[#C9C9C7]">
              {player.name}
            </h1>
          </div>
          <h1 className="font-bold text-4xl text-black dark:text-[#C9C9C7]">
            {player.score}
          </h1>
        </div>
      ))}
    </div>
  );
};
