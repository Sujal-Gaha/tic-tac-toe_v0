import { squares } from "@/constants/square";

export const Board = () => {
  return (
    <div className="grid grid-cols-3 h-full gap-4">
      {squares.map((square) => (
        <div
          key={square.id}
          className="bg-primary rounded-md dark:bg-[#C9C9C7]"
        ></div>
      ))}
    </div>
  );
};
