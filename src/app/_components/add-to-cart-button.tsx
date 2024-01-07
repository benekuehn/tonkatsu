"use client";

import { useAtom } from "jotai";
import { cartAtom } from "../store/atom";

export const AddToCartButton = ({ id }: { id: string }) => {
  const [cartState, setCart] = useAtom(cartAtom);

  console.log(cartState);

  const handleOnClick = (id: string) => {
    setCart(cartState.concat(id));
    sessionStorage.setItem("cart", cartState.concat(id).toString());
  };

  return <button onClick={() => handleOnClick(id)}>AddToCartButton</button>;
};
