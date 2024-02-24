"use client";

import { useAtom } from "jotai";
import { cartAtom } from "../store/atom";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export const AddToCartButton = ({ id }: { id: string }) => {
  const [cartState, setCart] = useAtom(cartAtom);

  const handlePlusOnClick = (id: string) => {
    const state = cartState[id] ?? 0;
    setCart({ ...cartState, [id]: state + 1 });
  };

  const handleMinusOnClick = (id: string) => {
    const state = cartState[id] ?? 0;
    if (state > 0) {
      setCart({ ...cartState, [id]: state - 1 });
    }
  };

  const isItemInCart = cartState[id] !== undefined && cartState[id]! > 0;

  const itemsInCart = cartState[id] ?? 0;

  return (
    <div className="flex items-center gap-2">
      {isItemInCart && (
        <button
          onClick={() => handleMinusOnClick(id)}
          className="rounded bg-gray-700 p-2"
        >
          <MinusIcon />
        </button>
      )}
      {isItemInCart && (
        <div className="flex min-w-4 justify-center">{itemsInCart}</div>
      )}
      <button
        onClick={() => handlePlusOnClick(id)}
        className="rounded bg-gray-700 p-2"
      >
        <PlusIcon />
      </button>
    </div>
  );
};
