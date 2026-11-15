import { GameMenu, Item } from "narraleaf-react";
import React from "react";

const CustomMenu: React.FC = ({ items }: { items: number[] }) => {
  return (
    <GameMenu className="absolute right-4 top-4/6 w-2/4">
      <div className="flex items-center flex-col gap-4 w-full">
        {items.map((item) => (
          <Item
            key={item}
            className="bg-white px-4 rounded-md py-4 text-black text-xl w-full tracking-widest uppercase font-medium"
            fontSize={"35px"}
            fontWeight={500}
          />
        ))}
      </div>
    </GameMenu>
  );
};

export default CustomMenu;
